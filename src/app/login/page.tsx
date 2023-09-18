import PageLayout from '@/components/common/PageLayout';
import SocialButtonGroup from '@/components/login/SocialButtonGroup';

function LoginPage() {
  return (
    <PageLayout subTitle="친구들이 생각하는 나는 어떨지 태그로 같이 알아볼래?">
      <SocialButtonGroup />
    </PageLayout>
  );
}

export default LoginPage;
