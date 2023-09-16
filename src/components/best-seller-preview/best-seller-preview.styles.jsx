import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  margin-bottom: 5em;
`;

export const CategoryPreviewTitle = styled(Link)`
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
  color: black;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
