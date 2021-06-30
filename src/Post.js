import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createBrowserHistory } from "history";

import { loadDictionary, createDictionary } from './redux/modules/dictionary';


const Post = (props) => {
    const dispatch = useDispatch();
    const history = createBrowserHistory();
    
    const wordInput = useRef();
    const descriptionInput = useRef();
    const exampleInput = useRef();

    const addDict = (e) => {
        const word = wordInput.current.value;
        const description = descriptionInput.current.value;
        const example = exampleInput.current.value;

        const dict = {
            word: word,
            description: description,
            example: example,
        };
        console.log(dict)

        dispatch(createDictionary(dict));
        history.goBack();
    }

    return (
        <div>
            <p>ADD DICTIONARY</p>
            <Card>
                <Title>단어</Title>
                <Input type="text" ref={wordInput}/>
            </Card>
            <Card>
                <Title>설명</Title>
                <Input type="text" ref={descriptionInput}/>
            </Card>
            <Card>
                <Title>예시</Title>
                <Input type="text" ref={exampleInput}/>
            </Card>
            <Button onClick={addDict}>추가하기</Button>
        </div>
    );
}

const Card = styled.div`
    max-width: 400px;
    min-height: 100px;
    background-color: #FCF6F5;

    text-align: left;
    padding: 10px;
    margin: 10px 0 20px 0;
`;

const Title = styled.p`
    font-size: 11px;
    text-decoration: underline;
    margin: 0px 0px 2px 0px;
`;

const Input =styled.input`
    width: 95%;
`;

const Button = styled.button`
    width: 100%;
`;

export default Post;