import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Index from './containers/Index/Index'

export const urls = {
  index: '/',
  list: '/list',
}

export const routes = (
  <Route path={urls.index} component={Index}>
    <IndexRoute component={Index} />
  </Route>
)
