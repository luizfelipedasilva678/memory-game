import styled, { StyledComponent } from 'styled-components';
import { black, bgColor } from '../../styles/colors';

const Main = styled.main`
  padding: 20px;
  display: flex;
  font-size: 3em;
  align-items: center;
  justify-content: center;
  color: ${black};
  background-color: ${bgColor};
  letter-spacing: 3px;
  font-weight: bold;
`;

export default Main;
