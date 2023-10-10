import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.97);
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    align-items: center;
    top: 0;
    position: sticky;
    z-index: 100;
    box-shadow: 0 0 10px black;
    
    transition: background-color 0.3s, opacity 0.3s;
    
`
export const FlexGrow = styled.div`
      display: flex;
      flex-grow: 1;
      flex-shrink: 1;
`

export const LogoContainer = styled(Link)`
      display: flex;
      justify-content: center;
      width: 20%;
      padding: 15px 15px;
      align-items: center;
`

export const NavLinks = styled.div`
      width: 40%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
`

export const NavLink = styled(Link)`
        padding: 10px 15px;
        cursor: pointer;

        &:hover {
          color: rgb(203, 203, 203);
          text-shadow: 0 0 1px rgb(203, 203, 203);
        }
`

export const SignOutLinkRed = styled(Link)`
        color:red;
        text-shadow: 0 0 5px red;
        transition: ease all;
`

