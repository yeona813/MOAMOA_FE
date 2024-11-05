import { useState } from 'react';
import { Chip } from '../../common/chip/Chip';
import * as S from './Skill.Style';

interface SkillProps {
  keyword: string;
  description: string;
  isEditable: boolean;
  onChange: (updateDescription: string) => void;
}

export const Skill = ({ keyword, description, isEditable, onChange }: SkillProps) => {
  const [editDescription, setEditDescription] = useState(description);

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditDescription(event.target.value);
    onChange(event.target.value);
  };

  return (
    <S.Skill>
      <Chip size="large">{keyword}</Chip>
      <S.Description
        value={editDescription}
        onChange={handleDescriptionChange}
        readOnly={!isEditable}
      />
    </S.Skill>
  );
};
