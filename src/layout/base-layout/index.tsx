import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

import { Layout, Menu, Input, Button } from 'antd'
const { Header, Footer } = Layout

import './index.less'
import Logo from '@/assets/img/logo.png'
import Trabook from '@/assets/img/trabook.png'
import Facebook from '@/assets/img/facebook.png'
import Twitter from '@/assets/img/twitter.png'
import Tree from '@/assets/img/tree.png'
import Circle from '@/assets/img/circle.png'

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
          label: 'Project 1',
          key: 'Project 2'
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
      <Footer className="footer">
        <div className="card">
          <div className="subscribe">
            Subscribe and get exclusive deals & offer
          </div>
          <div>
            <Input placeholder="Enter your mail" />
            <Button className="subscribe-btn">Subscribe</Button>
          </div>
          <img className="tree" src={Tree} alt="tree" />
          <img className="circle" src={Circle} alt="circle" />
        </div>
        <div className="connect-nav">
          <div className="connect">
            <div className="title">
              <span>Trabook</span>
              <img src={Trabook} alt="trabook" />
            </div>
            <div className="description">
              Book your trip in minute, get full Control for much longer.
            </div>
            <div className="connect-icon">
              <div>
                <img src={Facebook} alt="facebook" />
              </div>
              <div>
                <img src={Twitter} alt="twitter" />
              </div>
            </div>
          </div>
          <div className="nav">
            <div className="item">
              <div className="title">Company</div>
              <div className="list">
                <div>About</div>
                <div>Careers</div>
                <div>Logistic</div>
                <div>Privacy & Policy</div>
              </div>
            </div>
            <div className="item">
              <div className="title">Contact</div>
              <div className="list">
                <div>Help/FAQ</div>
                <div>Press</div>
                <div>Affilates</div>
              </div>
            </div>
            <div className="item">
              <div className="title">More</div>
              <div className="list">
                <div>Press Centre</div>
                <div>Our Blog</div>
                <div>Low fare tips</div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="copyright">
          <span>Copyright, Trabook 2022. All rights reserved.</span>
          <span>Terms & Conditions</span>
        </div>
      </Footer>
    </Layout>
  )
})

BaseLayout.displayName = 'BaseLayout'

export default BaseLayout
