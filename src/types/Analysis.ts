interface abilityProps {
  keyword: string;
  content: string;
}

export interface SkillProps {
  analysisId: number;
  chatRoomId: number | null;
  recordId: number;
  recordType: string;
  recordTitle: string;
  recordContent: string;
  abilityDtoList: abilityProps[];
  comment: string;
  createdAt: string;
}
