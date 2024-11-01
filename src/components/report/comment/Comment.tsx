import * as S from './CommentStyle';

interface CommentProps {
  comment: string;
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <S.Comment>
      <S.Title>co:mment</S.Title>
      <S.Content>
        <img src="/icons/LeftCommentIcon.svg" />
        {comment}
        <img src="/icons/RightCommentIcon.svg" />
      </S.Content>
    </S.Comment>
  );
};
