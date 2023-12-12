'use client';

import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';

import api from '@/app/api';
import Button from '@/components/common/Button';

import styles from './index.module.scss';

function SocialButtonGroup() {
  const { data } = useQuery({
    queryKey: ['test'],
    queryFn: () => api({
      url: '/tags',
      isBFF: false,
    }),
  });

  console.log(data);

  return (
    <div className={styles.socialButtonGroup}>
      <Button
        style={{
          backgroundColor: '#FEE33A',
          color: '#000000',
        }}
        prefixIcon={<Image src="/assets/logos/kakao.svg" width={19} height={18} alt="카카오로 로그인하기" />}
      >
        카카오로 로그인하기
      </Button>
      <Button
        style={{
          backgroundColor: '#03C75A',
          color: '#ffffff',
        }}
        prefixIcon={<Image src="/assets/logos/naver.svg" width={14} height={14} alt="네이버로 로그인하기" />}
      >
        네이버로 로그인하기
      </Button>
    </div>
  );
}

export default SocialButtonGroup;
