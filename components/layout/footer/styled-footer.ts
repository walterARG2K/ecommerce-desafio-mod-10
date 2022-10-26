import styled from "styled-components";

export const FooterEl = styled.footer`
    width: 100%;
    height: 350px;
    background-color: var(--primary-color);
    @media (min-width: 600px) {
        height: 250px;
    }
`;

export const Container = styled.div`
    padding: 25px;
    @media (min-width: 600px) {
        display: flex;
        justify-content: space-around;
    }
`;

export const ContainerContactUs = styled.div`
    background-color: white;
    width: 120px;
    border-radius: 5px;
    padding: 5px;
    margin-top: 10px;
    text-align: center;
    cursor:pointer;
`;

export const ContainerSocialsNetwork = styled.div`
    margin-top: 50px;
    @media (min-width: 600px) {
        margin: 0;
    }
`;

export const ContainerIcons = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 50px;
    `;

export const ContainerCopyright = styled.div`
    width: 100%;
    padding: 0px 30px;
    @media (min-width: 600px) {
        padding: 50px 30px 0;
    }
`;

export const Icon = styled.div`
cursor:pointer;
`