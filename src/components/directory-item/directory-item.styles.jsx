import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      filter: blur(0.5px);
      filter: grayscale(60%);
      box-shadow: inset 0 0 200px black;
      background-image: ${({imageUrl}) => `url(${imageUrl})`};
`

export const DirectoryBodyContainer = styled.div`
      height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      position: absolute;

      h2 {
        font-weight: bold;
        margin: 0 auto;
        font-size: 26px;
        color: #ffffff;
        text-shadow: 0 10px 30px rgb(0, 0, 0);
        font-weight: 600;
        letter-spacing: 1px;
      }
  
      p {
        font-weight: lighter;
        font-size: 16px;
        color: white;
        font-weight: 300;
        text-shadow: 0 0 3px black;
      }
`

export const DirectoryItemContainer = styled.div`
min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 7.5px 15px;
    overflow: hidden;
    border-radius: 5px;
  
    &:hover {
      cursor: pointer;
  
      & ${BackgroundImage} {
              box-shadow: inset 0 0 100px black;

        filter: none;
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
  
      & ${DirectoryBodyContainer} {
        opacity: 0.9;
      }
    }
  
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }
`
