const Types = {
    SET_QUESTION: 'questions/SET_QUESTION'
}

const initialState = {};

export default function reducer(state = initialState, action){

    switch(action.type){
        case Types.SET_QUESTION:
            return { ...state, question: action.payload}
            default:
            return { ...state}
    }

}

export function setQuestion(question){
    return{
        type: Types.SET_QUESTION,
        payload: question,
    }
}