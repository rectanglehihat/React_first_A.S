import React, { useRef } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addDictFB } from './redux/modules/dictionary';


const Post = (props) => {
    const dispatch = useDispatch();
    
    const wordInput = useRef();
    const descriptionInput = useRef();
    const exampleInput = useRef();

    const addCard = () => {
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
            <Board>아무말 더하기</Board>
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
            <Button onClick={addCard}>추가하기</Button>
        </div>
    );
}

const Board = styled.h1`
    width: 90vw;
    margin: 50px auto 30px auto;
    font-size: 30px;
    color: #FCF6F5;
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
    margin: 10px auto 15px auto;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    & > p {
        font-size: 13px;
        color: #888888;
        margin: 0px 0px 2px 0px;
      }
    
      & > input {
        border: 1px solid #7b9acc;
        width: 100%;
        padding: 10px 20px;
        margin: 4px 0px;
        box-sizing: border-box;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        &:focus {
            outline: none;
            box-shadow: 0 0 0 2px #FCF6F5;
        }
      }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px 10px;
    margin: 35px auto;
    font-size: 14px;

    width: 40vw;
    height: auto;
    border-radius: 25px;
    border: none;
    background-color: #FCF6F5;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

export default Post;