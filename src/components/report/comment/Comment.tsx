import * as S from './Comment.Style';

interface CommentProps {
  comment: string;
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <S.Comment>
      <S.Title>이 점을 보완해보세요.</S.Title>
      <S.Container>
        <S.Div />
        <S.Description>{comment}</S.Description>
      </S.Container>
    </S.Comment>
  );
};
