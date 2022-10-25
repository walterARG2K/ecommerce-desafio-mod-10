import styled from "styled-components";
export const ContainerMain = styled.div`
    @media (min-width: 600px) {
        max-width: 1000px;
        margin: 0 auto;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    padding: 50px 0px;

    @media (min-width: 600px) {
        background-color: whitesmoke;
        max-width: 620px;
        margin: 0 auto;
        margin-top: 50px;
        box-shadow: 4px 8px 40px 8px rgba(0, 0, 0, 0.2);
    }
`;

export const SubContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
    & p {
        margin: 0;
        font-size: 1.1em;
        color: black;
        letter-spacing: 1px;
    }
`;

export const Text = styled.h1`
    font-family: "Kaushan Script", cursive;
    font-size: 4em;
    letter-spacing: 3px;
    color: #128812;
    margin: 0;

    @media (min-width: 360px) {
        font-size: 3em;
    }
`;
