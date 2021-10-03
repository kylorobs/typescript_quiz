import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../store/actions';

type TopicProps = {
    title: string,
    id: string
}

const TopicButton =  styled.button`
    padding: 15px;
    background-color: red;
    font-face: ${props => props.theme.headings};
    font-size: 16px;
`


const Topic: React.FC<TopicProps> = props=> {

    const dispatch = useDispatch();

    function setTopic(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        dispatch(actions.changeTopic(props.id))
    }

    return <TopicButton onClick={setTopic} id={props.id}>{props.title}</TopicButton>
}

export default Topic;