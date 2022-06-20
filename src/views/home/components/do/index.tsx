import React, { memo } from 'react'

import style from './index.module.less'

import SummerBoot from '@/assets/img/summer-boot.png'
import SummerMybatis from '@/assets/img/summer-mybatis.png'
import SummerIpfsClient from '@/assets/img/summer-ipfs-client.png'
import TwoPlane from '@/assets/img/two-plane.png'

const Do = memo(() => {
  return (
    <div className={style.do}>
      <div className={style.content}>
        <div className={style.title}>
          <span>What summer</span>
          <span> to do</span>
        </div>
        <div className={style.desc}>
          Summer open source projects projects incubated at this stage.
        </div>
        <div className={style.list}>
          <div className={style.item}>
            <img src={SummerBoot} alt="summer-boot" />
            <div className={style.itemTitle}>Summer Boot</div>
            <div className={style.itemDesc}>
              Build a decentralized framework based on web3 (currently in the
              preparation stage)
            </div>
          </div>
          <div className={style.item}>
            <img src={SummerMybatis} alt="summer-boot" />
            <div className={style.itemTitle}>Summer Mybatis</div>
            <div className={style.itemDesc}>
              ORM framework based on rust language. It is used to simplify
              development.
            </div>
          </div>
          <div className={style.item}>
            <img src={SummerIpfsClient} alt="summer-boot" />
            <div className={style.itemTitle}>Summer IPFS Client</div>
            <div className={style.itemDesc}>
              Client developed based on rust language for connecting to IPFs
              server
            </div>
          </div>
        </div>
        <img className={style.twoPlane} src={TwoPlane} alt="two-plane" />
      </div>
    </div>
  )
})

Do.displayName = 'Do'

export default Do
