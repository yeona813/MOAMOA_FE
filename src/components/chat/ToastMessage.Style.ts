import { Colors } from '@/styles/colors';
import styled, { keyframes } from 'styled-components';

// 아래에서 위로 올라오는 애니메이션 (좌우 이동 방지)
export const fadeIn = keyframes`
  from { opacity: 0; transform: translate(-50%, 1.25rem); }
  to { opacity: 1; transform: translate(-50%, 0); }
`;

export const fadeOut = keyframes`
  from { opacity: 1; transform: translate(-50%, 0); }
  to { opacity: 0; transform: translate(-50%, 1.25rem); }
`;

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 10%; /* 화면 아래에서 시작 */
  left: 50%; /* 화면 중앙에 위치 */
  transform: translate(-50%, 0); /* 초기 위치를 중앙에 고정 */
  background-color: ${Colors.gray700};
  padding: 0.625rem 1.25rem;
  border-radius: 1.25rem;
  font-size: 1rem;
  animation:
    ${fadeIn} 0.5s ease-in,
    ${fadeOut} 0.5s ease-out;
  animation-delay: 0s, 2.5s; /* 딜레이 설정 */
  z-index: 1000;
`;

export const Text = styled.span`
  display: inline-block;
  color: ${Colors.white};
  font-size: 0.875rem;
  font-weight: 400;
`;
