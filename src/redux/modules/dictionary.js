// bucket.js
import { firestore } from "../../firebase";

const dict_db = firestore.collection("dictionary");


// Actions
const LOAD   = 'dictionary/LOAD';
const CREATE   = 'dictionary/CREATE';

const initialState = {
  dict: [
    {id: "0",
    word: "apple",
    description: "사과사과",
    example: "애플"},
  { id: "1",
    word: "banana",
    description: "바나나",
    example: "버내너"},
  { id: "2",
    word: "carrot",
    description: "당근",
    example: "캐럿"}
  ],
  is_loaded: false, 
};


// Action Creators
export const loadDictionary = (dict) => {
    return {type: LOAD, dict};
}
export const createDictionary = (dict) => {
    return {type: CREATE, dict};
}


// 파이어베이스랑 통신하는 부분
export const loadDictFB = () => {
  return function (dispatch){

    dict_db.get().then((docs) => {
        let dict_data = [];  // 리덕스에 넣고 쓸거니까 빈 배열 생성 
        docs.forEach((doc) => {
          if(doc.exists){
            dict_data = [...dict_data, {id: doc.id, ...doc.data()}]
          }
        });
        dispatch(loadDictionary(dict_data));
      });
    }
  }

  export const addDictFB = (dictionary) => {
    return function (dispatch) {
      let dict_data = dictionary;
  
      dict_db
        .add(dict_data).then((docRef) => {
          dict_data = { ...dict_data, id: docRef.id };  
          dispatch(createDictionary(dict_data));
        })
        .catch((err) => {
          window.alert('오류가 났네요! 나중에 다시 시도해주세요!');
        });
    };
  };


// Reducer (firebase랑 통신하기위해 리듀서 수정)
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD": {
      if(action.dict.length > 0){
        return { dict: action.dict, is_loaded: true };
    }
    return state;
  }
    case "dictionary/CREATE": {
        const new_dict_list = [...state.dict, action.dict]
        return {dict: new_dict_list}
    }
    default: return state;
  }
}