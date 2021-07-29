import styled from 'styled-components';
import { ButtonOp } from '../ButtonOptions';


export const ButtonOpAcc = styled(ButtonOp)`
    color: green;
`;


const ButtonOptionsAcc = ({ onClick,children }) => {
    return(
        <ButtonOpAcc onClick={onClick} >{ children }</ButtonOpAcc>
    )
}

export default ButtonOptionsAcc;