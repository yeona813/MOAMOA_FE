import styled from 'styled-components';

export const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.25rem;
  margin-top: 12.5rem;
  position: relative;
`;

export const Label = styled.text`
  font-size: 0.875rem;
  font-weight: 500;
  fill: ${({ theme }) => theme.colors.gray400};
  text-anchor: middle;
  dominant-baseline: middle;
`;

export const CHART_STYLES = {
  width: 420,
  height: 300,
  innerRadius: 70,
  outerRadius: 110,
  cornerRadius: 5,
  paddingAngle: 2,
  pieProps: {
    cx: "50%",
    cy: "50%",
    fill: "#8884d8",
    dataKey: "value"
  }
};