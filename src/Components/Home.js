import React, { useState, useEffect } from 'react';
import Header from './Header';
import SongList from '../Pages/SongsList';
import Album from '../Pages/Album';
import Playlist from '../Pages/Playlist';
import { connect } from 'react-redux';
import { setPageName } from '../Actions/SpotifyApiAction';

function Home(props) {

    const { pageName } = props.SpotifyApiReducer;
    const [pageList] = useState([
        {
            labelName: "SongList",
            previousPageName: '',
            component: SongList
        },
        {
            labelName: "Album",
            previousPageName: 'SongList',
            component: Album
        },
        {
            labelName: "Playlist",
            previousPageName: 'SongList',
            component: Playlist
        }
    ])

    useEffect(() => {
        props.setPageName('SongList');
    }, [])

    const handlePageChange = (pageName, trackList) => {
        console.log(trackList);
        pageList.forEach((name) => {
            if (name.labelName === pageName) props.setPageName(name.labelName, name.previousPageName, trackList);
        })
    }

    return (
        <div>
            <div className="home-main-container">
                <div className="header-sticky">
                    <Header
                        handlePageChange={handlePageChange}
                    />
                </div>
                <div className="song-body-main">
                    {
                        pageList.map((pageInfo, index) => (
                            pageInfo.labelName === pageName ?
                                <div key={index}>
                                    <pageInfo.component
                                        currentPageName={pageInfo.labelName}
                                        previousPageName={pageInfo.previousPageName}
                                        handlePageChange={handlePageChange}
                                    />
                                </div> : null
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPageName: (pageName, previousPageName, trackList) => dispatch(setPageName(pageName, previousPageName, trackList))
    }
}

const mapStateToProps = (state) => {
    return {
        SpotifyApiReducer: state.SpotifyApiReducer
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);