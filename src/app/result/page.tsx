import clsx from 'clsx';

import ResultCard from '@/components/common/ResultCard';

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
          <ResultCard
            color="pink"
            title="안녕하세요안녕하세요안녕하세요"
            voteCount={51}
            voters={['사승민', '안졍군', '한채영', '어쩌고', '저쩌고', '어쩌고저쩌고', '블라블라']}
            grade={1}
          />
          <ResultCard
            color="brown"
            title="안녕하세요안녕하세요안녕하세요"
            voteCount={29}
            voters={['사승민', '안졍군', '한채영', '어쩌고', '저쩌고', '어쩌고저쩌고', '블라블라']}
            grade={2}
          />
          <ResultCard
            color="grey"
            title="안녕하세요안녕하세요안녕하세요"
            voteCount={13}
            voters={['사승민', '안졍군', '한채영', '어쩌고', '저쩌고', '어쩌고저쩌고', '블라블라']}
            grade={3}
          />
        </div>
      </section>
      <div className={styles.divider} />
      <section className={styles.resultSection}>
        <h2 className={clsx(fonts.samliphopangche, styles.subTitle)}>내가 받은 태그 목록</h2>
        <div className={styles.resultContentsWrapper}>
          <ResultCard
            title="안녕하세요안녕하세요안녕하세요"
            voteCount={4}
            voters={['사승민', '안졍군', '한채영', '어쩌고', '저쩌고', '어쩌고저쩌고', '블라블라']}
          />
          <ResultCard
            title="안녕하세요안녕하세요안녕하세요"
            voteCount={3}
            voters={['사승민', '안졍군', '한채영', '어쩌고', '저쩌고', '어쩌고저쩌고', '블라블라']}
          />
          <ResultCard
            title="안녕하세요안녕하세요안녕하세요"
            voteCount={2}
            voters={['사승민', '안졍군', '한채영', '어쩌고', '저쩌고', '어쩌고저쩌고', '블라블라']}
          />
        </div>
      </section>
    </main>
  );
}

export default ResultPage;
