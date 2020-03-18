import UniversalRouter, { Routes } from 'universal-router'
import { AppConfig, PageConfig } from '@tarojs/taro'
import { LocationListener, LocationState } from 'history'
import { createReactApp, createPageConfig, Current, createVueApp, PageInstance, eventCenter } from '@tarojs/runtime'
import { qs } from './qs'
import { history } from './history'
import { stacks } from './stack'
import { init } from './init'
import { createPullDownRefresh } from './pull-down'

export interface Route extends PageConfig {
  path: string
  load: () => Promise<any>
}

export interface RouterConfig extends AppConfig {
  routes: Route[]
}

function addLeadingSlash (path?: string) {
  if (path == null) {
    return ''
  }
  return path.charAt(0) === '/' ? path : '/' + path
}

function hidePage (page: PageInstance | null) {
  if (page != null) {
    page.onHide!()
    const pageEl = document.getElementById(page.path!)
    if (pageEl) {
      pageEl.style.display = 'none'
    }
  }
}

function showPage (page: PageInstance | null) {
  if (page != null) {
    page.onShow!()
    stacks.push(page)
    const pageEl = document.getElementById(page.path!)
    if (pageEl) {
      pageEl.style.display = 'block'
    } else {
      page.onLoad(qs())
    }
  }
}

function unloadPage (page: PageInstance | null) {
  if (page != null) {
    page.onHide!()
    stacks.pop()
    page.onUnload()
  }
}

function loadPage (page: PageInstance | null) {
  if (page !== null) {
    let pageEl = document.getElementById(page.path!)
    if (pageEl) {
      pageEl.style.display = 'block'
    } else {
      page.onLoad(qs())
      pageEl = document.getElementById(page.path!);
      pageEl && (pageEl['__page'] = page)
    }
    page.onShow!()
    stacks.push(page)
  }
}

export function createRouter (App, config: RouterConfig, framework: 'react' | 'vue' | 'nerv') {
  init(config)

  const routes: Routes = []

  for (let i = 0; i < config.routes.length; i++) {
    const route = config.routes[i]
    routes.push({
      path: addLeadingSlash(route.path),
      action: route.load
    })
  }

  const router = new UniversalRouter(routes)
  const app = framework === 'react' ? createReactApp(App) : createVueApp(App)
  app.onLaunch()

  const render: LocationListener<LocationState> = async (location, action) => {
    const element = await router.resolve(location.pathname)
    const pageConfig = config.routes.find(r => addLeadingSlash(r.path) === location.pathname)
    let enablePullDownRefresh = false

    eventCenter.trigger('__taroRouterChange', {
      toLocation: {
        path: location.pathname
      }
    })

    if (pageConfig) {
      document.title = pageConfig.navigationBarTitleText ?? document.title
      enablePullDownRefresh = pageConfig.enablePullDownRefresh!
    }

    let shouldLoad = false

    if (action === 'POP') {
      unloadPage(Current.page)
      const prev = stacks.find(s => s.path === location.pathname)
      if (prev) {
        showPage(prev)
      } else {
        shouldLoad = true
      }
    } else if (action === 'PUSH') {
      hidePage(Current.page)
      shouldLoad = true
    } else if (action === 'REPLACE') {
      unloadPage(Current.page)
      shouldLoad = true
    }

    if (shouldLoad) {
      const el = element.default ?? element
      const page = createPageConfig(
        enablePullDownRefresh ? createPullDownRefresh(el, framework, location.pathname) : el,
        location.pathname
      )
      loadPage(page)
    }
  }

  if (history.location.pathname === '/') {
    history.replace(config.pages![0])
  }

  render(history.location, 'PUSH')

  app.onShow!(qs())

  return history.listen(render)
}
