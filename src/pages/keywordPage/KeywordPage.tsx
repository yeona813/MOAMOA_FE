import { useState } from 'react';
import { RecordBottomSheet } from '@components/common/bottomSheet/RecordBottomSheet';
import { KeywordHeader } from '@/components/keyword/header/KeywordHeader';
import { SideBar } from '@/components/common/sideBar/SideBar';
import { KeywordSkill } from '@/components/keyword/keywordSkill/KeywordSkill';
import { SkillList } from '@/components/keyword/skill/SkillList';
import { SkillGraph } from '@/components/keyword/skill/SkillGraph';

export const KeywordPage = () => {
  const [openBottom, setOpenBottom] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [currentTabBar, setCurrentTabBar] = useState('역량 키워드');
  const [selectedKeyword, setSelectedKeyword] = useState<string | undefined>(undefined);

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  const toggleSideBar = () => {
    setOpenSideBar((prev) => !prev);
  };

  const handleTabBar = (item: string) => {
    setCurrentTabBar(item);
  };

  const handleClickSkillList = () => {
    setCurrentTabBar('역량 키워드');
  };

  return (
    <div>
      <KeywordHeader
        currentTabBar={currentTabBar}
        onClickTabBar={handleTabBar}
        onClickSideBar={toggleSideBar}
      />
      {currentTabBar === '역량 키워드' ? (
        <KeywordSkill
          onClick={toggleBottomSheet}
          selectedKeyword={selectedKeyword}
          setSelectedKeyword={setSelectedKeyword}
        />
      ) : (
        <>
          <SkillGraph />
          <SkillList onClick={handleClickSkillList} setSelectedKeyword={setSelectedKeyword} />
        </>
      )}
      {openBottom && <RecordBottomSheet onClick={toggleBottomSheet} />}
      {openSideBar && <SideBar onClick={toggleSideBar} />}
    </div>
  );
};
