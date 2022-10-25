import styled from "styled-components";

export const ContainerImg = styled.div`
    width: 100%;
    height: 30vw;
    min-height: 100px;
    max-height: 400px;
    position: relative;
`;

export const Container = styled.div`
    margin-top: 3px;
    @media (min-width: 600px) {
        margin-top: 45px;
    }
`;
export const Arrow = styled.div`
    color: white;
    width: 0px;
    height: 0px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid;
    transform: rotate(90deg);
    &:active {
        color: #505050;
    }
`;
export const ArrowRight = styled(Arrow)`
    transform: rotate(270deg);
`;
