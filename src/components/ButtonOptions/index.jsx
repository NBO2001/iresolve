import { ButtonOp } from './style';

const ButtonOptions = ({ onClick,children }) => {
    return(
        <ButtonOp onClick={onClick} >{ children }</ButtonOp>
    )
}

export default ButtonOptions;