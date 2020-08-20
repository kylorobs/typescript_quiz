import React from 'react';
import styled from 'styled-components';
import { Colors } from '../constants/colors';

interface ButtonProps {
    readonly btntype: 'primary' | 'secondary';
    clicked: Function;
}

const ButtonStyled = styled.button<ButtonProps>`
    background-color:  ${props => props.btntype === 'primary'? Colors.primary : Colors.secondary}; 
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

const Button: React.FC<ButtonProps> = (props) => {

    const handleClick = (e: React.FormEvent): void => {
        e.preventDefault();
        props.clicked();
    }

    return <ButtonStyled {...props} onClick={(e:React.FormEvent) => handleClick(e)}> {props.children} </ButtonStyled>
}


// interface NewButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     clicked: Function
// }

// export const nativeButton:React.FC<NewButtonProps> = (props)=> {
    
//     const handleClick = (e: React.FormEvent): void => {
//         e.preventDefault();
//         props.clicked();
//     }

//     return <button onClick={(e:React.FormEvent) => handleClick(e)}>{props.children}</button>;
// }



export default Button