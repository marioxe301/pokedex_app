import ACTIONS from './actions';
import axios from 'axios';

const initialState ={
    types:
    [
        {id:7 ,type: 'Bug',image: require('../assets/Tipos/Bug.png') },
        {id:17 ,type: 'Dark',image: require('../assets/Tipos/Dark.png') },
        {id:16 ,type: 'Dragon',image: require('../assets/Tipos/Dragon.png')},
        {id:13 ,type: 'Electric',image: require('../assets/Tipos/Electric.png')},
        {id:18 ,type: 'Fairy',image: require('../assets/Tipos/Fairy.png')},
        {id:2 ,type: 'Fighting',image: require('../assets/Tipos/Fighting.png')},
        {id:10 ,type: 'Fire',image: require('../assets/Tipos/Fire.png')},
        {id:3 ,type: 'Flying',image: require('../assets/Tipos/Flying.png')},
        {id:8 ,type: 'Ghost',image: require('../assets/Tipos/Ghost.png')},
        {id:12 ,type: 'Grass',image: require('../assets/Tipos/Grass.png')},
        {id:5 ,type: 'Ground',image: require('../assets/Tipos/Ground.png')},
        {id:15 ,type: 'Ice',image: require('../assets/Tipos/Ice.png')},
        {id:1 ,type: 'Normal',image: require('../assets/Tipos/Normal.png')},
        {id:4 ,type: 'Poison',image: require('../assets/Tipos/Poison.png')},
        {id:14 ,type: 'Psychic',image: require('../assets/Tipos/Psychic.png')},
        {id:6 ,type: 'Rock',image:require('../assets/Tipos/Rock.png')},
        {id:9 ,type: 'Steel',image: require('../assets/Tipos/Steel.png')},
        {id:11 ,type: 'Water',image:require('../assets/Tipos/Water.png')},
    ],
    selectedType:[],
    setectedPokemon: {}
}

const getPokemonByType = (state,id) =>{
    const url = 'https://pokeapi.co/api/v2/type/'+id;
    axios.get(url)
        .then( response =>{
            response.data.pokemon.forEach( item => {
                getPokemonData(state,item.pokemon.url);
            });
        })
}

const getPokemonData = (state,url)=>{
    axios.get(url)
        .then(response=>{
             state.selectedType.push({name: response.data.name, image: response.data.sprites.front_default});
        })
}

const pokemonReducer = ( state = initialState,action )=>{
    switch(action.type){
        case ACTIONS.Types.SELECTED_POKEMON:{

        }
        case ACTIONS.Types.SELECTED_TYPE:{
            state.selectedType=[];
            getPokemonByType(state,action.payload.id);
            setTimeout(()=>{action.payload.navigation.navigate('PokemonList');},1000);
            return state;
        }
        default:
            return state;
    }
}

export default pokemonReducer;