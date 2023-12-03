import clsx from 'clsx';

import fonts from '@/app/fonts';
import Button from '@/components/common/Button';
import Tag from '@/components/common/Tag';
import { PlusIcon } from '@/lib/assets';

import styles from './index.module.scss';

function TagInputBottomSheet() {
  return (
    <div className={styles.bottomFixedSheet}>
      <div className={styles.tagInputWrapper}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={clsx(fonts.samliphopangche, styles.input)}
            maxLength={15}
            placeholder="태그를 직접 작성해보세요! (15자 이내)"
          />
          <button className={styles.plusButton} type="button">
            <PlusIcon />
          </button>
        </div>
        <div className={styles.tagListWrapper}>
          <Tag label="멋져" tagType="selected" />
          <Tag label="멋" tagType="selected" />
          <Tag label="멋져요" tagType="selected" />
        </div>
      </div>
      <Button fullWidth type="button">태그 추가완료</Button>
    </div>
  );
}

export default TagInputBottomSheet;
