import { CategoryChip } from '@/components/common/chip/CategoryChip';
import * as S from './KeywordSkill.style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeywordList } from '../keywordList/KeywordList';
import { Empty } from '@/components/common/empty/Empty';
import { KeywordSkillProps } from '@/types/Analysis';
import { getKeywordList, getRecords } from '@/api/Analysis';

export const KeywordSkill = () => {
  const navigate = useNavigate();
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const [recordList, setRecordList] = useState<KeywordSkillProps[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState(keywordList[0]);
  // const [lastRecordId, setLastRecordId] = useState(0);

  useEffect(() => {
    const fetchSkill = async () => {
      const keywordList = await getKeywordList();
      if (keywordList) {
        setKeywordList(keywordList);
      }
      if (selectedKeyword) {
        const recordList = await getRecords(selectedKeyword);
        if (recordList.recordDtoList) {
          setRecordList(recordList.recordDtoList);
        }
      }
    };

    fetchSkill();
  }, [selectedKeyword]);

  return (
    <S.Container>
      <S.ChipsContainer>
        {keywordList.length > 0 &&
          keywordList.map((item, index) => (
            <CategoryChip
              isSelected={selectedKeyword === item}
              onClick={() => setSelectedKeyword(item)}
              key={index}
            >
              {item}
            </CategoryChip>
          ))}
      </S.ChipsContainer>
      {recordList.length > 0 ? (
        <S.KeywordListContainer>
          {recordList.map((item) => (
            <KeywordList
              key={item.analysisId}
              chip={item.folder}
              title={item.title}
              description={item.content}
              date={item.createdAt}
              onClick={() => {
                navigate(`/report/${item.analysisId}`);
              }}
            />
          ))}
        </S.KeywordListContainer>
      ) : (
        <Empty />
      )}
    </S.Container>
  );
};
