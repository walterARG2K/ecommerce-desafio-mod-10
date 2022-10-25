import styled from "styled-components";

export const ContainerMain = styled.div`
    margin: 30px 0px;
    width: 100%;
    padding: 5px;
    @media (min-width: 600px) {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        margin: 50px 0px;
    }
`;

export const ContainerImg = styled.div`
    width: 100%;
    height: 100%;
    @media (min-width: 600px) {
        height: 750px;
    }
    max-width: 400px;
    padding: 5px;
    border-radius: 5px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
`;

export const ContainerInfo = styled.div`
    width: 100%;
    max-width: 500px;
`;

export const ContainerPrice = styled.div`
    background-color: black;
    border-radius: 5px;
    padding-left: 10px;
    max-width: 200px;
`;

export const ContainerDescription = styled.div`
    margin-top: 50px;
    max-width: 500px;
`;

export const ContainerAllBenefits = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ContainerBenefit = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const ContainerHr = styled.div`
    width: 70%;
    max-width: 500px;
`;

export const ContainerButtons = styled.div`
    margin-top: 20px;
    display: none;
    @media (min-width: 600px) {
        display: flex;
    }
`;

export const ContainerButtonsSmallView = styled.div`
    margin-top: 40px;
    display: flex;
    @media (min-width: 600px) {
        display: none;
    }
`;

export const SubContainerImg = styled.div`
    background-color: #191919;
    padding: 5px;
    border-radius: 5px;
`;

export const ContainerMaybeInteresed = styled.div`
    margin: 50px 0px;
    display: flex;
    justify-content: center;
`;

export const ContainerInteresedMain = styled.div`
    width: 100%;
    max-width: 850px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

export const DescriptionEl = styled.div`
    display: flex;
    gap: 2px;
`;

export const Features = styled.div`
    line-break: anywhere;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 50px;
`;

export const HrDescription = styled.div`
    border: none;
    height: 2px;
    background-color: #06060633;
`;
