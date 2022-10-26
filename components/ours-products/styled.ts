import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
`;

export const ContainerSecondSection = styled.div`
    width: 100%;
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    justify-content: center;
`;

export const FirstSection = styled.div`
    width: 100%;
    height: 25vw;
    position: relative;
    max-height: 200px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1.5px 1.5px 2px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    margin-bottom: 5px;
    cursor:pointer;
`;

export const TextAboutSections = styled(FirstSection)`
    width: 50%;
    max-width: 250px;
    height: 25px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    margin: 0px;
    padding: 2px;
`;

export const SecondSection = styled.div`
    width: 100%;
    height: 25vw;
    position: relative;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1.5px 1.5px 2px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    max-height: 200px;
    cursor:pointer;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5;
    cursor: pointer;
`;

export const ContainerTitle = styled.div`
    width: 100%;
    max-width: 800px;
`;
