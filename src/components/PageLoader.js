import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default styled.div`
  display: block;
  height: 20px;
  width: 20px;
  border: 4px ${({ color }) => (color ? color : "#61dafb")} solid;
  border-radius: 108%;
  border-top: 4px solid transparent;
  animation: ${rotate} 0.5s ease-out infinite;
  z-index: 9;
  margin: 10px;
  position: fixed;
  top: 0;
  right: 0;
`;
