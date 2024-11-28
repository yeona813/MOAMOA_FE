import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.375rem 1.9375rem 2.25rem;
  background-color: ${Colors.white};

  ${(props) => props.theme.breakpoints.min} {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ${(props) => props.theme.breakpoints.min} {
    display: flex;
    width: auto;
    align-items: flex-start;
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: #373737;

  ${(props) => props.theme.breakpoints.min} {
    gap: 0.5rem;
  }
`;

export const Text = styled.h6`
  line-height: 140%;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.5rem;
    line-height: 135%;
  }
`;

export const SubText = styled.p`
  font-size: 0.8125rem;
  line-height: 145%;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 140%;
  }
`;

export const Button = styled.button`
  padding: 0.25rem 0.75rem;
  color: #1d1d1d;
  border: 1px solid #1d1d1d;
  border-radius: 6.25rem;
  background-color: #ffffff;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1rem;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ${(props) => props.theme.breakpoints.min} {
    gap: 0.875rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  ${(props) => props.theme.breakpoints.min} {
    width: 24.625rem;
    height: 8rem;
  }
`;

export const Record = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.blue400};
  box-shadow: 0px 0px 8px 0px rgba(255, 248, 152, 0.6) inset;
  border-radius: 1rem;
  color: ${Colors.white};
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.min} {
    height: 3.75rem;
    font-size: 1.125rem;
  }
`;
