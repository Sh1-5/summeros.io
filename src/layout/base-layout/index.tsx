import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

import { Layout, Menu } from 'antd'
const { Header, Footer } = Layout

import './index.less'
import Logo from '@/assets/img/logo.png'

const BaseLayout = memo(() => {
  const menu = [
    {
      label: 'Home',
      key: 'home'
    },
    {
      label: 'About',
      key: 'about'
    },
    {
      label: 'Projects',
      key: 'project',
      children: [
        {
          label: 'Project 1',
          key: 'Project 1'
        },
        {
          label: 'project 1',
          key: 'project 2'
        }
      ]
    },
    {
      label: 'Support',
      key: 'support'
    },
    {
      label: 'Community',
      key: 'community',
      children: [
        {
          label: 'Contributors',
          key: 'contributors'
        }
      ]
    }
  ]

  return (
    <Layout className="summer">
      <Header className="header">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>Summer Open Source</span>
        </div>
        <Menu
          className="menu"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={menu}
        />
      </Header>
      <Outlet />
      <Footer></Footer>
    </Layout>
  )
})

BaseLayout.displayName = 'BaseLayout'

export default BaseLayout
