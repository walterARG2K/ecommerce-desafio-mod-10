import styled from "styled-components";

export const ContainerHr = styled.div`
    width: 50%;
    max-width: 500px;
`;

export const CotainerDetails = styled.div`
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
    @media (min-width: 600px) {
        display: flex;
    }
`;

export const ContainerMain = styled.div`
    width: 100%;
    display: flex;
    flexdirection: column;
    alignitems: center;
    justify-content: center;
`;

export const ContainerCards = styled.div`
    padding: 60px 10px;
    max-width: 870px;
    width: 100%;
`;

export const ContainerProductsAdded = styled.div`
    width: 100%;
    height: 70vh;
    max-height: 500px;
    min-height: 350px;
    background-color: #ecf0f1;
    padding: 5px;
`;

export const SubContainerProductsAdded = styled.div`
    margin: 20px 0px;
`;

export const ContainerSubtitle = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;
export const ContainerProductsCart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const CardProductsAdded = styled.div`
    height: 58vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 415px;
    min-height: 270px;
    gap: 15px;
    overflow: scroll;
    scrollbar: hide;
`;

export const CardProduct = styled.div`
    height: 100%;
    background-color: rgb(205, 208, 208);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    gap: 10px;
`;

export const ContainerImg = styled.div`
    width: 65px;
    height: 65px;
    background-color: white;
    border-radius: 10%;
    padding: 5px;
`;

export const Img = styled.img`
    width: 100%;
`;

export const ContainerTitleProduct = styled.div`
    width: 100%;
    max-width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ContainerPrice = styled.div`
    width: 30%;
    height: 80px;
    overflow-wrap: anywhere;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0px;
`;

export const ContainerIconDelete = styled.div`
    width: 100%;
    text-align: right;
    fontsize: 24px;
`;

export const ContainerSubtotal = styled.div`
    height: 30px;
    background-color: rgb(205, 208, 208);
    border-radius: 5px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
