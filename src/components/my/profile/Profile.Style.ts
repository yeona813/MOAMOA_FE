import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.1875rem;
  padding: 1.375rem 1.5rem 2.5625rem 1.9375rem;
`;

export const Profile = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: #373737;
`;

export const Text = styled.h6`
  line-height: 140%;
`;

export const SubText = styled.p`
  font-size: 0.875rem;
  line-height: 145%;
`;

export const Button = styled.button`
  padding: 0.4375rem 0.75rem;
  border: 1px solid #1d1d1d;
  border-radius: 6.25rem;
  background-color: #ffffff;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
`;

export const Record = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue400};
  box-shadow: 0px 0px 8px 0px rgba(255, 248, 152, 0.6) inset;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 145%;
`;

export const Span = styled.span`
  font-weight: 700;
`;
