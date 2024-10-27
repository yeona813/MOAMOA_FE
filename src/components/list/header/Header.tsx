import { useNavigate } from 'react-router-dom';
import * as S from './HeaderStyle';
import { CategoryChip } from '../../common/chip/CategoryChip';

interface HeaderProps {
  nickname: string;
  folderData: string[] | null;
  selectFolder: string;
  onClick: (folderName: string) => void;
}

/**
 *
 * @param nickname - 유저 이름
 * @param folderData - 폴더 리스트 | null
 * @param selectFolder - 선택된 폴더 값
 * @param onClick - 폴더를 선택하는 함수
 * @returns
 */
export const Header = ({ nickname, folderData, selectFolder, onClick }: HeaderProps) => {
  const navigate = useNavigate();

  const goToFolderPage = () => {
    navigate('/folder');
  };

  return (
    <S.Header>
      <S.Title>{nickname}님의 경험 리스트</S.Title>
      <S.FolderContainer>
        <S.FolderIcon onClick={goToFolderPage}>
          <S.Icon src="/icons/FolderIcon.svg" alt="FolderIcon" />
        </S.FolderIcon>
        <S.ChipContainer>
          {folderData &&
            folderData.map((item, index) => (
              <CategoryChip
                key={index}
                isSelected={item === selectFolder}
                onClick={() => onClick(item)}
              >
                {item}
              </CategoryChip>
            ))}
        </S.ChipContainer>
      </S.FolderContainer>
    </S.Header>
  );
};
