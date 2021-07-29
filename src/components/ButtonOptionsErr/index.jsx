import { ButtonOpErr } from './style';

const ButtonOptionsErr = ({ onClick,children }) => {
    return(
        <ButtonOpErr onClick={onClick} >{ children }</ButtonOpErr>
    )
}

export default ButtonOptionsErr;