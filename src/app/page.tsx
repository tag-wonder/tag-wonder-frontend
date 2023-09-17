import Image from 'next/image';

import TitleSection from '@/components/common/TitleSection';
import SocialButtonGroup from '@/components/login/SocialButtonGroup';

import styles from './index.module.scss';

function Home() {
  return (
    <main className={styles.main}>
      <TitleSection subTitle="친구들이 생각하는 나는 어떨지 태그로 같이 알아볼래?" />
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
        <SocialButtonGroup />
      </div>
    </main>
  );
}

export default Home;
