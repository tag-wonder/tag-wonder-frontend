'use client';

import clsx from 'clsx';

import { CheckIcon, CloseIcon } from '@/lib/assets';

import styles from './index.module.scss';

type TagType = 'default' | 'checked' | 'selected';

type Props = {
  tagType?: TagType;
  label: string;
  onClick?: (tagName: string) => void;
};

function Tag({ tagType = 'default', label, onClick }: Props) {
  const tagLabel = `#${label}`;

  const handleClick = () => onClick?.(label);

  if (tagType === 'selected') {
    return (
      <div className={clsx(styles.tagWrapper, styles[tagType])}>
        <div>{tagLabel}</div>
        <button type="button" onClick={handleClick} className={styles.removeIconButton}>
          <CloseIcon />
        </button>
      </div>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={clsx(styles.tagWrapper, styles[tagType])}>
      <div>{tagLabel}</div>
      <CheckIcon className={styles[tagType]} />
    </button>
  );
}

export default Tag;
