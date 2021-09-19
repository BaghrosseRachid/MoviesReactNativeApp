import React from 'react'
import {View,TextInput,Button} from 'react-native'

class Search extends React.Component{
render(){
    return(
      <View>
          <TextInput placeholder="Titre de film"></TextInput>
          <Button title="Rechercher" onPress={()=>{

          }}></Button>
      </View>
    )
}
}
export default Search

