import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    padding: 10px 20px 10px 37px;
    @media (max-width: 767px) {
        padding: 10px 10px 10px 27px;
    }
`;
const StyledInput = styled.input`
    width: calc(100% - 110px);
    display: inline-block;
    vertical-align: top;
    border: none;
    box-shadow: none;
    background-color: #F9F9F9;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Nunito', sans-serif;
    padding: 0 12px;
    height: 34px;
    margin-right: 10px;
    &::placeholder {
        color: #757575;
    }                                   
    @media (max-width: 767px) {
        width: calc(100% - 44px);
    }
`;
const StyledButton = styled.button`
    width: 100px;
    display: inline-block;
    vertical-align: top;
    background-color: #34a50f;
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    box-shadow: none;
    line-height: 34px;
    border-radius: 4px;
    cursor: pointer;
    transition: all .3s;
    &:hover {
        background-color: #2a890b;
    }
    @media (max-width: 767px) {
        font-size: 0;
        position: relative;
        width: 34px;
        &:after {
            content: '\\f067';
            font-family: FontAwesome;
            font-size: 16px;
            line-height: 36px;
            color: #fff;
            position: absolute;
            left: 1px;
            top: 0;
            text-align: center;
            width: 100%;
            height: 100%;
        }
    }
`;
const StyledLabel = styled.label`
    flex: 1;
    cursor: pointer;
    padding: 0 15px 0 29px;
    position: relative;
    &:hover {
        i {
            border-color: #4fa441;
        }
    }
    &.active {
        color: #a7a7a7;
        span {
            text-decoration: line-through;
        }
        i {
            background-color: #4fa441;
            border-color: #4fa441;
            &:before {
                opacity: 1;
            }
        }
    }
`;
const StyledCheck = styled.i`
    font-size: 12px;
    line-height: 18px;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 1px;
    width: 19px;
    height: 19px;
    border-radius: 3px;
    border: 1px solid #a7a7a7;
    text-align: center;
    z-index: 1;
    transition: all .3s;
    &:before {
        opacity: 0;
        z-index: 1;
        transition: all .3s;
    }
`;

export const Form = (props) => <StyledForm {...props} />
export const Input = (props) => <StyledInput {...props} />
export const Button = (props) => <StyledButton {...props} />
export const Label = (props) => <StyledLabel {...props} />
export const IconCheck = (props) => <StyledCheck {...props} />