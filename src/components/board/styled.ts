import styled from 'styled-components';

const BoardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.5em;

  @media (max-width: 281px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BoardHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.7em;
  align-items: center;

  @media (max-width: 281px) {
    flex-direction: column;
  }
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoardText = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 0.8em;
  margin-right: 1.5em;
  margin-bottom: 0.8em;
  white-space: nowrap;
`;

export const BoardRestartButton = styled.button`
  width: 10em;
  height: 3em;
  color: #fff;
  cursor: pointer;
  border-radius: 0.2em;
  border: none;
  background: #034df2;

  &:hover {
    background: #034df2;
  }

  @media (max-width: 281px) {
    margin-top: 0.5em;
  }
`;

export default BoardContainer;
