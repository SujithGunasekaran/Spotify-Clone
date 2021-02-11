import React, { useEffect } from 'react';
import '../Css/playlist.css';
import { connect } from 'react-redux';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';


function Playlist(props) {

    const { trackList } = props.SpotifyApiReducer;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const timeConversion = (totalTimeInMilSec) => {
        let convertedToMinutes = totalTimeInMilSec / 60000;
        let getSeconds = ((convertedToMinutes % 1) * 60);
        return `${Math.floor(convertedToMinutes)} : ${Math.floor(getSeconds) >= 10 ? Math.floor(getSeconds) : `0${Math.floor(getSeconds)}`}`;
    }

    return (
        <div>
            <div className="playlist-main">
                <div className="playlist-top-banner-container">
                    <img src={trackList.images[0].url} alt={trackList.images[0].name} loading="lazy" className="playlist-top-banner-image" />
                    <div className="playlist-top-banner-information">
                        <div className="playlist-top-banner-type-name">{trackList.type}</div>
                        <div className="playlist-top-banner-original-name">{trackList.name}</div>
                        <div className="playlist-top-banner-artist-description">{trackList.description}</div>
                        <div className="playlist-top-banner-artist-container">
                            <div className="playlist-top-banner-artist-name">{trackList.owner.display_name}</div>
                            <div className="playlist-top-banner-artist-track-count">. {trackList.tracks.total} songs</div>
                        </div>
                    </div>
                </div>
                <div className="playlist-song-player">
                    <div className="playlist-song-player-play-btn">
                        <PlayArrowIcon style={{ width: '35px', height: '35px' }} />
                    </div>
                </div>
                <div className="playlist-song-list-header">
                    <div className="playlist-song-list-header-hash-tag">#</div>
                    <div className="playlist-song-list-header-title-name">Title</div>
                    <div className="playlist-song-list-header-album-name">Album</div>
                    <div className="playlist-song-list-header-date-name">Date Added</div>
                    <div className="playlist-song-list-header-duration-name"><AccessTimeRoundedIcon style={{ width: '20px', height: '20px' }} /></div>
                </div>
                {
                    trackList.tracks.items.map((songInfo, index) => (
                        <div className="playlist-song-list-song-main-display" key={index}>
                            <div className="playlist-song-list-header-hash-tag">{index + 1}</div>
                            <div className="playlist-song-info-display">
                                <img src={songInfo.track.album.images[1].url} alt={songInfo.track.album.name} loading="lazy" className="playlist-song-image" />
                                <div className="playlist-song-name-info-display">
                                    <div className="playlist-song-name">{songInfo.track.name}</div>
                                    <div className="playlist-song-artist-name">{songInfo.track.artists[0].name}</div>
                                </div>
                            </div>
                            <div className="playlist-album-name-display">
                                <div className="playlist-album-name">{songInfo.track.album.name.length > 25 ? `${songInfo.track.album.name.slice(0, 25)}...` : songInfo.track.album.name}</div>
                            </div>
                            <div className="playlist-date-display">
                                <div className="playlist-song-release-data">{songInfo.added_at.split('T')[0]}</div>
                            </div>
                            <div className="playlist-song-duration-display">
                                <div className="playlist-song-duration-name">{timeConversion(songInfo.track.duration_ms)}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    SpotifyApiReducer: state.SpotifyApiReducer
})

export default connect(mapStateToProps)(Playlist);