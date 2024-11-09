import { useState } from 'react';
import { TabBar } from '@components/layout/tabBar/TabBar';
import { Content } from '@components/report/content/Content';
import { EditBottomSheet } from '@components/common/bottomSheet/EditBottomSheet';
import { BasicModal } from '@components/common/modal/BasicModal';
import { FolderBottomSheet } from '@components/common/bottomSheet/FolderBottomSheet';
import { ReportBottomSheet } from '@/components/common/bottomSheet/reportBottomSheet/ReportBottomSheet';

const MOCK_DATA = {
  recordTitle: '코어레코드 와이어프레임 설계',
  recordContent:
    '사용자 관점에서 코어 레코드 서비스를 설계하고 다른 파트 팀원들과 커뮤니케이션을 했어요. 사용자 관점에서 코어 레코드 서비스를 설계하고 다른 파트 팀원들과 커뮤니케이션을 했어요.',
  abilityDtoList: [
    {
      keyword: '커뮤니케이션',
      content:
        '경쟁 서비스 기능, 사용자 인터페이스(UI), 요금제 등을 분석하고 글로벌 시장에서 주요 플레이어들의 특징을 파악한 점은 서비스 기획 직무에서 필수적인 시장 분석 능력을 잘 보여줍니다.',
    },
    {
      keyword: '커뮤니케이션',
      content:
        '경쟁 서비스 기능, 사용자 인터페이스(UI), 요금제 등을 분석하고 글로벌 시장에서 주요 플레이어들의 특징을 파악한 점은 서비스 기획 직무에서 필수적인 시장 분석 능력을 잘 보여줍니다.',
    },
    {
      keyword: '커뮤니케이션',
      content:
        '경쟁 서비스 기능, 사용자 인터페이스(UI), 요금제 등을 분석하고 글로벌 시장에서 주요 플레이어들의 특징을 파악한 점은 서비스 기획 직무에서 필수적인 시장 분석 능력을 잘 보여줍니다.',
    },
  ],
};

export const ReportPage = () => {
  const [openBottom, setOpenBottom] = useState(false);
  const [openEditBottom, setOpenEditBottom] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openChangeBottom, setOpenChangeBottom] = useState(false);
  const [data, setData] = useState(MOCK_DATA);

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  const toggleEditBottomSheet = () => {
    setOpenBottom(false);
    setOpenEditBottom((prev) => !prev);
  };

  const toggleModal = () => {
    setOpenBottom(false);
    setOpenDelete((prev) => !prev);
  };

  const toggleChangeFoler = () => {
    setOpenBottom(false);
    setOpenChangeBottom((prev) => !prev);
  };

  const handleDataChange = (key: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleAbilityChange = (index: number, value: string) => {
    const updatedAbilities = data.abilityDtoList.map((item, idx) =>
      idx === index ? { ...item, content: value } : item,
    );
    setData((prevData) => ({
      ...prevData,
      abilityDtoList: updatedAbilities,
    }));
  };

  return (
    <>
      <TabBar
        centerText="역량 모아보기"
        onClick={toggleBottomSheet}
        isEditable={true}
        onClickEditIcon={toggleEditBottomSheet}
      />
      <Content data={MOCK_DATA} />
      {openBottom && (
        <EditBottomSheet
          onClick={toggleBottomSheet}
          onClickDelete={toggleModal}
          onClickChange={toggleChangeFoler}
        />
      )}
      {openEditBottom && (
        <ReportBottomSheet
          onClick={toggleEditBottomSheet}
          onClickStore={() => {
            console.log(data);
            toggleEditBottomSheet();
          }}
          data={data}
          onChange={handleDataChange}
          onAbilityChange={handleAbilityChange}
        />
      )}
      {openDelete && (
        <BasicModal
          text="역량 레포트를 삭제하시겠어요?"
          leftButtonText="돌아가기"
          rightButtonText="삭제하기"
          onClickBackground={toggleModal}
          onClickLeft={toggleModal}
          onClickRight={() => {
            console.log('여기 구현해야함');
          }}
        />
      )}
      {openChangeBottom && (
        <FolderBottomSheet
          onClick={toggleChangeFoler}
          onClickButton={() => {
            console.log('구현해야함');
          }}
          title="폴더 변경하기"
          text="저장할 폴더를 선택해주세요"
          isSelectBox={true}
        />
      )}
    </>
  );
};
