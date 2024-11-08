import { useNavigate } from 'react-router-dom';
import * as S from './Content.Style';
import { Skill } from '../skill/Skill';
import { Comment } from '../comment/Comment';

interface Ability {
  keyword: string;
  content: string;
}

interface RecordData {
  recordTitle: string;
  recordContent: string;
  abilityDtoList: Ability[];
}

interface ContentProps {
  data: RecordData;
}

//@TODO 백엔드 연동하면서 지금 텍스트로 박아놓은 것들 바꿀 예정입니다!

export const Content = ({ data }: ContentProps) => {
  const navigate = useNavigate();

  const goToChatPage = () => {
    navigate('/chat');
  };

  return (
    <S.Content>
      <S.TopContent>
        <S.Title>{data.recordTitle}</S.Title>
        <S.Description>{data.recordContent}</S.Description>
      </S.TopContent>
      <S.Line />
      <S.MiddleContent>
        <S.MiddleHead>
          <S.Title>코코님의 핵심 역량</S.Title>
          <S.ChatText onClick={goToChatPage}>채팅 다시보기</S.ChatText>
        </S.MiddleHead>
        {data.abilityDtoList.map((item, index) => (
          <Skill
            key={index}
            keyword={item.keyword}
            description={item.content}
            color={index % 2 !== 0}
          />
        ))}
      </S.MiddleContent>
      <S.Line />
      <Comment
        comment="리더십에서는 팀원들의 의견을 적극적으로 수렴하고 맞춤형 지원을 제공하는 것이 좋으며,
        의사소통에서는 간결하고 명확한 메시지 전달과 다양한 스타일 조절이 필요합니다."
      />
    </S.Content>
  );
};
