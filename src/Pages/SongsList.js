import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTamilAlbums, getArtist } from '../Actions/SpotifyApiAction';
import '../Css/songList.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function SongsList(props) {

    const { tamilAlbums, artistListInfo } = props.SpotifyApiReducer;
    const { handlePageChange } = props;

    useEffect(() => {
        getSongData();
    }, [])

    const getSongData = () => {
        if (tamilAlbums.Tamil.AlbumList.length === 0) props.getTamilAlbums();
        if (artistListInfo.Artist.ArtistList.length === 0) props.getArtist();
    }

    return (
        <div>
            <div className="songlist-main">
                <div className="songList-main-container">
                    <div className="songlist-container">
                        {
                            Object.keys(tamilAlbums).map((albumName, index) => (
                                <>
                                    <div className="songlist-album-heading">{tamilAlbums[albumName].Heading}</div>
                                    {
                                        tamilAlbums[albumName].AlbumList.length > 0 ? tamilAlbums[albumName].AlbumList.map((albumInfo, index) => (
                                            <div className="songlist-card-container" key={index} onClick={() => handlePageChange('Album', albumInfo)}>
                                                <div className="songlist-play-btn"><PlayArrowIcon /></div>
                                                <img src={albumInfo.images[1].url} className="songlist-card-image" loading="lazy" />
                                                <div className="songlist-card-filmname">{albumInfo.name.slice(0, 15)}...</div>
                                                <div className="songlist-card-artist-name">{albumInfo.artists[0].name}</div>
                                            </div>
                                        )) : null
                                    }
                                </>
                            ))
                        }
                    </div>
                    <div className="songlist-container">
                        {
                            Object.keys(artistListInfo).map((artistInfo, index) => (
                                <>
                                    <div className="songlist-album-heading">{artistListInfo[artistInfo].Heading}</div>
                                    {
                                        artistListInfo[artistInfo].ArtistList.length > 0 ? artistListInfo[artistInfo].ArtistList.map((artistDetail, index) => (
                                            <div className="songlist-card-container" onClick={() => handlePageChange('Playlist', artistDetail)}>
                                                <div className="songlist-play-btn"><PlayArrowIcon /></div>
                                                <img src={artistDetail.images[0].url} loading="lazy" className="songlist-card-image" />
                                                <div className="songlist-card-filmname">{artistDetail.name.slice(0, 20)}...</div>
                                                <div className="songlist-card-artist-name">{artistDetail.description.slice(0, 20)}...</div>
                                            </div>
                                        )) : null
                                    }

                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTamilAlbums: () => dispatch(getTamilAlbums()),
        getArtist: () => dispatch(getArtist()),
    }
}

const mapStateToProps = (state) => {
    return {
        SpotifyApiReducer: state.SpotifyApiReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);