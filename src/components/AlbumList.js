import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Class based Componant that help in http request
class AlbumList extends Component {
    // Step 1 : here we created a properties that have empty array 
    state = { albums: [] };


    componentWillMount() {
        //here we try for http request through axios
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));  
        //step 2 pass data in to array using setState perpose to update data for component
    }

    //we create a helper method to to show album related stuff

      renderAlbums(){
         return this.state.albums.map(album => 
         <AlbumDetail key={album.title}  album={album} />
         );
      }

    render() {

        // Step3 to fetch data 
        console.log(this.state);

        //creating a reference for renderAlbums
        return (
           <ScrollView>
                {this.renderAlbums()}      
           </ScrollView>
        );
     } 
}

export default AlbumList; 