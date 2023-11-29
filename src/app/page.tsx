import Link from 'next/link';

import { generateArrayOfNumber } from '@nf-team/core';
import clsx from 'clsx';

import Board from '@/components/common/Board';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import PageLayout from '@/components/common/PageLayout';
import { ArrowDownSquare } from '@/lib/assets';

import fonts from './fonts';

import styles from './index.module.scss';

function HomePage() {
  return (
    <PageLayout
      subTitle="이름 등록하고 내 칠판을 캡쳐해서 친구들한테 공유해봐!"
      formSection={(
        <>
          <div className={styles.formWrapper}>
            <Input id="name" labelText="이름" placeholder="이름을 입력해주세요" />
          </div>
          <div className={styles.linkWrapper}>
            <Link href="/result" className={clsx(fonts.samliphopangche, styles.link)}>
              <span>
                태그 결과 보러가기
              </span>
              <ArrowDownSquare />
            </Link>
          </div>
        </>
      )}
    >
      <div className={styles.contentsWrapper}>
        {generateArrayOfNumber(5).map((position) => (
          <Board key={position} position={position} title="harang" />
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <Button type="button" buttonType="secondary">
          칠판 만들기
        </Button>
        <Button href="/tags" buttonType="primary">
          태그 달기
        </Button>
      </div>
    </PageLayout>
  );
}

export default HomePage;
