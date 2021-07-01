import { firestore } from "../../firebase";

const dict_db = firestore.collection("dictionary");


// Actions 데이터 변경 시 발생(액션은 객체)
const LOAD   = 'dictionary/LOAD';
const CREATE   = 'dictionary/CREATE';
const FINISH = "dictionary/FINISH";

const initialState = {
  is_loaded: false, 
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
};


// Action Creators 액션을 만들기 위해 사용
export const loadDictionary = (dict) => {
    return {type: LOAD, dict};
};
export const createDictionary = (dict) => {
    return {type: CREATE, dict};
};
export const isFinished = (loaded) => {
  return {type: FINISH, loaded}
};


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

  export const addDictFB = (dict) => {
    return function (dispatch) {
      dispatch(isFinished(false));

      dict_db.add(dict).then((docRef) => {
          let dict_data = { ...dict, id: docRef.id };  
          dispatch(createDictionary(dict_data));
          dispatch(isFinished(true));
        })
        .catch((err) => {
          window.alert('오류가 났네요! 나중에 다시 시도해주세요!');
        });
    };
  };


// Reducer 리덕스에 저장된 상태(데이터)변경 함수, (firebase랑 통신하기위해 리듀서 수정)
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD": {
      if(action.dict.length > 0){
        return { dict: action.dict, is_loaded: true };
    }

  }
    case "dictionary/CREATE": {
        const new_dict_list = [...state.dict, action.dict]
        return {dict: new_dict_list}
    }
    case "dictionary/FINISH": {
      return {...state, is_loaded: action.loaded};
    }
    default: return state;
  }
}