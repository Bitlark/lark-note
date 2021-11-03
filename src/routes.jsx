import { lazy } from 'react'

// preload core component  https://stackoverflow.com/a/58509569
import PreloadLoading from './pages/loading-page'
import PreloadError from './pages/network-error'
import PreloadNotFound from './pages/not-found-page'

let routes = [
  {
    path: '/login',
    component: lazy(() => import('./pages/login-page')),
  },
  {
    path: '/',
    component: lazy(() => import('./pages/main-pane')),
  },
]

routes = [
  ...routes,
  {
    name: 'loading-page',
    path: '/loading-page',
    component: PreloadLoading,
  },
  {
    name: 'network-error',
    path: '/network-error',
    component: PreloadError,
  },
  {
    name: '404',
    path: '*',
    component: PreloadNotFound,
  },
]

export default routes
