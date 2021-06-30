import React from "react";
import styled from "styled-components";

import { withRouter } from "react-router";
import { Route, BrowserRouter } from "react-router-dom";

import Post from "./Post";
import DictionaryList from "./DictionaryList";
import Nowhere from "./Nowhere";

import { connect } from 'react-redux';
import { loadDictionary, createDictionary, loadDictFB, addDictFB } from "./redux/modules/dictionary";


// 리덕스의 스토어가 가진 상태값을 props로 받아오기 위한 함수예요.
const mapStateToProps = (state) => ({
  dict_list: state.dictionary.dict,
  is_loaded: state.dictionary.is_loaded,
});

// 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadDictFB());
  },
  create: (dict) => {
    dispatch(loadDictionary(dict));
  }
});

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = null;
  };

  componentDidMount() {
    this.props.load();
  }

  render() {
    
    return (
      <div className="App">
        <BrowserRouter>
        {this.props.in_loaded? (<Nowhere/>) : (
          <Container>
            <Route path="/" exact component={DictionaryList}/>
            <Route path="/post" component={Post}/>
         </Container>
        )}
        </BrowserRouter>
      </div>
    );
  }
}

const Container = styled.div`
  max-width: 410px;
  min-height: 710px;
  background-color: #7b9acc;
  padding: 16px;
  margin: 0px auto;
   & > p {
     color: #FCF6F5;
     font-size: 20px;
   }
`;


export default connect(mapStateToProps, mapDispatchToProps) (withRouter(App));