import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0,0,0,1);
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    align-items: center;
    top: 0;
    position: sticky;
    z-index: 10;
    box-shadow: 0 0 10px black;
    opacity: 0.95;
    transition: background-color 0.3s, opacity 0.3s;
`

export const LogoContainer = styled(Link)`
      height: 100%;
      width: 70px;
      padding: 15px 15px;
`

export const NavLinks = styled.div`
      width: 50%;
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

