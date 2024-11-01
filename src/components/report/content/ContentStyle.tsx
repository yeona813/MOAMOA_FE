import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 6.375rem;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.875rem;
  color: ${({ theme }) => theme.colors.gray900};
  gap: 1.5625rem;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 135%;
`;

export const Description = styled.textarea`
  width: 100%;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  resize: none;
  font-family: 'Pretendard';
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 0.875rem;
  line-height: 145%;
  outline: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blue200};
  }
`;

export const MiddleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.0625rem;
`;

export const MiddleHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
