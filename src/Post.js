import React, { useRef } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addDictFB } from './redux/modules/dictionary';


const Post = (props) => {
    const dispatch = useDispatch();
    
    const wordInput = useRef();
    const descriptionInput = useRef();
    const exampleInput = useRef();

    const addDict = () => {
        const card = {
            word: wordInput.current.value,
            description: descriptionInput.current.value,
            example: exampleInput.current.value,
        }

        dispatch(addDictFB(card));
        props.history.push('/');
    }

    return (
        <div>
            <Board>ADD DICTIONARY</Board>
            <Card>
                <p>단어</p>
                <input type="text" ref={wordInput}/>
            </Card>
            <Card>
                <p>설명</p>
                <input type="text" ref={descriptionInput}/>
            </Card>
            <Card>
                <p>예시</p>
                <input type="text" ref={exampleInput}/>
            </Card>
            <Button onClick={addDict}>추가하기</Button>
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
    padding: 10px;
    margin: 10px auto 20px auto;

    & > p {
        text-decoration: underline;
        font-size: 8px;
        color: #888888;
        margin: 4px 0px;
      }
    
      & > input {
        border: 1px solid #000000;
        width: 100%;
        padding: 2px 4px;
        margin: 4px 0px;
        box-sizing: border-box;
      }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px 0px;
    margin: auto;
    font-size: 16px;
`;

export default Post;