import { List } from '../../components/folder/list/List';
import { Header } from '../../components/layout/header/Header';
import { TabBar } from '../../components/layout/tabBar/TabBar';
import * as S from './FolderPageStyle';

const FOLDER_DATA = ['큐시즘 밋업', '마케팅 관리 팀플', '아르바이트', '공모전'];

export const FolderPage = () => {
  return (
    <div>
      <Header isTabBar={true}>
        <TabBar centerText="폴더 관리" rightText="편집" />
      </Header>
      <S.Content>
        {FOLDER_DATA.map((folder) => (
          <List type="folder">
            <h6>{folder}</h6>
          </List>
        ))}
        <List type="plus">
          <img src="/icons/PlusIcon.svg" alt="plusButton" />
        </List>
      </S.Content>
    </div>
  );
};
