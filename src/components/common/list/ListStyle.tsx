import styled from 'styled-components';

const sizeStyles = {
  small: {
    height: '5.875rem',
    gap: '1rem',
    padding: '0.5rem 0.625rem',
    fontSize: '0.5625rem',
  },
  large: {
    height: '7.125rem',
    gap: '0.875rem',
    padding: '0.6875rem 0.4375rem',
    fontSize: '0.6875rem',
  },
};

export const List = styled.section<{ $type: 'small' | 'large' }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(props) => sizeStyles[props.$type].height};
  gap: ${(props) => sizeStyles[props.$type].gap};
  color: ${({ theme }) => theme.colors.gray900};
  padding: ${(props) => sizeStyles[props.$type].padding};
  border-radius: 0.125rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0rem 0.1875rem 0.375rem 0rem rgba(0, 0, 0, 0.04);
  cursor: pointer;
`;

export const Icon = styled.div<{ $type: 'small' | 'large' }>`
  width: ${(props) => (props.$type === 'small' ? '0.375rem' : '0.4375rem')};
  height: 100%;
  background-image: url('/icons/CirclesIcon.svg');
`;

export const Content = styled.div<{ $type: 'small' | 'large' }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$type === 'small' ? '0.375rem' : '0.5rem')};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`;

export const FolderText = styled.span`
  font-size: 0.75rem;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const Title = styled.h6`
  line-height: 140%;
`;

export const DateText = styled.p<{ $type: 'small' | 'large' }>`
  font-size: ${(props) => sizeStyles[props.$type].fontSize};
  line-height: 145%;
`;
