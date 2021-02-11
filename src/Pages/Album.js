import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../Css/album.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';

function Album(props) {

    const { trackList } = props.SpotifyApiReducer;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const timeConvert = (totalTimeInMilSec) => {
        let convertedToMinutes = totalTimeInMilSec / 60000;
        let gettingSeconds = ((convertedToMinutes % 1) * 60);
        return `${Math.floor(convertedToMinutes)} : ${Math.floor(gettingSeconds) >= 10 ? Math.floor(gettingSeconds) : `0${Math.floor(gettingSeconds)}`}`;
    }

    return (
        <div>
            <div className="album-main">
                <div className="album-top-banner-container">
                    <img src={trackList.images[1].url} loading="lazy" className="album-top-banner-image" />
                    <div className="album-top-banner-information">
                        <div className="album-top-banner-type-name">{trackList.type}</div>
                        <div className="album-top-banner-original-name">{trackList.name}</div>
                        <div className="album-top-banner-artist-container">
                            <div className="album-top-banner-artist-name">{trackList.artists[0].name} .</div>
                            <div className="album-top-banner-artist-track-count">{trackList.total_tracks} Songs</div>
                        </div>
                    </div>
                </div>
                <div className="album-song-player">
                    <div className="album-song-player-play-btn">
                        <PlayArrowIcon style={{ width: '35px', height: '35px' }} />
                    </div>
                </div>
                <div className="album-song-list-header">
                    <div className="album-song-list-header-hash-tag">#</div>
                    <div className="album-song-list-header-title-name">Title</div>
                    <div className="album-song-list-header-duration-name"><AccessTimeRoundedIcon style={{ width: '20px', height: '20px' }} /></div>
                </div>
                {
                    trackList.tracks.items.map((songInfo, index) => (
                        <div className="album-song-list-song-main-display" key={index}>
                            <div className="album-song-list-header-hash-tag">{songInfo.track_number}</div>
                            <div className="album-song-name-display">
                                <div className="album-song-name">{songInfo.name}</div>
                                <div className="album-song-artist-name">{songInfo.artists[0].name}</div>
                            </div>
                            <div className="album-song-artist-duration">{timeConvert(songInfo.duration_ms)}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        SpotifyApiReducer: state.SpotifyApiReducer
    }
}

export default connect(mapStateToProps)(Album);