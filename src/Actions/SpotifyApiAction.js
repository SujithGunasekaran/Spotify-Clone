import { SET_TAMIL_ALBUMS, SET_PAGENAME, SET_PREVIOUS_PAGENAME, SET_ARTIST_LIST, GET_LASTPLAYED_SONG, SET_TRACK_LIST, SET_HEADER_SONG_NAME } from './type';
import SpotifyAPI from 'spotify-web-api-js';

let spotify = new SpotifyAPI();

export const getTamilAlbums = () => dispatch => {
    spotify.getAlbums(['11YJfivZjEaEUU9lJmeidh', '1YXlDrh64M5ttCaRXn7fp5', '75tmDdVdpjSQwoEc0WjRug', '0ajbKuAGjGt7VBJeKpYyu8', '07zKfMmyPo0FCMqngBBckL', '58rfEEYCmEImlPaaqQddVF'])
        .then((responseData) => {
            dispatch({
                type: SET_TAMIL_ALBUMS,
                tamilAlbums: responseData.albums
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getArtist = () => dispatch => {
    let artistID = ['37i9dQZF1DX6WjBAV6orkC', '37i9dQZF1DZ06evO2GbnbB', '37i9dQZF1DZ06evO3TcHDq', '37i9dQZF1DZ06evO12eTXn', '37i9dQZF1DXc2aPBXGmXrt', '37i9dQZF1DX4npDJDFDYLg'];

    const getArtisList = () => {
        let artistResponse = [];
        artistResponse = artistID.map((id) => {
            try {
                let response = spotify.getPlaylist(id);
                return Promise.resolve(response);
            }
            catch (err) {
                return Promise.reject(err);
            }
        })
        return artistResponse;
    }
    Promise.all(getArtisList())
        .then((responseData) => {
            dispatch({
                type: SET_ARTIST_LIST,
                artistList: responseData
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getLastPlayedSong = () => dispatch => {
    spotify.getMyRecentlyPlayedTracks()
        .then((responseData) => {
            console.log("Hello")
            dispatch({
                type: GET_LASTPLAYED_SONG,
                lastPlayedSong: responseData.items.slice(-1)
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

export const setPageName = (pageName, previousPageName, trackList) => dispatch => {
    dispatch({
        type: SET_PAGENAME,
        pageName: pageName
    })
    dispatch({
        type: SET_PREVIOUS_PAGENAME,
        previousPageName: previousPageName
    })
    dispatch({
        type: SET_TRACK_LIST,
        trackList: trackList
    })
}

export const setHeaderSongName = (songName) => dispatch => {
    dispatch({
        type: SET_HEADER_SONG_NAME,
        songName: songName
    })
}

