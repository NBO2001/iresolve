import styled from 'styled-components';

export const Img = styled.img`
    
    object-fit: cover;
    @media screen and (max-width:700px) {
        max-width: 90vw;
    }
`;

const Imagen = ({ src, alt}) => {
    return (
        <Img src={src} alt={alt} />
    )
}

export default Imagen;