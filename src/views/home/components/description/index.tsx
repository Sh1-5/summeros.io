import React, { memo } from 'react'

import style from './index.module.less'

import { Button, Select } from 'antd'
const { Option } = Select
import Air from '@/assets/img/air.png'
import Honor from '@/assets/img/honor.png'
import Explore from '@/assets/img/explore.png'
import Star from '@/assets/img/star.png'

const Description = memo(() => {
  return (
    <div className={style.description}>
      <div className={style.content}>
        <div className={style.title}>
          <div>Summer</div>
          <div>Open Source</div>
          <div>Projects</div>
        </div>
        <div className={style.desc}>
          We are an open source project organization focusing on the
          construction of the next generation Web3 framework.
        </div>
        <Button className={style.quickStart} type="primary">
          Quick Start
        </Button>
        <div className={style.document}>
          <div>
            <Select bordered={false} defaultValue="Project1">
              <Option value="Project1">Project1</Option>
              <Option value="Project2">Project2</Option>
            </Select>
            <div>Choose a project</div>
          </div>
          <div>
            <Select bordered={false} defaultValue="Version1">
              <Option value="Version1">Version1</Option>
              <Option value="Version2">Version2</Option>
            </Select>
            <div>Choose a version</div>
          </div>
          <Button className={style.readDocument} type="primary">
            Read Document
          </Button>
        </div>
        <img className={style.air} src={Air} alt="air" />
        <img className={style.honor} src={Honor} alt="honor" />
        <img className={style.explore} src={Explore} alt="explore" />
        <img className={style.star} src={Star} alt="star" />
      </div>
    </div>
  )
})

Description.displayName = 'Description'

export default Description
