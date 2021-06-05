import styled, { keyframes } from 'styled-components';

const littlePushing = keyframes`
  from { transform: translateY(0) }
  50% { transform: translateY(15px) }
  to { transform: translateY(15px) }
`;

export const Wrapper = styled.div`
  background: linear-gradient(135deg, #2C465A, #8795A0);
  text-align: center;
  height: 100vh;
`;

export const BitText = styled.div`
  font-size: 36px;
  position: absolute;
  width: 100%;
  color: white;
`;

export const AboutMe = styled(BitText)`
  top: 175px;
`;

export const Arrow = styled(BitText)`
  bottom: 30px;
  animation: ${littlePushing} 1s infinite alternate;
`;
