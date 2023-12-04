import clsx from 'clsx';

import fonts from '../fonts';

import styles from './index.module.scss';

function ResultPage() {
  return (
    <main className={styles.resultWrapper}>
      <h1 className={clsx(fonts.samliphopangche, styles.titleWrapper)}>
        <div>·</div>
        <div className={styles.title}>{'{이름} 태그 결과'}</div>
        <div>·</div>
      </h1>
      <section className={styles.resultSection}>
        <h2 className={clsx(fonts.samliphopangche, styles.subTitle)}>가장 많이 적혀진 태그</h2>
        <div className={styles.resultContentsWrapper}>
          <div>1등</div>
          <div>2등</div>
          <div>3등</div>
        </div>
      </section>
      <div className={styles.divider} />
      <section className={styles.resultSection}>
        <h2 className={clsx(fonts.samliphopangche, styles.subTitle)}>가장 많이 적혀진 태그</h2>
        <div className={styles.resultContentsWrapper}>
          <div>1등</div>
          <div>2등</div>
          <div>3등</div>
        </div>
      </section>
    </main>
  );
}

export default ResultPage;
