import { Header } from '../../components/features/my/Header';
import { Profile } from '../../components/features/my/Profile';
import { Settings } from '../../components/features/my/Settings';

export const MyPage = () => {
  return (
    <div>
      <Header />
      <Profile />
      <Settings />
    </div>
  );
};
