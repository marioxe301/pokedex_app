const Types ={
    SELECTED_TYPE: 'SELECTED_TYPE',
    SELECTED_POKEMON: 'SELECTED_POKEMON'
}

const selectedType = (id,navigation) =>{
    return{
        type: Types.SELECTED_TYPE,
        payload: {id,navigation}
    }
}

const selectedPokemon = id =>{
    return{
        type: Types.SELECTED_POKEMON,
        payload: id
    }
}

export default{
    selectedType,
    selectedPokemon,
    Types
}