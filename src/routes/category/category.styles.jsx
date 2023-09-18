import styled from "styled-components";

export const CategoryPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  margin: 0.5em;

  @media (max-width: 768px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 50px;
    }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-transform: uppercase;
  text-align: center;
`;
