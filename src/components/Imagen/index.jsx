import styled from 'styled-components';

export const Img = styled.img`
    height: 350px;
    width: 350px;
`;

const Imagen = ({ src, alt}) => {
    return (
        <Img src={src} alt={alt} />
    )
}

export default Imagen;