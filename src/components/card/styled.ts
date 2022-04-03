import styled from 'styled-components';

export const CardWrapper = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -1px 0px 5px 0px rgba(0, 0, 0, 0.75);

  &.rotateCard180 {
    transform: rotateY(180deg);
  }

  &.rotateCard0 {
    transform: rotateY(0deg);
  }

  &.unclickable {
    pointer-events: none;
  }
`;

export default CardWrapper;
