import styled from "styled-components";

export const SCPassosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

export const SCPasso = styled.span`
    color: ${props => `${props.ativo ? '#c71d81' : '#868584'}`};
    font-weight: ${props => `${props.ativo ? 'bold' : 'regular'}`};
`;