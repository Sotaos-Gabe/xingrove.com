import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const CloudNative = (props) => {

  return (
    <section id='cloudNative' className={styles.cloud}>
      <div className='row'>
        <div className='col col--12'>
          <div className={styles.core}>
            <div>产品核心价值</div>
            <div className={styles.core_desc}>Xingrove旨在帮助企业快速扩展、自由创新并实现快速投资回报，同时避免供应商绑定。</div>
            <div className={styles.core_desc}>无论您是进行数据现代化改造、优化运营还是变革客户体验，都能提供符合企业级需求的定制化AI解决方案。</div>
          </div>
        </div>
        <div className='col col--6'>
          {/* <img src='./img/page/cloud-native.png' className={styles.img_right}></img> */}
          <div className={styles.title_left}>
            <div className={styles.fisrttitle}><abbr className={styles.fontcolor}>企业级定制</abbr></div>
            <div className={styles.subtitle}></div>
            <div className={styles.desc}>深度场景适配：根据行业特性和工作流进行精准调优</div>
            <div className={styles.desc}>加速目标达成：与企业战略目标保持高度一致性</div>
            {/* <Link
              key='start'
              className={clsx(~
                'button--primary',
              )}
              style={{ marginBottom: '30px', fontWeight: 700 }}
              to={useBaseUrl('docs/concepts/function/observability')}>
              详情{['>']}
            </Link> */}
          </div>
        </div>
        <div className='col col--6'>
          <div className={styles.title_right}>
            <div className={styles.fisrttitle}><abbr className={styles.fontcolor}>开源灵活性</abbr></div>
            <div className={styles.subtitle}></div>
            <div className={styles.desc}>打破厂商锁定：可自由定制、修改并集成至现有系统</div>
            <div className={styles.desc}>完全自主可控：掌握AI战略主动权，数据主权零风险</div>
            {/* <Link
              key='start'
              className={clsx(
                'button--primary',
              )}
              style={{ marginBottom: '30px', fontWeight: 700 }}
              to={useBaseUrl('docs/concepts/function/apps')}>
              详情{['>']}
            </Link> */}
          </div>
          {/* <img src='./img/page/observability.png' className={styles.img_left}></img> */}
        </div>
      </div>

    </section >
  )
}

export default CloudNative
