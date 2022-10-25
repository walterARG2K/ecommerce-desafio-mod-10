import styled from "styled-components";

export const CounterCart = styled.div`
    width: 35%;
    height: 18px;
    background-color: white;
    border-radius: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerLogo = styled.div`
    width: 40vw;
    max-width: 150px;
    height: 40px;
    display: flex;
    @media (min-width: 700px) {
        max-width: 200px;
    }
    justify-content: center;
    cursor: pointer;
`;

export const ContainerMain = styled.div`
    height: 80px;
`;

export const ContainerLogin = styled.div`
    color: lime;
    text-align: center;
    @media (max-width: 600px) {
        display: none;
    }
`;

export const Logout = styled.div`
    color: red;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 600px) {
        flex-direction: initial;
        justify-content: space-evenly;
        height: 80px;
        gap: 5px;
        padding: 20px 10px;
    }
    width: 100%;
    max-width: 1100px;
`;

export const ContainerCart = styled.div`
    display: flex;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    @media (max-width: 600px) {
        position: absolute;
        top: 17px;
        right: 20px;
    }
    @keyframes shake {
        0% {
            background-color: lime;
            transform: translate(1px, 1px) rotate(0deg);
        }
        10% {
            transform: translate(-1px, -2px) rotate(-1deg);
        }
        20% {
            transform: translate(-3px, 0px) rotate(1deg);
        }
        30% {
            transform: translate(3px, 2px) rotate(0deg);
        }
        40% {
            transform: translate(1px, -1px) rotate(1deg);
        }
        50% {
            transform: translate(-1px, 2px) rotate(-1deg);
        }
        60% {
            transform: translate(-3px, 1px) rotate(0deg);
        }
        70% {
            transform: translate(3px, 1px) rotate(-1deg);
        }
        80% {
            transform: translate(-1px, -1px) rotate(1deg);
        }
        90% {
            transform: translate(1px, 2px) rotate(0deg);
        }
        100% {
            transform: translate(1px, -2px) rotate(-1deg);
        }
    }

    &.animation {
        animation: shake 1s;
    }
`;

export const HeaderEl = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primary-color);
    height: 80px;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 3;
`;
