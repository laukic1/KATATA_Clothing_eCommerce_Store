import styled from "styled-components";

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 2rem;
    left: 2rem;
    display:flex;
    flex-flow: column nowrap;
    z-index: 1000;
    justify-content: space-around;
    
    &:hover {
        cursor: pointer;
    }
    
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${(props) => (props.isOpen ? "gray" : "white")};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
        }
    
        &:nth-child(2) {
            transform: ${(props) => (props.isOpen ? "translateX(-100%)" : "translateX(0)")};
            opacity: ${(props) => (props.isOpen ? 0 : 1)};

        }

        &:nth-child(3) {
            transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
        }
    
    }
`;