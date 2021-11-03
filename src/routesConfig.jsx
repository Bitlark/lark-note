import React, { Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import LoadingPage from '~/pages/loading-page'
import routes from '~/routes'
import history from '~/utils/history'

export default function RouterConfig() {
  return (
    <Router history={history}>
      <Suspense fallback={<LoadingPage key="suspense-loading" mode="circle" />}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.name || route.path}
              path={route.path}
              exact
              render={(props) => {
                return <route.component {...props} route={route} />
              }}
            />
          ))}
        </Switch>
      </Suspense>
    </Router>
  )
}
