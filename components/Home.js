import React, { useEffect } from 'react';
import { StyleSheet,View,Text,Image, SafeAreaView, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import ACTIONS from '../redux/actions';


const Home = ({navigation,types,onSelectedType})=>{
    return(
        <View>
            <View style={style.titleContainer}>
                <Image
                style={style.imageTitle}
                    source={{uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62902855-31e8-48de-986e-5080e8ef5f15/d5uxsvu-cbf56dfe-0c82-40f9-928b-1e756acf0236.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyOTAyODU1LTMxZTgtNDhkZS05ODZlLTUwODBlOGVmNWYxNVwvZDV1eHN2dS1jYmY1NmRmZS0wYzgyLTQwZjktOTI4Yi0xZTc1NmFjZjAyMzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RLOne-7vDfGOxnvtsM9XNeF--mrcHZuILO_TVhx4GrU'}}
                />
            </View>
                    <Text style={{fontSize:40,textAlign:'center',fontWeight:'bold',marginTop:30}}>Select a type:</Text>
                    <FlatList
                        style={{marginTop:30}}
                        data={types}
                        renderItem={ ({item}) => (
                            <TouchableOpacity style={{width:100,height:100,margin:1,alignItems:'center'}} onPress={()=> onSelectedType(item.id,navigation)}>
                                <Image style={{resizeMode:'contain',width:100,height:100}} source={item.image}/>
                            </TouchableOpacity>
                        )}
                        keyExtractor={ item =>item.id.toString() }
                        horizontal={false}
                        numColumns={4}
                    />
        </View>
    );
}

const mapStateToProps = state =>{
    return { types: state.pokemon.types }
}

const mapDispatchToProps = dispatch =>{
    return{
        onSelectedType: (id,navigation) => dispatch(ACTIONS.selectedType(id,navigation))
    }
}

const style = StyleSheet.create({
    titleContainer:{
        width:'100%',
        height:150,
        backgroundColor: '#ff4141'
    },
    imageTitle:{
      marginTop: 15 ,
      width:'100%',
      height:'100%'  
    },
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);