import styled, { keyframes } from 'styled-components';

// eslint-disable-next-line
export { Confetti, Piece, Text };

const Confetti = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const makeItRain = keyframes`
  from {
    opacity: 0;
  }
  
  50% {
    opacity: 1;
  }
  
  to {
    transform: translateY(600px);
  }
`;

const Piece = styled.div`
  position: absolute;
  width: 8px;
  height: 16px;
  background: #ffd300;
  top: 0;
  opacity: 0;

  &:nth-child(1) {
    left: 7%;
    transform: rotate(${randomNum(-80, 80)}deg);
    animation: ${makeItRain} 1000ms infinite ease-out;
    animation-delay: ${randomNum(0, 1000 * .5)}ms;
    animation-duration: ${randomNum(2000 * .7, 2000 * 1.2)}ms
  }

  &:nth-child(2) {
    left: 14%;
    transform: rotate(${randomNum(-80, 80)}deg);
    animation: ${makeItRain} 1000ms infinite ease-out;
    animation-delay: ${randomNum(0, 1000 * .5)}ms;
    animation-duration: ${randomNum(2000 * .7, 2000 * 1.2)}ms
  }
  &:nth-child(3) {
    left: calc(3 * 7%);
    transform: rotate(${randomNum(-80, 80)}deg);
    animation: ${makeItRain} 1000ms infinite ease-out;
    animation-delay: ${randomNum(0, 1000 * .5)}ms;
    animation-duration: ${randomNum(2000 * .7, 2000 * 1.2)}ms
  }
  &:nth-child(4) {
    left: calc(4 * 7%);
    transform: rotate(${randomNum(-80, 80)}deg);
    animation: ${makeItRain} 1000ms infinite ease-out;
    animation-delay: ${randomNum(0, 1000 * .5)}ms;
    animation-duration: ${randomNum(2000 * .7, 2000 * 1.2)}ms
  }
  &:nth-child(5) {
    left: calc(5 * 7%);
    transform: rotate(${randomNum(-80, 80)}deg);
    animation: ${makeItRain} 1000ms infinite ease-out;
    animation-delay: ${randomNum(0, 1000 * .5)}ms;
    animation-duration: ${randomNum(2000 * .7, 2000 * 1.2)}ms
  }
  &:nth-child(6) {
    left: calc(6 * 7%);
    transform: rotate(${randomNum(-80, 80)}deg);
    animation: ${makeItRain} 1000ms infinite ease-out;
    animation-delay: ${randomNum(0, 1000 * .5)}ms;
    animation-duration: ${randomNum(2000 * .7, 2000 * 1.2)}ms
  }
  &:nth-child(7) {
    left: calc(7 * 7%);
    transform: rotate(${randomNum(-80, 80)}deg);
    animation: ${makeItRain} 1000ms infinite ease-out;
    animation-delay: ${randomNum(0, 1000 * .5)}ms;
    animation-duration: ${randomNum(2000 * .7, 2000 * 1.2)}ms
  }
  &:nth-child(8) {
    left: calc(8 * 7%);
    transform: rotate(${randomNum(-80, 80)}deg);
    animation: ${makeItRain} 1000ms infinite ease-out;
    animation-delay: ${randomNum(0, 1000 * .5)}ms;
    animation-duration: ${randomNum(2000 * .7, 2000 * 1.2)}ms
  }
  &:nth-child(9) {
    left: calc(9 * 7%);
    transform: rotate(${randomNum(-80, 80)}deg);
    animation: ${makeItRain} 1000ms infinite ease-out;
    animation-delay: ${randomNum(0, 1000 * .5)}ms;
    animation-duration: ${randomNum(2000 * .7, 2000 * 1.2)}ms
  }
  &:nth-child(10) {
    left: calc(10 * 7%);
    transform: rotate(${randomNum(-80, 80)}deg);
    animation: ${makeItRain} 1000ms infinite ease-out;
    animation-delay: ${randomNum(0, 1000 * .5)}ms;
    animation-duration: ${randomNum(2000 * .7, 2000 * 1.2)}ms
  }
  &:nth-child(11) {
    left: calc(11 * 7%);
    transform: rotate(${randomNum(-80, 80)}deg);
    animation: ${makeItRain} 1000ms infinite ease-out;
    animation-delay: ${randomNum(0, 1000 * .5)}ms;
    animation-duration: ${randomNum(2000 * .7, 2000 * 1.2)}ms
  }
  &:nth-child(12) {
    left: calc(12 * 7%);
    transform: rotate(${randomNum(-80, 80)}deg);
    animation: ${makeItRain} 1000ms infinite ease-out;
    animation-delay: ${randomNum(0, 1000 * .5)}ms;
    animation-duration: ${randomNum(2000 * .7, 2000 * 1.2)}ms
  }
  &:nth-child(13) {
    left: calc(13 * 7%);
    transform: rotate(${randomNum(-80, 80)}deg);
    animation: ${makeItRain} 1000ms infinite ease-out;
    animation-delay: ${randomNum(0, 1000 * .5)}ms;
    animation-duration: ${randomNum(2000 * .7, 2000 * 1.2)}ms
  }
    

  &:nth-child(odd) {
    background: #17d3ff;
  }
  
  &:nth-child(even) {
    z-index: 1;
  }
  
  &:nth-child(4n) {
    width: 5px;
    height: 12px;
    animation-duration: 2000ms;
  }
  
  &:nth-child(3n) {
    width: 3px;
    height: 10px;
    animation-duration: 2500ms;
    animation-delay: 1000ms;
  }
  
  &:nth-child(4n-7) {
    background: #ff4e91;
  }
`;

const Text = styled.div`
font-size: 8vw;
line-height: 1.5;
text-align: center;
color: #282c34;
text-transform: uppercase;
font-weight: bold;
`;

function randomNum(min: number, max: number) {
  let rand = Math.random();
  let randomNum = min + Math.floor(rand * ((max - min) + 1));

  return randomNum;
}
