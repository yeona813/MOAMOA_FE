import { useState } from 'react';
import { RecordBottomSheet } from '@components/common/bottomSheet/RecordBottomSheet';
import { KeywordHeader } from '@/components/keyword/header/KeywordHeader';
import { SideBar } from '@/components/common/sideBar/SideBar';
import { KeywordSkill } from '@/components/keyword/keywordSkill/KeywordSkill';
import { SkillList } from '@/components/report/skill/SkillList';
import { SkillGraph } from '@/components/report/skill/SkillGraph';

export const KeywordPage = () => {
  const [openBottom, setOpenBottom] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [currentTabBar, setCurrentTabBar] = useState('역량 키워드');

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  const toggleSideBar = () => {
    setOpenSideBar((prev) => !prev);
  };

  const handleTabBar = (item: string) => {
    setCurrentTabBar(item);
  };

  return (
    <div>
      <KeywordHeader
        currentTabBar={currentTabBar}
        onClickTabBar={handleTabBar}
        onClickSideBar={toggleSideBar}
      />
      {currentTabBar === '역량 키워드' ? (
        <KeywordSkill onClick={toggleBottomSheet} />
      ) : (
        <>
          <SkillGraph />
          <SkillList />
        </>
      )}
      {openBottom && <RecordBottomSheet onClick={toggleBottomSheet} />}
      {openSideBar && <SideBar onClick={toggleSideBar} />}
    </div>
  );
};
