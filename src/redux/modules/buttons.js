const Types = {
    SET_BUTTONS: 'buttons/SET_BUTTONS'
}

const initialState = {};

export default function reducer(state = initialState, action){

    switch(action.type){
        case Types.SET_BUTTONS:
            return { ...state, buttonVal: action.payload}
            default:
            return { ...state}
    }

}

export function setButton(buttonVal){
    return{
        type: Types.SET_BUTTONS,
        payload: buttonVal,
    }
}