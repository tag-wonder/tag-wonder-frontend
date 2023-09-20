import { PropsWithChildren, ReactNode } from 'react';

import Image from 'next/image';

import TitleSection from '@/components/common/TitleSection';

import styles from './index.module.scss';

type Props = {
  subTitle: string;
  formSection?: ReactNode;
};

function PageLayout({ children, subTitle, formSection }: PropsWithChildren<Props>) {
  return (
    <main className={styles.main}>
      <TitleSection subTitle={subTitle} />
      <div className={styles.formWrapper}>
        {formSection}
      </div>
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
