import React, { memo } from 'react'

import style from './index.module.less'

import { GithubOutlined } from '@ant-design/icons'

const contributors = memo(() => {
  const contributors = [
    {
      name: 'Jzow',
      avatar: 'https://avatars.githubusercontent.com/u/68860495?v=4',
      location: 'ChengDu, China'
    },
    {
      name: '2788',
      avatar: 'https://avatars.githubusercontent.com/u/15196134?v=4',
      location: 'Shanghai, China'
    },
    {
      name: 'aiv2008',
      avatar: 'https://avatars.githubusercontent.com/u/13746572?v=4',
      location: ''
    },
    {
      name: 'secretgao',
      avatar: 'https://avatars.githubusercontent.com/u/16075268?v=4',
      location: ''
    },
    {
      name: 'Yangandmore',
      avatar: 'https://avatars.githubusercontent.com/u/16630631?v=4',
      location: 'Hangzhou, China'
    },
    {
      name: 'yuluo-zy',
      avatar: 'https://avatars.githubusercontent.com/u/33770335?v=4',
      location: ''
    },
    {
      name: 'Cosmoflips',
      avatar: 'https://avatars.githubusercontent.com/u/37982167?v=4',
      location: ''
    },
    {
      name: 'xuhanfeng2219',
      avatar: 'https://avatars.githubusercontent.com/u/25318146?v=4',
      location: 'Shenzhen, China'
    },
    {
      name: 'joeyback911',
      avatar: 'https://avatars.githubusercontent.com/u/3395306?v=4',
      location: ''
    },
    {
      name: 'YSZ0927',
      avatar: 'https://avatars.githubusercontent.com/u/35676507?v=4',
      location: ''
    },
    {
      name: 'Niko030303',
      avatar: 'https://avatars.githubusercontent.com/u/82041918?v=4',
      location: 'Guangdong, China'
    },
    {
      name: 'Sh1-5',
      avatar: 'https://avatars.githubusercontent.com/u/48705798?v=4',
      location: 'SuZhou, China'
    }
  ]
  return (
    <div className={style.contributors}>
      <div className={style.content}>
        <div className={style.title}>Meet the Team</div>
        <div className={style.list}>
          {contributors.map((item) => {
            return (
              <div className={style.item} key={item.name}>
                <img className={style.avatar} src={item.avatar} alt="avatar" />
                <span>{item.name}</span>
                <span>{item.location}</span>
                <a href={`https://github.com/${item.name}`} target="__blank">
                  <GithubOutlined />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
})

contributors.displayName = 'contributors'

export default contributors
