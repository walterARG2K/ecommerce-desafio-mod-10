import styled from "styled-components";

export const ContainerMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerTitle = styled.div`
    width: 100%;
    padding: 5px;
    max-width: 770px;
    text-align: left;
    margin: 50px 0;
`;

export const Hr = styled.hr`
    max-width: 770px;
`;

export const ContainerProducts = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    padding: 0 2px;
    max-width: 830px;
    @media (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
