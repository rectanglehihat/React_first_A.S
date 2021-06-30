import React from "react";
import styled from "styled-components";

import { withRouter } from "react-router";
import { Route, BrowserRouter } from "react-router-dom";

import Post from "./Post";
import DictionaryList from "./DictionaryList";
import Spinner from "./Spinner";

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
    dispatch(addDictFB(dict));
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
    console.log(this.props.is_loaded);
    
    return (
      <div className="App">
        {!this.props.is_loaded? <Spinner/> : 
          <BrowserRouter>
            <Container>
              <Route path="/" exact component={DictionaryList}/>
              <Route path="/post" component={Post}/>
          </Container>
         </BrowserRouter>
        }
      </div>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background-color: #7b9acc;
  flex-direction: column;
`;


export default connect(mapStateToProps, mapDispatchToProps) (withRouter(App));