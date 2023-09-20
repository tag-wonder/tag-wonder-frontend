import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import PageLayout from '@/components/common/PageLayout';

import styles from './index.module.scss';

function HomePage() {
  return (
    <PageLayout
      subTitle="이름 등록하고 내 칠판을 캡쳐해서 친구들한테 공유해봐!"
      formSection={(
        <div className={styles.formWrapper}>
          <Input id="name" labelText="이름" placeholder="이름을 입력해주세요" />
        </div>
      )}
    >
      <div className={styles.buttonWrapper}>
        <Button type="button">
          칠판 만들기
        </Button>
      </div>
    </PageLayout>
  );
}

export default HomePage;
