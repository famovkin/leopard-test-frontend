import styled from 'styled-components';

export const StyledPreloader = styled.div`
  transform: translateZ(1px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  #preloader-item {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 8px;
    border-radius: 50%;
    background: #2c2c2c;
    animation: rotate 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  @keyframes rotate {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
`;


