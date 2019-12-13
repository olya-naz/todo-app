import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
`;
const StyledImg = styled.img`
    width: 150px;
    @media (max-width: 767px) {
        width: 100px;
    }  
`;

const GitLink = ({ link }) => {
    return(
        <StyledLink href={link} target="_blank">
            <StyledImg src="https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149"
                 className="attachment-full size-full" alt="Fork me on GitHub"
                 data-recalc-dims="1" />
        </StyledLink>
    )
};

export default GitLink;