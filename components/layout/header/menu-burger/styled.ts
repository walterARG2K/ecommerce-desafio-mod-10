import styled from "styled-components";

export const Collapsible = styled.button`
    background-color: transparent;
    color: white;
    cursor: pointer;
    width: 95%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 16px;
    font-weight: 700;
    font-family: Poppins;
    display: flex;
    justify-content: center;

    &.active,
    &:hover {
        background-color: transparent;
    }

    &:after {
        content: "\\002B";
        color: white;
        font-weight: bold;
        float: right;
        margin-left: 5px;
    }

    &.active:after {
        content: "\\2212";
    }
`;

export const Content = styled.ul`
    position: fixed;
    padding: 0 5px;
    max-height: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    background-color: #383838;
    border-radius: 5px;
    font-size: 14px;
    list-style-type: none;

    & a {
        text-decoration: none;
    }
`;
