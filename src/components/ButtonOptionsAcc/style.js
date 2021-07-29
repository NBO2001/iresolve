import styled from 'styled-components';
import { ButtonOp } from '../ButtonOptions/style';

export const ButtonOpAcc = styled(ButtonOp)`
    border: 1.8px solid ${(props) => props.theme.colors.right};
    color: ${(props) => props.theme.colors.right};
    animation: 3s all ease;
    &:hover{
        color: ${(props) => props.theme.colors.textWhite};
        background-color: ${(props) => props.theme.colors.right};
    }
`;