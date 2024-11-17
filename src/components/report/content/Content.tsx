import { useNavigate } from 'react-router-dom';
import * as S from './Content.Style';
import { Skill } from '../skill/Skill';
import { Comment } from '../comment/Comment';
import { SkillProps } from '@/types/Analysis';
import { getMemo } from '@/api/Memo';

interface ContentProps {
  data: SkillProps;
}

export const Content = ({ data }: ContentProps) => {
  const navigate = useNavigate();
  const nickname = localStorage.getItem('nickname');

  const goToPage = async () => {
    try {
      if (data.recordType === 'CHAT') {
        navigate(`/review-chat/${data.chatRoomId}`);
      } else {
        const response = await getMemo(data.recordId);
        if (response) {
          // 메모 데이터를 MemoPage로 전달
          navigate(`/review-memo/${data.recordId}`, { state: { memoData: response } });
        } else {
        }
      }
    } catch (error) {
      throw error;
    }
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
          <S.Title>{nickname}님의 핵심 역량</S.Title> {/* 유저 이름 */}
          <S.ChatText onClick={goToPage}>
            {data.recordType === 'CHAT' ? '채팅' : '메모'} 다시보기
          </S.ChatText>
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
      <Comment comment={data.comment} />
    </S.Content>
  );
};
