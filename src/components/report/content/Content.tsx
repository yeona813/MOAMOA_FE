import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/button/Button';
import * as S from './Content.Style';
import { Skill } from '../skill/Skill';
import { useState } from 'react';
import { Comment } from '../comment/Comment';

const SKILL_DATA = [
  {
    keyword: '커뮤니케이션',
    description:
      '경쟁 서비스 기능, 사용자 인터페이스(UI), 요금제 등을 분석하고 글로벌 시장에서 주요 플레이어들의 특징을 파악한 점은 서비스 기획 직무에서 필수적인 시장 분석 능력을 잘 보여줍니다.',
  },
  {
    keyword: '커뮤니케이션',
    description:
      '경쟁 서비스 기능, 사용자 인터페이스(UI), 요금제 등을 분석하고 글로벌 시장에서 주요 플레이어들의 특징을 파악한 점은 서비스 기획 직무에서 필수적인 시장 분석 능력을 잘 보여줍니다.',
  },
  {
    keyword: '커뮤니케이션',
    description:
      '경쟁 서비스 기능, 사용자 인터페이스(UI), 요금제 등을 분석하고 글로벌 시장에서 주요 플레이어들의 특징을 파악한 점은 서비스 기획 직무에서 필수적인 시장 분석 능력을 잘 보여줍니다.',
  },
];

//@TODO 백엔드 연동하면서 지금 텍스트로 박아놓은 것들 바꿀 예정입니다!

interface ContentProps {
  isEdit: boolean;
}

export const Content = ({ isEdit }: ContentProps) => {
  const navigate = useNavigate();
  const [skillData, setSkillData] = useState(SKILL_DATA);
  const [description, setDescription] = useState(
    '사용자 관점에서 코어 레코드 서비스를 설계하고 다른 파트 팀원들과 커뮤니케이션을 했어요.',
  );

  const goToChatPage = () => {
    navigate('/chat');
  };

  const handleDescriptionChange = (index: number, updatedDescription: string) => {
    setSkillData((prevData) =>
      prevData.map((item, idx) =>
        idx === index ? { ...item, description: updatedDescription } : item,
      ),
    );
  };

  const handleDescripton = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const onSaveChanges = () => {
    console.log('Updated skill data:', skillData);
    console.log(description);
  };

  return (
    <S.Content>
      <S.TopContent>
        <S.Title>코어레코드 와이어프레임 설계</S.Title>
        <S.Description value={description} onChange={handleDescripton} readOnly={!isEdit} />
      </S.TopContent>
      <S.MiddleContent>
        <S.MiddleHead>
          <S.SubTitle>코코님의 핵심 역량</S.SubTitle>
          <Button styleType="small" onClick={goToChatPage}>
            채팅 다시보기
          </Button>
        </S.MiddleHead>
        <S.SkillContainer>
          {SKILL_DATA.map((item, index) => (
            <Skill
              key={index}
              keyword={item.keyword}
              description={item.description}
              isEditable={isEdit}
              onChange={(updatedDescription) => handleDescriptionChange(index, updatedDescription)}
            />
          ))}
        </S.SkillContainer>
      </S.MiddleContent>
      <Comment
        comment="리더십에서는 팀원들의 의견을 적극적으로 수렴하고 맞춤형 지원을 제공하는 것이 좋으며,
        의사소통에서는 간결하고 명확한 메시지 전달과 다양한 스타일 조절이 필요합니다."
      />
      {isEdit && (
        <Button styleType="shadow" onClick={onSaveChanges}>
          수정 완료하기
        </Button>
      )}
    </S.Content>
  );
};
