import styled from 'styled-components';

export const CarrosselContainer = styled.div`
    height: 380px;
    background: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    margin: 0 16px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const IconContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: inherit;
`;
