import React from 'react';
import styled from 'styled-components';


interface ButtonProps {
    readonly primary?: boolean;
    readonly secondary?: boolean;
    clicked: Function;
}

const ButtonStyled = styled.button<ButtonProps>` 
    ${props => props.primary && `
    background-color: ${props.theme.colors.primary};
    `}
    ${props => props.secondary && `
    background-color: ${props.theme.colors.secondary};
    `}

    color: ${props => props.theme.colors.white};
    min-width: 3em;
    padding: 1em;
    font-size: 18px;
    margin: 1em;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.primary};
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