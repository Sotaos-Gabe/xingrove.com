import React from 'react';
import styles from './styles.module.css';

const Benefit = (props) => {
  return (
    <section id='benefit' className={styles.benefit}>
      <div className='row'>
        <div className='col col--12'>
          <div className={styles.benefit_title}>
            <div>用户案例</div>
          </div>
        </div>
        <div className='col col-25'>
          <div className={styles.benefit_desc_left}>
            <img src='./img/xin/hospital.png' className={styles.benefit_img}></img>
            <div className={styles.benefit_desc}>
              <div className={styles.benefit_desc_title}>医疗场景</div>
              <div className={styles.benefit_desc_content}>提供无人值守查房、辅助查房、辅助诊疗、药品配送等服务。</div>
            </div>
          </div>
        </div>
        <div className='col col-25'>
          <div className={styles.benefit_desc_middle}>
            <img src='./img/xin/saic.png' className={styles.benefit_img}></img>
            <div className={styles.benefit_desc}>
              <div className={styles.benefit_desc_title}>智能制造</div>
              <div className={styles.benefit_desc_content}>利用大模型和具象智能解决出厂前的人工检测工作，大幅提高检测效率。</div>
            </div>
          </div>
        </div>
        <div className='col col-25'>
          <div className={styles.benefit_desc_middle}>
            <img src='./img/xin/k-12.png' className={styles.benefit_img}></img>
            <div className={styles.benefit_desc}>
              <div className={styles.benefit_desc_title}>教育场景</div>
              <div className={styles.benefit_desc_content}>未来实验小学、南开实验小学利用大模型生成教学方案初稿，帮助教师快速生成教学课件。</div>
            </div>
          </div>
        </div>
        <div className='col col-25'>
          <div className={styles.benefit_desc_right}>
            <img src='./img/xin/judicial.png' className={styles.benefit_img}></img>
            <div className={styles.benefit_desc}>
              <div className={styles.benefit_desc_title}>司法场景</div>
              <div className={styles.benefit_desc_content}>根据立法意图和内容生成编纂参考和立法文件草案；按照上位法建立立法依据比对，对立法草案进行立法一致性和规范合规性审查。</div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Benefit
