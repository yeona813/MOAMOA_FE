import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 15rem 2rem 1.25rem;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(164, 176, 255, 0.2) 100%
  );
  text-align: center;
`;

export const Logo = styled.p`
  font-size: 1.625rem;
  font-weight: 600;
  top: 17.25rem;
  margin-bottom: 1.25rem;
  line-height: 250%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 0.8125rem;
  font-weight: 400;
  margin-bottom: 2rem;
  line-height: 126%;
  color: ${Colors.gray300};
`;

export const LogoImage = styled.img`
  width: 11.25rem;
  height: 11.25rem;
  margin: 2rem 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 30.375rem;
  margin: 0 auto;
  margin-bottom: 4.8125rem;
`;
