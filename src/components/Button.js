import React from 'react';
import styled from 'styled-components';
import {Colors} from '../constants/colors';

const ButtonStyled = styled.button`
    background-color:  ${props => props.type === 'primary'? Colors.primary : Colors.secondary}; 
    color: ${Colors.white};
    min-width: 3em;
    padding: 1em;
    font-size: 18px;
    margin: 1em;

    &:hover {
        cursor: pointer;
        background-color: ${Colors.white};
        color: ${Colors.primary};
    }
`

const Button = (props) => {

    const handleClick = (e) => {
        e.preventDefault()
        props.clicked(e)
    }

    return <ButtonStyled {...props} onClick={e => handleClick(e)}> {props.children} </ButtonStyled>
}

export default Button