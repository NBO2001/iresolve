import styled from 'styled-components';

export const ButtonOp = styled.button`
    margin-top: 0.5rem;
    font-size: 1.2em;
    min-height: 40px;
`;

const ButtonOptions = ({ onClick,children }) => {
    return(
        <ButtonOp onClick={onClick} >{ children }</ButtonOp>
    )
}

export default ButtonOptions;