import React, {useEffect , useState} from 'react'
import axios from 'axios'
import {View, Text, FlatList, StyleSheet,TouchableOpacity, Alert , Button} from 'react-native' 

import TodoDetails from './todoDetails';
const COLORS = {primary: '#1f145c', white: '#fff'};
const marginBottomItem = 20;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;



function TodoList({navigation}) {

    const [todos, setTodos] = useState([]) ; 
    useEffect(()=>{
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .then(function (response) {
        // handle success
        // alert(JSON.stringify(response.data));
        setTodos(response.data);
        console.log(response.data) ; 
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        // alert('Finally called');
      });


    }, [])

    const todoPress = (item) => {
        //  alert(item)
         navigation.navigate('TodoDetail', { id: item })
     }

    const _renderItem = ({item}) => <Text style={styles.listItem} onPress={()=>todoPress(item.id)} >{item.title}    
        
    </Text> 
    
    return (
        <View>
            <Text style={styles.header}> TODOS </Text>
            <FlatList 
       data = {todos}
       renderItem = {_renderItem } 
       
       />

        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: COLORS.white,
    },
    inputContainer: {
      height: 50,
      paddingHorizontal: 20,
      elevation: 40,
      backgroundColor: COLORS.white,
      flex: 1,
      marginVertical: 20,
      marginRight: 20,
      borderRadius: 30,
    },
    iconContainer: {
      height: 50,
      width: 50,
      backgroundColor: COLORS.primary,
      elevation: 40,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    listItem: {
      padding: 20,
      backgroundColor: COLORS.white,
      backgroundColor:'lavender',
      flexDirection: 'row',
      elevation: 12,
      borderRadius: 7,
      marginVertical: 10,
    },
    actionIcon: {
      height: 25,
      width: 25,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      marginLeft: 5,
      borderRadius: 3,
    },
    header: {
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      fontWeight:'700', 
      justifyContent: 'center',
      marginLeft:150
    },
  });

export default TodoList
