import styled from "styled-components";

export const ContainerMain = styled.div`
    width: 100%;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 600px) {
        height: 80vh;
    }
    background-color: var(--background-color);
`;

export const ContainerCard = styled.div`
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    background-color: #ecf0f1;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.4);
    padding: 10px;
    @media (min-width: 600px) {
        display: flex;
        gap: 15px;
        max-width: 500px;
    }
`;

export const ContainerImg = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    @media (min-width: 600px) {
        max-width: 400px;
    }
`;

export const Img = styled.div`
    width: 100%;
    height: 100%;
    min-height: 200px;
    position: relative;
    border-radius: 10px;
`;

export const Card = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerTitle = styled.div`
    margin: 25px 0px;
    text-align: center;
    width: 100%;
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 40px;
`;

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    width: 100%;
`;

export const ContainerAuthCode = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AuthMessage = styled.div`
    text-align: center;
`;

export const AuthCodeEl = styled.div`
    margin-top: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const EmailAuth = styled.span`
    color: lime;
`;
