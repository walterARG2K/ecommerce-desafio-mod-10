import styled from "styled-components";

export const Primary = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    height: 45px;
    font-size: 16px;
    font-family: Poppins;
    font-weight: 700;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
`;

export const Secondary = styled(Primary)`
    color: black;
    background-color: white;
`;
