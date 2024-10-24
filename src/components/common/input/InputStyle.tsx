import styled from 'styled-components';

export const Input = styled.input`
  width: 20rem;
  padding: 0.75rem 0.5rem;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grey50}; // pr 머지 되면 이거 바꿔야함!
  color: ${({ theme }) => theme.colors.grey900};
  font-size: 0.875rem;
  font-weight: 400;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey300};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.blue200};
  }
`;
