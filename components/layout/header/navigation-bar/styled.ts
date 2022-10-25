import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #151515;
    box-shadow: 0px 4px 2px black;
    @media (max-width: 600px) {
        display: none;
    }
`;

export const ContainerNav = styled.div`
    width: 100%;
    max-width: 500px;
`;

export const Ul = styled.ul`
    display: flex;
    margin: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    list-style-type: none;
`;

export const Anchor = styled.a`
    text-decoration: none;
`;
