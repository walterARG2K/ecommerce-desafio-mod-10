import styled from "styled-components";

export const ContainerMain = styled.div`
    width: 100%;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--background-color);
    @media (min-width: 600px) {
        padding: 100px 30px 70px;
    }
`;

export const ContainerCard = styled.div`
    width: 100%;
    max-width: 330px;
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
    display: flex;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    @media (min-width: 600px) {
        width: 100%;
        max-width: 400px;
    }
`;

export const Img = styled.img`
    width: 80%;
    height: 300px;
    display: none;
    border-radius: 10px;
    @media (min-width: 600px) {
        width: 100%;
        display: initial;
        max-height: 400px;
        height: 350px;
    }
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
    gap: 25px;
`;

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    width: 100%;
`;
