import styled from "styled-components";

export const ContainerOrderSummary = styled.div`
    height: 70vh;
    width: 100%;
    max-height: 500px;
    background-color: #242424;
    padding: 10px;
    display: flex;
    min-height: 350px;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 600px) {
        max-width: 350px;
    }
`;

export const ContainerTitle = styled.div`
    width: 100%;
    text-align: center;
    padding: 10px 0px;
`;

export const ContainerSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const ContainerMpLogo = styled.div`
    background-color: white;
    width: 120px;
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    margin-top: 10px;
`;

export const LogoImg = styled.img`
    width: 100%;
`;

export const ContainerHr = styled.div`
    width: 50%;
`;

export const Hr = styled.hr`
    height: 1px;
    border: none;
    background-color: #a2a2a2;
`;

export const ContainerEndSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
`;
