import styled from "styled-components";

export const Parag = styled.p`

`;

const Paragraph = ({ children }) => {
    return(
        <Parag> { children }</Parag>
    )
}

export default Paragraph;