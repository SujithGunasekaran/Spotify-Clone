import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLastPlayedSong } from '../Actions/SpotifyApiAction';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import DevicesIcon from '@material-ui/icons/Devices';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

function Footer(props) {

    const { lastPlayedSongInfo } = props.SpotifyApiReducer;

    useEffect(() => {
        getLastPlayedSongAPI();
    }, [])

    const getLastPlayedSongAPI = () => {
        props.getLastPlayedSong();
        if (lastPlayedSongInfo.length === 0) {
        }
    }

    return (
        <div>
            <div className="footer-main">
                <div className="footer-main-container">
                    {
                        lastPlayedSongInfo.map((songInfo, index) => (
                            <>
                                <div className="footer-image-container">
                                    <img src={songInfo.track.album.images[0].url} className="footer-song-image" />
                                    <div className="footer-song-name-container">
                                        <div className="footer-song-name">{songInfo.track.name}</div>
                                        <div className="footer-song-artist-name">{songInfo.track.album.artists[0].name}</div>
                                    </div>
                                </div>
                                <div className="footer-song-player-control">
                                    <div className="footer-song-track-child">
                                        <div className="footer-song-track-info">
                                            <SkipPreviousIcon className="footer-song-track-backbtn" />
                                            <div className="footer-sound-track-playbtn"><PlayArrowIcon /></div>
                                            <SkipNextIcon className="footer-song-track-nextbtn" />
                                        </div>
                                        <div className="footer-song-track-duration" />
                                    </div>

                                </div>
                                <div className="footer-song-track-control-container">
                                    <QueueMusicIcon className="footer-song-track-queue" />
                                    <DevicesIcon className="footer-song-track-queue" />
                                    <VolumeUpIcon className="footer-song-track-queue" />
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLastPlayedSong: () => dispatch(getLastPlayedSong())
    }
}

const mapStateToProps = (state) => {
    return {
        SpotifyApiReducer: state.SpotifyApiReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);