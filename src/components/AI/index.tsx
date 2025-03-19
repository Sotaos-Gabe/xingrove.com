import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

const AI = (props) => {
  return (
    <section id='ai' className={styles.ai}>
      <div className='row'>
        <div className='col col--4'>
          {/* <img src='./img/page/edge.png' className={styles.ai_img_right}></img> */}
          <div className={styles.ai_title_left}>
            <div className={styles.ai_fisrttitle}><abbr className={styles.ai_fontcolor}>快速价值兑现</abbr></div>
            <div className={styles.ai_subtitle}></div>
            <div className={styles.ai_desc}>模块化架构支持30-60天快速部署见效</div>
            <div className={styles.ai_desc}>90天助力企业实现300%业务增长</div>
            {/* <Link
              key='start'
              className={clsx(
                'button--primary',
              )}
              style={{ marginBottom: '30px', fontWeight: 700 }}
              to={useBaseUrl('docs/concepts/function/mlserving')}>
              详情{['>']}
            </Link> */}
          </div>
        </div>
        <div className='col col--4'>
          <div className={styles.ai_title_left}>
            <div className={styles.ai_fisrttitle}><abbr className={styles.ai_fontcolor}>成本最优解</abbr></div>
            <div className={styles.ai_subtitle}></div>
            <div className={styles.ai_desc}>API调用计费，许可证成本可控</div>
            <div className={styles.ai_desc}>支持业务全域低成本扩展</div>
            {/* <Link
              key='start'
              className={clsx(
                'button--primary',
              )}
              style={{ marginBottom: '30px', fontWeight: 700 }}
              to={useBaseUrl('docs/concepts/function/edge')}>
              详情{['>']}
            </Link> */}
          </div>
          {/* <img src='./img/page/ai.png' className={styles.ai_img_left}></img> */}
        </div>

        <div className='col col--4'>
          <div className={styles.ai_title_left}>
            <div className={styles.ai_fisrttitle}><abbr className={styles.ai_fontcolor}>可信赖透明性</abbr></div>
            <div className={styles.ai_subtitle}></div>
            <div className={styles.ai_desc}>模型、算法和训练数据全程可审计</div>
            <div className={styles.ai_desc}>符合企业级安全和隐私标准</div>
            {/* <Link
              key='start'
              className={clsx(
                'button--primary',
              )}
              style={{ marginBottom: '30px', fontWeight: 700 }}
              to={useBaseUrl('docs/concepts/function/edge')}>
              详情{['>']}
            </Link> */}
          </div>
          {/* <img src='./img/page/ai.png' className={styles.ai_img_left}></img> */}
        </div>
      </div>

    </section >
  )
}

export default AI
