import { PropsWithChildren } from 'react';

import Image from 'next/image';

import TitleSection from '@/components/common/TitleSection';

import styles from './index.module.scss';

type Props = {
  subTitle: string;
};

function PageLayout({ children, subTitle }: PropsWithChildren<Props>) {
  return (
    <main className={styles.main}>
      <TitleSection subTitle={subTitle} />
      <div className={styles.formWrapper} />
      <div className={styles.tagContentsWrapper}>
        <Image
          src="/assets/images/board-background.png"
          alt="board-background-image"
          fill
          priority
          quality={100}
          className={styles.backgroundImage}
        />
        {children}
      </div>
    </main>
  );
}

export default PageLayout;
