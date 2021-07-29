import styled from 'styled-components';
import { ButtonOp } from '../ButtonOptions/style';

export const ButtonOpErr = styled(ButtonOp)`
    border: 1.8px solid ${(props) => props.theme.colors.error};
    color: ${(props) => props.theme.colors.error};
    animation: 3s all ease;
    &:hover{
        color: ${(props) => props.theme.colors.textWhite};
        background-color: ${(props) => props.theme.colors.error};
    }
`;