import React from 'react';
import styled, { keyframes } from 'styled-components';

const KeyFrameLoading = keyframes`
    0%{
        opacity: 0.5s;
    }
    100%{
        opacity: 0.7;
    }
`;

const LoadingSkeleton = styled.div`
    background-color: #acaaaa;
    border-radius: 6px;
    margin-bottom: 0.5rem;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    animation: ${KeyFrameLoading} 1000ms infinite alternate;
`;

const Skeleton = ({width, height}) => {
    return (
        <LoadingSkeleton width={width} height={height} />
    );

}

export default Skeleton;
