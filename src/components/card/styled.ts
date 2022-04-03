import styled from 'styled-components';
import { black } from '../../styles/colors';

export const CardWrapper = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(${black}, 0.1);
`;

export default CardWrapper;
