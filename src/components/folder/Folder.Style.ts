import { Colors } from '@/styles/colors';
import styled, { css } from 'styled-components';

export const Folder = styled.section<{ $type: 'folder' | 'plus' }>`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  color: ${Colors.gray800};

  ${({ $type }) =>
    $type === 'folder'
      ? css`
          background-color: ${Colors.blue50};
        `
      : css`
          flex-shrink: 0;
          cursor: pointer;
          background-color: ${Colors.blue100};
        `}
`;
