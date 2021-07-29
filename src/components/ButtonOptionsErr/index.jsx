import styled from 'styled-components';
import { ButtonOp } from '../ButtonOptions';

export const ButtonOpErr = styled(ButtonOp)`
    color: red;
`;

const ButtonOptionsErr = ({ onClick,children }) => {
    return(
        <ButtonOpErr onClick={onClick} >{ children }</ButtonOpErr>
    )
}

export default ButtonOptionsErr;