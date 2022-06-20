import React from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'

import BaseLayout from '@/layout/base-layout'
import Home from '@/views/home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]

export default () => useRoutes(routes)
