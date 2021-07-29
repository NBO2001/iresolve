import styled from 'styled-components';

export const Conteinner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 35vh;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
    margin-bottom: 0.2rem;
    width: 95vw;
    text-align: justify;
    padding: 0.3rem;
    font-size: 0.9em;
    font-family: ${(props) => props.theme.fonts.fontPrimary}
`;