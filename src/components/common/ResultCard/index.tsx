import clsx from 'clsx';

import fonts from '@/app/fonts';
import { ArrowIcon } from '@/lib/assets';
import { ColorType } from '@/lib/types/color';

import styles from './index.module.scss';

type Props = {
  color: ColorType;
};

function ResultCard({ color }: Props) {
  return (
    <div className={styles.resultCardWrapper}>
      <div className={styles.cardTitleWrapper}>
        <div className={styles.optionTitle}>
          <div className={clsx(styles.gradBadge, styles[color])}>
            <div className={clsx(fonts.samliphopangche, styles.grade)}>1등</div>
          </div>
          <div className={styles.space} />
          <div className={clsx(fonts.samliphopangche, styles.voted)}>51명 적음</div>
        </div>
        <div className={styles.titleDescription}>
          <div className={styles.title}>안녕하세요안녕하세요안녕하세요</div>
          <button className={styles.arrowButton} type="button">
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div className={clsx(fonts.samliphopangche, styles.resultCardContents)}>
        <div className={styles.voterTitle}>태그 적은 사람</div>
        <div className={styles.voter}>
          사승민, 안정균, 한채영,어쩌고,저쩌고,어쩌고저쩌고,블라블라,
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
