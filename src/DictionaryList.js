import React, { useEffect } from "react"
import styled from "styled-components";

import img from './plusIcon.png'
import { withRouter } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { loadDictFB } from "./redux/modules/dictionary";


const DictionaryList = (props) => {
    const dict_list = useSelector(state => state.dictionary.dict);

    return (
        <div>
            <p>MY DICTIONARY</p>
            {dict_list.map((dict) => {
                return (
                    <Card key={dict.id}>
                        <Title>단어</Title>
                        <Contents>{dict.word}</Contents>

                        <Title>설명</Title>
                        <Contents>{dict.description}</Contents>

                        <Title>예시</Title>
                        <Contents><span>{dict.example}</span></Contents>
                    </Card>
                )
            })}    
    
            <Icon onClick={() => {props.history.push('/post')}}><img src={img} alt="Button"/></Icon>

        </div>
    );
}

const Card = styled.div`
  max-width: 400px;
  min-height: 0px;
  background-color: #FCF6F5;

  text-align: left;
  padding: 10px;
  margin: 0 0 10px 0;
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
    z-index: 3;
    & > img {
        max-width: 50px;
    }
`;

export default withRouter(DictionaryList);