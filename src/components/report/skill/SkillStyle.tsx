import styled from 'styled-components';

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Description = styled.textarea`
  width: 100%;
  height: 6.5rem;
  padding: 0.5rem 0.75rem;
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
