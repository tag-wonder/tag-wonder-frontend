import { CheckIcon, CloseIcon } from '@/lib/assets';

import styles from './index.module.scss';

type TagType = 'default' | 'checked' | 'selected';

type Props = {
  tagType?: TagType;
  label: string;
};

function Tag({ tagType = 'default', label }: Props) {
  const tagLabel = `#${label}`;

  if (tagType === 'selected') {
    return (
      <div className={styles.tagWrapper}>
        <div>{tagLabel}</div>
        <button type="button">
          <CloseIcon />
        </button>
      </div>
    );
  }

  return (
    <button type="button" className={styles.tagWrapper}>
      <div>{tagLabel}</div>
      <CheckIcon />
    </button>
  );
}

export default Tag;
