import styled from 'styled-components';

export const Textarea = styled.textarea<{ $isTitle: boolean }>`
  width: 100%;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  outline: none;
  resize: none;
  font-size: ${({ $isTitle }) => ($isTitle ? '1.25rem' : '1rem')};
  font-weight: ${({ $isTitle }) => ($isTitle ? '700' : '400')};
  line-height: ${({ $isTitle }) => ($isTitle ? '135%' : '145%')};
  color: ${({ theme }) => theme.colors.gray900};
  font-family: 'Pretendard';
  min-height: ${({ $isTitle }) => ($isTitle ? '5rem' : '7.25rem')};
  height: auto; /* 높이를 내용에 맞게 조정 */
  overflow-y: hidden; /* 스크롤바 제거 */
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
