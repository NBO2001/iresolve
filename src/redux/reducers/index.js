import { combineReducers } from "redux";

import questions from   '../modules/questions';
import button from '../modules/buttons';

export default combineReducers({
    questions,
    button,
});