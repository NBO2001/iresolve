import styled from 'styled-components';

export const ButtonOp = styled.button`
    margin-top: 0.5rem;
    font-size: 1em;
    background:  ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts.fontButton};
    border-radius: 10px;
    cursor: pointer;
    border: 1.8px solid ${(props) => props.theme.colors.button};
    min-height: 40px;
    animation: 3s all ease;
    &:hover{
        color: ${(props) => props.theme.colors.textWhite};
        background-color: ${(props) => props.theme.colors.button};
    }
`;