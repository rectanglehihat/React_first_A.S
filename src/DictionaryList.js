import React from "react"
import styled from "styled-components";

import img from './plusIcon.png'
import { withRouter } from "react-router";
import { useSelector } from 'react-redux';


const DictionaryList = (props) => {
    const dict_list = useSelector(state => state.dictionary.dict);

    return (
        <div>
            <BD>
                <h1>아무말 사전</h1>
            </BD>
            {dict_list.map((w) => {
                return (
                    <Card key={w.id}>
                        <Title>단어</Title>
                        <Contents>{w.word}</Contents>

                        <Title>설명</Title>
                        <Contents>{w.description}</Contents>

                        <Title>예시</Title>
                        <Contents><span>{w.example}</span></Contents>
                    </Card>
                )
            })}    
            <Icon onClick={() => {props.history.push('/post')}}><img src={img} alt="Button"/></Icon>
        </div>
    );
}


const BD = styled.div`
    width: 100%;
    height: 80px;
    margin: 0 0 50px 0;

    background: linear-gradient(to right, #7474BF, #348AC7);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 0 0 35px 35px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    & > h1 {
        margin: 0;
        text-align: center;
        width: 90vw;
        font-size: 30px;
        color: #FCF6F5;
    }
`;

const Card = styled.div`
    width: 86vw;
    height: auto;
    display: flex;
    flex-direction: column;

    background-color: #FCF6F5;
    border-radius: 25px 0 25px 0;

    text-align: left;
    padding: 15px 15px;
    margin: 25px auto;
    box-sizing: border-box;

    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Title = styled.p`
    font-size: 13px;
    color: #888888;
    margin: 0px 0px 2px 0px;
`;

const Contents = styled.div`
    margin: 0px 0px 16px 0px;
    font-weight: bold;
    color: #333D79;
    & > span {
        color: #97BC62;
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