import styled from "styled-components";

export const ContainerProducts = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    gap: 5px;
    padding: 0 2px;
    max-width: 830px;
    @media (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const ContainerMain = styled.div`
    margin: 30px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 600px) {
        margin: 70px 0px;
    }
`;

export const SortByContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 2px;
`;

export const SortBy = styled.div`
    height: 50px;
    width: 200px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 0px 20px;
    color: rgba(0, 0, 0, 0.42);
    cursor: pointer;
    position: relative;
`;

export const SortByContainerText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Arrow = styled.div`
    color: var(--secondary-color);
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid;
    transform: rotate(180deg);
`;

export const ArrowDown = styled(Arrow)`
    transform: rotate(0deg);
`;

export const Hr = styled.hr`
    width: 100%;
    margin: 0px;
    background-color: var(--secondary-color);
    border: none;
    height: 2px;
`;

export const ContainerNextPage = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

export const ArrowLeft = styled(Arrow)`
    color: black;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid;
    transform: rotate(90deg);
`;

export const ArrowRight = styled(ArrowLeft)`
    transform: rotate(-90deg);
`;

export const NextPage = styled.div`
    background-color: ${(props) => props.theme};
    width: 25px;
    height: 25px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: var(--secondary-color);
    }
`;

export const ContainerModal = styled.div`
    width: 200px;
    height: 100px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-bottom: 20px;
    position: absolute;
    z-index: 2;
    margin-top: 55px;
`;

export const Item = styled.div`
    width: 80%;
    border-radius: 5px;
    text-align: center;
    background-color: var(--background-color);
    cursor: pointer;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerNotFound = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 500px;
    height: 70vh;
`;

export const Img = styled.img`
    width: 100%;
`;
