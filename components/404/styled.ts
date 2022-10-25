import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const ContainerImg = styled.div`
    width: 100%;
    height: 100%;
    max-height: 400px;
    max-width: 600px;
    @media (min-width: 600px) {
        max-height: 600px;
    }
    position: relative;
`;
