import * as S from './SkillList.Style';
import { getGraph } from '@/api/Graph';
import { SkillData } from '@/types/SkillData';
import { useState, useEffect } from 'react';

export const SkillList = () => {
  const [chartData, setChartData] = useState<SkillData[]>([]);

  useEffect(() => {
    const fetchGraphData = async () => {
      const data = await getGraph();
      if (data) {
        setChartData(data.map((skill: any) => ({
          keyword: skill.keyword,
          count: skill.count,
          percent: skill.percent
        })));
      }
    };
    fetchGraphData();
  }, []);

  return (
    <S.Container>
      <S.Line />
      {chartData.map((skill) => (
        <S.ListItem key={skill.keyword} $percent={skill.percent}>
          <S.TitleWrapper>
            <S.Title>{skill.keyword}</S.Title>
            <S.Percent>{skill.percent}%</S.Percent>
          </S.TitleWrapper>
          <S.CountCircle $percent={skill.percent}>
            <S.Count>{skill.count}</S.Count>
          </S.CountCircle>
        </S.ListItem>
      ))}
    </S.Container>
  );
};