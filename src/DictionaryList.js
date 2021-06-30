import React from "react"
import styled from "styled-components";

import img from './plusIcon.png'
import { withRouter } from "react-router";
import { useSelector } from 'react-redux';


const DictionaryList = (props) => {
    const dict_list = useSelector(state => state.dictionary.dict);

    return (
        <div>
            <Board>MY DICTIONARY</Board>
            {dict_list.map((item) => {
                return (
                    <Card key={item.id}>
                        <Title>단어</Title>
                        <Contents>{item.word}</Contents>

                        <Title>설명</Title>
                        <Contents>{item.description}</Contents>

                        <Title>예시</Title>
                        <Contents><span>{item.example}</span></Contents>
                    </Card>
                )
            })}    
    
            <Icon onClick={() => {props.history.push('/post')}}><img src={img} alt="Button"/></Icon>

        </div>
    );
}

const Board = styled.div`
    width: 90vw;
    margin: 12px auto;
`;

const Card = styled.div`
    width: 90vw;
    height: auto;
    display: flex;
    flex-direction: column;

    background-color: #FCF6F5;

    text-align: left;
    padding: 10px 10px;
    margin: 8px auto;
`;

const Title = styled.p`
    font-size: 11px;
    text-decoration: underline;
    margin: 0px 0px 2px 0px;
`;

const Contents = styled.div`
    margin: 0px 0px 16px 0px;
    & > span {
        color: blue;
    }
`;

const Icon = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
        width: 50px;
        height: 50px;
    }
`;

export default withRouter(DictionaryList);