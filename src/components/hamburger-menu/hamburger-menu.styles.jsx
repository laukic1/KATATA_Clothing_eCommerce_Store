import styled from "styled-components"



export const UlList = styled.ul`
    list-style: none;
    flex-flow: column nowrap;
    background: darkgray;
    box-shadow: 0 0 20px black;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 400px;
    padding: 2em;
    padding-top: 5rem;
    align-self: center;
    z-index: 900;
    transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};

    transition: transform 0.3s ease-in-out;

`

export const LiItems = styled.li`
color: black;
    padding: 1em;
    font-size: 20px;
    
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);

    &:hover {
        background-color: rgba(180, 180, 180, 0.6);
        cursor: pointer;
    }
`

