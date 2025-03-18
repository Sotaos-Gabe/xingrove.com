import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import TweenOne from 'rc-tween-one';
import clsx from 'clsx';
import QueueAnim from 'rc-queue-anim';

const HomePage = (props) => {
  return (
    <section id='home'>
      <div className='row'>
        <div className='col col--6'>
          <div className={styles.title}>
            <div className={styles.fisrttitle}>Xingrove</div>
            <div className={styles.subtitle}>释放开源AI的力量，赋能您的企业。</div>
            <TweenOne
              style={{ opacity: 0, marginBottom: -100, position: 'relative' }}
              animation={{ opacity: 1, marginBottom: 0 }}
            >
              {/* <Link
                key='start'
                className={clsx(
                  'button button--primary button--lg',
                )}
                style={{ marginRight: '15px', marginTop: '5px', float: 'left', width: '150px' }}
                to={useBaseUrl('docs/installation/kubegems-install/self-hosted')}>
                快速开始
              </Link> */}

              {/* <Link
                key='start'
                style={{ marginRight: '15px', marginTop: '5px', float: 'left', width: '150px' }}
                to="https://demo.kubegems.io">
                在线演示
              </Link> */}

              <div className={styles.account}>
                <div className={styles.info}>账号: admin</div>
                <div className={styles.info}>密码: demo!@#admin</div>
              </div>

              <div
                style={{ marginRight: '15px', marginTop: '5px', float: 'left', lineHeight: '46px' }}
              >
                {/* <img src='./img/page/play.svg' width="45" style={{ cursor: 'pointer' }} onClick={() => { props.handleShowPlay() }}></img>
                <div style={{
                  float: 'right',
                  fontFamily: 'Roboto',
                  fontSize: '16px'
                }}>介绍视频</div> */}
              </div>
              <div style={{ clear: 'both' }} />
            </TweenOne>
          </div>
        </div>
        <div className='col col--6'>
          <img src='./img/xin/xingrove.png' className={styles.img}></img>
        </div>
      </div >
    </section >
  )
}

export default HomePage
