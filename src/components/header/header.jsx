import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 40px;
    font-weight: 700;
    color: #35308f;
    @media (max-width: 767px) and (orientation: portrait) {
        margin-bottom: 15px;
    }
    @media (max-width: 767px) {
        font-size: 32px;
    }
`;

const Header = () => {
    return(
        <Title>My TODO List</Title>
    )
};

export default Header;