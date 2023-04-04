import styled from "styled-components";

export const SCButton = styled.button`
    font-size: 0.9em;
    padding: 0.5em;
    border-radius: 10px;
    border: none;
    margin-right: 15px;
`;

export const SCFormContainer = styled.div`
    max-width: 600px;
    height: auto; 
    margin: 0 auto;
    background-color: #fff;
    padding: 1.5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    form {
        max-width: 400px;
        margin: 0 auto;
    }

    .acoes {
        margin-top: 2rem;
    }
`;

export const SCHeader = styled.header`
    text-align: center;
    margin-bottom: 2rem;
    padding-top: 2rem;

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`;