import { useEffect, useState } from 'react';
import { TabBar } from '@components/layout/tabBar/TabBar';
import { Content } from '@components/report/content/Content';
import { EditBottomSheet } from '@components/common/bottomSheet/EditBottomSheet';
import { BasicModal } from '@components/common/modal/BasicModal';
import { ReportBottomSheet } from '@/components/common/bottomSheet/reportBottomSheet/ReportBottomSheet';
import { SkillProps } from '@/types/Analysis';
import { getAnalysis } from '@/api/Analysis';
import { useParams } from 'react-router-dom';
import { FolderChangeBottomSheet } from '@/components/common/bottomSheet/FolderChangeBottomSheet';

export const ReportPage = () => {
  const { id } = useParams<{ id: string }>();
  const [openBottom, setOpenBottom] = useState(false);
  const [openEditBottom, setOpenEditBottom] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openChangeBottom, setOpenChangeBottom] = useState(false);
  const [data, setData] = useState<SkillProps | null>(null);

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
    if (data) {
      setData({ ...data, [key]: value });
    }
  };

  const handleAbilityChange = (index: number, value: string) => {
    if (data && data.abilityDtoList) {
      const updatedAbilities = data.abilityDtoList.map((item, idx) =>
        idx === index ? { ...item, content: value } : item,
      );
      setData({ ...data, abilityDtoList: updatedAbilities });
    }
  };
  useEffect(() => {
    const fetchSkill = async () => {
      if (id) {
        const analysisId = parseInt(id, 10);
        if (!isNaN(analysisId)) {
          const skillData = await getAnalysis(analysisId);
          if (skillData) {
            setData(skillData);
          }
        }
      }
    };
    fetchSkill();
  }, [id]);

  return (
    <>
      <TabBar
        centerText="역량 모아보기"
        onClick={toggleBottomSheet}
        isEditable={true}
        onClickEditIcon={toggleEditBottomSheet}
      />
      {data && <Content data={data} />}
      {openBottom && (
        <EditBottomSheet
          onClick={toggleBottomSheet}
          onClickDelete={toggleModal}
          onClickChange={toggleChangeFoler}
        />
      )}
      {openEditBottom && data && (
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
      {openChangeBottom && <FolderChangeBottomSheet onClick={toggleChangeFoler} />}
    </>
  );
};
