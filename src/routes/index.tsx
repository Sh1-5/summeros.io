import React from 'react'
import { RouteObject, useRoutes, Navigate } from 'react-router-dom'

import BaseLayout from '@/layout/base-layout'
import Home from '@/views/home'
import Contributors from '@/views/contributors'

const routes: RouteObject[] = [
  {
    path: '/*',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="home" />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'contributors',
        element: <Contributors />
      }
    ]
  }
]

export default () => useRoutes(routes)
