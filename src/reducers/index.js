import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    dummy: () => { return {}; }
});

export default rootReducer;
