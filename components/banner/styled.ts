import styled from "styled-components";

export const ContainerMain = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media (min-width: 700px) {
        grid-template-columns: repeat(4, 1fr);
    }
    padding: 5px;
    max-width: 1000px;
`;

export const Item = styled.div`
    width: 100%;
    height: 105px;
    background-color: white;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 1.5px 1.5px 2px rgba(0, 0, 0, 0.3);
    max-width: 250px;
`;

export const ContainerIcon = styled.div`
    text-align: left;
    padding: 5px;
    display: flex;
`;

export const Line = styled.hr`
    width: 100%;
    margin: 0;
    color: rgba(225, 223, 223, 0.44);
`;
