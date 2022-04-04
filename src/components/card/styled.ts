import styled from 'styled-components';

export const CardWrapper = styled.div`
  cursor: pointer;
  width: 3.5em;
  height: 3.5em;
  border-radius: 0.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

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
