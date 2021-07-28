import styled from "styled-components";

export const Parag = styled.p`
    line-height: 25px;
    margin-right: 0.2rem;
`;

const Paragraph = ({ children }) => {
    return(
        <Parag> { children }</Parag>
    )
}

export default Paragraph;