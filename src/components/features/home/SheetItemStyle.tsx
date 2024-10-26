import styled from 'styled-components';

export const SheetItem = styled.div<{ $color: string }>`
  position: relative;
  display: flex;
  width: 100%;
  height: 6.1875rem;
  padding: 0.75rem 0rem 0.75rem 0.4375rem;
  gap: 0.875rem;
  background-color: ${(props) =>
    props.$color === 'blue' ? props.theme.colors.blue50 : props.theme.colors.yellow100};
  color: ${({ theme }) => theme.colors.gray900};
  border-radius: 0.125rem;
  cursor: pointer;
`;

export const Icon = styled.div<{ $color: string }>`
  width: 0.4375rem;
  height: 100%;
  background-image: ${(props) =>
    props.$color === 'blue'
      ? "url('/icons/BlueCirclesIcon.svg')"
      : "url('/icons/YellowCirclesIcon.svg')"};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const SubTitle = styled.p`
  font-size: 0.875rem;
  line-height: 145%;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 135%;
`;

export const Blur = styled.div<{ $color: string }>`
  position: absolute;
  width: 6.25rem;
  height: 6.25rem;
  bottom: -2.5rem;
  right: -1.25rem;
  border-radius: 6.1875rem;
  background-color: ${(props) =>
    props.$color === 'blue' ? '#657cff' : props.theme.colors.yellow300};
  opacity: ${(props) => (props.$color === 'blue' ? 0.4 : 0.8)};
  filter: blur(3.75rem);
`;
