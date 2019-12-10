import React from 'react';
import { Label, IconCheck } from '../formStyles';
import styled from 'styled-components';

const ManageButtons = styled.div`
    padding: 20px 20px 0;
    font-size: 14px;
    @media (max-width: 767px) {
        padding: 14px 10px;
    }  
`;
const CheckAll = styled(Label)`
    &.active {
        color: #4fa441;
        span {
            text-decoration: none;
        }
    }
`;
const IconCheckSmall = styled(IconCheck)`
    margin-top: 0;
`;
const ClearButton = styled.button`
    float: right;
    color: #928fd3;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
        color: #f80c0c;
    }
`;
const IconClear = styled.i`
    margin-right: 5px;
    font-size: 12px;
`;

const ManageComplete = ({handleCheck, handleClear, totalCount, completedCount}) => {
    const activeClass = completedCount === totalCount ? 'active' : '';
    return(
        <ManageButtons>
            { totalCount > 0 && (
                <CheckAll className={activeClass}
                          onClick={handleCheck} >
                    <IconCheckSmall className="fa fa-check" />
                    Check all tasks
                </CheckAll>
            )}
            { completedCount > 0 && (
                <ClearButton onClick={handleClear}>
                    <IconClear className="fa fa-times" />
                    Clear completed
                </ClearButton>
            )}
        </ManageButtons>
    )
};

export default ManageComplete;