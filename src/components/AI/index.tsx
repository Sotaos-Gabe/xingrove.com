import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

const AI = (props) => {
  return (
    <section id='ai' className={styles.ai}>
      <div className='row'>
        <div className='col col--6'>
          {/* <img src='./img/page/edge.png' className={styles.ai_img_right}></img> */}
          <div className={styles.ai_title_left}>
            <div className={styles.ai_fisrttitle}><abbr className={styles.ai_fontcolor}>快速价值兑现</abbr></div>
            <div className={styles.ai_subtitle}></div>
            <div className={styles.ai_desc}>敏捷见效 ：模块化架构支持30-60天快速部署见效。</div>
            <div className={styles.ai_desc}>已验证成效 ：90天助力企业实现300%业务增长。</div>
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
        <div className='col col--6'>
          <div className={styles.ai_title_right}>
            <div className={styles.ai_fisrttitle}><abbr className={styles.ai_fontcolor}>成本最优解</abbr></div>
            <div className={styles.ai_subtitle}></div>
            <div className={styles.ai_desc}>弹性扩展 ：API调用计费，许可证成本可控。</div>
            <div className={styles.ai_desc}>规模经济 ：支持业务全域低成本扩展。</div>
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

        <div className='col col--6'>
          <div className={styles.ai_title_left}>
            <div className={styles.ai_fisrttitle}><abbr className={styles.ai_fontcolor}>可信赖透明性</abbr></div>
            <div className={styles.ai_subtitle}></div>
            <div className={styles.ai_desc}>开源可见性 ：模型、算法和训练数据全程可审计。</div>
            <div className={styles.ai_desc}>合规保障 ：符合企业级安全和隐私标准。</div>
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

        <div className='col col--6'>
          <div className={styles.ai_title_right}>
            <div className={styles.ai_fisrttitle}><abbr className={styles.ai_fontcolor}>协作式生态创新</abbr></div>
            <div className={styles.ai_subtitle}></div>
            <div className={styles.ai_desc}>开放生态 ：鼓励第三方开发者与企业共建解决方案。</div>
            <div className={styles.ai_desc}>加速迭代 ：通过社区协作快速集成前沿技术。</div>
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
