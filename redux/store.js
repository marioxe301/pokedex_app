import { createStore,combineReducers } from 'redux';
import pokemonReducer from './reducers';

const allReducers = combineReducers({
    pokemon: pokemonReducer
})

const store = createStore( allReducers );
export default store;