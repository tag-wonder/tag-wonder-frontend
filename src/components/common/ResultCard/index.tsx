'use client';

import { checkEmpty, checkNumber } from '@nf-team/core';
import { useBoolean } from '@nf-team/react';
import clsx from 'clsx';

import fonts from '@/app/fonts';
import { ArrowIcon } from '@/lib/assets';
import { ColorType } from '@/lib/types/color';

import styles from './index.module.scss';

type Props = {
  color?: ColorType;
  grade?: number;
  voteCount: number;
  title: string;
  voters: string[];
};

function ResultCard({
  color, grade, voteCount, title, voters,
}: Props) {
  const [isOpen, , , toggleOpen] = useBoolean(false);

  return (
    <div className={clsx(styles.resultCardWrapper, isOpen && styles.open)}>
      <div className={clsx(styles.cardTitleWrapper, isOpen && styles.open)}>
        {grade && (
          <div className={styles.optionTitle}>
            <div className={clsx(styles.gradBadge, color && styles[color])}>
              <div className={clsx(fonts.samliphopangche, styles.grade)}>{`${checkNumber(grade)}등`}</div>
            </div>
            <div className={styles.space} />
            <div className={clsx(fonts.samliphopangche, styles.voted)}>{`${checkNumber(voteCount)}명 적음`}</div>
          </div>
        )}
        <div className={styles.titleDescription}>
          <div className={styles.title}>{`${title}${grade ? '' : `(${checkNumber(voteCount)})`}`}</div>
          <button className={styles.arrowButton} type="button" onClick={() => toggleOpen()}>
            <ArrowIcon className={clsx(styles.arrowIcon, isOpen && styles.open)} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={clsx(fonts.samliphopangche, styles.resultCardContents)}>
          <div className={styles.voterTitle}>태그 적은 사람</div>
          <div className={styles.voter}>
            {checkEmpty(voters).join(', ')}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultCard;
