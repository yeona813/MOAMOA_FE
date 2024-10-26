import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 17.4375rem;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%),
    #d6dcff;
  padding: 4.1875rem 1.25rem 0px;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const YellowBlur = styled.div`
  position: absolute;
  top: -7.0625rem;
  left: -4.5rem;
  width: 14.125rem;
  height: 14.125rem;
  background-color: #fcff65;
  opacity: 0.2;
  filter: blur(4.6875rem);
  border-radius: 6.1875rem;
`;

export const BlueBlur = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  width: 6.25rem;
  height: 6.25rem;
  background-color: rgba(0, 55, 255, 0.81);
  filter: blur(100px);
  border-radius: 99px;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 135%;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 4.8125rem;
  right: 1.25rem;
`;

export const Content = styled.div`
  position: absolute;
  top: 13.875rem;
  right: 0;
  width: 100%;
  height: 33.125rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 1.25rem 0rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray25};
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 1.125rem;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 140%;
`;

export const Plus = styled.p`
  font-size: 0.75rem;
  line-height: 145%;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SheetContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.75rem;
  gap: 0.75rem;
`;
