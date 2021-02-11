import { SET_TAMIL_ALBUMS, SET_PAGENAME, SET_PREVIOUS_PAGENAME, SET_ARTIST_LIST, GET_LASTPLAYED_SONG, SET_TRACK_LIST, SET_HEADER_SONG_NAME } from '../Actions/type';

const initialState = {
    pageName: 'SongList',
    previousPageName: '',
    tamilAlbums: {
        Tamil: {
            Heading: "Tamil new release",
            AlbumList: []
        }
    },
    artistListInfo: {
        Artist: {
            Heading: "Best of Artist",
            ArtistList: []
        }
    },
    lastPlayedSongInfo: [],
    trackList: {},
    headerSongName: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_TAMIL_ALBUMS:
            let tamilAlbums = JSON.parse(JSON.stringify(state.tamilAlbums));
            tamilAlbums.Tamil.AlbumList = [...tamilAlbums.Tamil.AlbumList, ...action.tamilAlbums];
            return {
                ...state,
                tamilAlbums: tamilAlbums
            }
        case SET_PAGENAME:
            return {
                ...state,
                pageName: action.pageName
            }
        case SET_PREVIOUS_PAGENAME:
            return {
                ...state,
                previousPageName: action.previousPageName
            }
        case SET_ARTIST_LIST:
            let artistListInfo = JSON.parse(JSON.stringify(state.artistListInfo));
            artistListInfo.Artist.ArtistList = [...artistListInfo.Artist.ArtistList, ...action.artistList];
            return {
                ...state,
                artistListInfo: artistListInfo
            }
        case GET_LASTPLAYED_SONG:
            return {
                ...state,
                lastPlayedSongInfo: action.lastPlayedSong
            }
        case SET_TRACK_LIST:
            return {
                ...state,
                trackList: action.trackList
            }
        case SET_HEADER_SONG_NAME:
            return {
                ...state,
                headerSongName: action.songName
            }
        default:
            return state;
    }
}