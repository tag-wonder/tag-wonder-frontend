import clsx from 'clsx';

import fonts from '@/app/fonts';

import styles from './index.module.scss';

type Props = {
  subTitle: string;
};

function TitleSection({ subTitle }: Props) {
  return (
    <div className={clsx(styles.titleSection, fonts.samliphopangche)}>
      <div className={styles.titleWrapper}>
        <div className={styles.dividerLeft} />
        <h1 className={styles.title}>너의 태그가 궁금해</h1>
        <div className={styles.dividerRight} />
      </div>
      <h2 className={styles.subTitle}>
        {subTitle}
      </h2>
    </div>
  );
}

export default TitleSection;
