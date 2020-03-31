import React from 'react'
import {View,Text, FlatList,TouchableOpacity,Image,ScrollView,SafeAreaView}from 'react-native'
import { useSelector } from 'react-redux';

const PokemonList = () => {
    const pokeList = useSelector( state => state.pokemon.selectedType);
    const urlNullPokemonImage = require('../assets/pokeicon.png');
    return (
        <View>
            <FlatList
                        style={{marginTop:30}}
                        data={pokeList}
                        renderItem={ ({item}) => (
                            <TouchableOpacity style={{width:100,height:100,marginBottom:20,alignItems:'center',alignContent:'center'}}>
                            {
                                item.image !== null ? <Image style={{resizeMode:'contain',width:100,height:100}} source={{uri:item.image}}/>:
                                <Image style={{marginVertical:20}} source={urlNullPokemonImage}/>
                            }
                            <View style={{width:70,alignContent:'center',alignItems:'center',paddingBottom:100}}>
                            <Text style={{marginBottom:100,fontSize:9,fontWeight:'bold'}}>{item.name}</Text>
                            </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={ item =>item.name }
                        horizontal={false}
                        numColumns={4}
                    />
                    {console.log(pokeList)}
        </View>
    )
}

export default PokemonList
