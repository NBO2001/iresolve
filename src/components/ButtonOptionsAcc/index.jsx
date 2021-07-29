import { ButtonOpAcc } from './style';

const ButtonOptionsAcc = ({ onClick,children }) => {
    return(
        <ButtonOpAcc onClick={onClick} >{ children }</ButtonOpAcc>
    )
}

export default ButtonOptionsAcc;