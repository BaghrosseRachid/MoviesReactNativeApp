import React from "react";
import { View, TextInput, Button, StyleSheet, FlatList } from "react-native";
import films from "../Helpers/FilmsData";
import FilmItem from "./FilmItem";
class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder="Titre du film"
        ></TextInput>
        <Button title="Rechercher" onPress={() => {}}></Button>
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textinput: {
    marginLeft: 2,
    marginRight: 2,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
    marginBottom: 3,
    textAlign: "center",
  },
  main_container: {
    flex: 1,
    marginTop: 20,
  },
});
export default Search;
