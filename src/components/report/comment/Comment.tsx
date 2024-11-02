import * as S from './CommentStyle';
import LeftIcon from '@icons/LeftCommentIcon.svg';
import RightIcon from '@icons/RightArrowIcon.svg';

interface CommentProps {
  comment: string;
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <S.Comment>
      <S.Title>co:mment</S.Title>
      <S.Content>
        <img src={LeftIcon} alt="leftIcon" />
        {comment}
        <img src={RightIcon} alt="rightIcon" />
      </S.Content>
    </S.Comment>
  );
};
