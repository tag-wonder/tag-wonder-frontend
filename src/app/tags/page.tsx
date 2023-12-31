import clsx from 'clsx';

import Tag from '@/components/common/Tag';
import TagInputBottomSheet from '@/components/tag/TagInputBottomSheet';

import fonts from '../fonts';

import styles from './index.module.scss';

function TagsPage() {
  return (
    <>
      <main className={styles.tagsMainWrapper}>
        <div>
          <label className={clsx(fonts.hSYuji, styles.nameLabel)} htmlFor="name">
            <span className={styles.labelText}>작성자 이름:</span>
            &nbsp;
            <input id="name" type="text" className={styles.nameInput} placeholder="입력하셈" />
          </label>
        </div>
        <div className={clsx(fonts.samliphopangche, styles.description)}>
          <div className={styles.infoDescription}>
            {'이미 남겨진 태그중에 선택하거나,\n마음에 드는 태그가 없다면 직접 작성해보세요!'}
          </div>
          <div className={styles.boldDescription}>(3개까지 추가 가능)</div>
        </div>
        <div className={styles.tagsContainer}>
          <Tag label="tag1" tagType="selected" />
          <Tag label="tag2" tagType="checked" />
          <Tag label="tag3" />
          <Tag label="안녕하세요안녕하세요안녕하세요" />
          <Tag label="어쩌구저쩌구" />
          <Tag label="잘생김" />
          <Tag label="어쩌구저쩌구" />
          <Tag label="어쩌구저쩌구" />
          <Tag label="어쩌구저쩌구" />
          <Tag label="어쩌구저쩌구" />
          <Tag label="어쩌구저쩌구" />
          <Tag label="어쩌구저쩌구" />
          <Tag label="어쩌구저쩌구" />
        </div>
      </main>
      <TagInputBottomSheet />
    </>
  );
}

export default TagsPage;
