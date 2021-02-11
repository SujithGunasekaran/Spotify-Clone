import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddIcon from '@material-ui/icons/Add';

export default function Sidebar() {
    return (
        <div>
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                className="sidebar-image"
            />
            <div className="sidebar-content-info">
                <div className="sidebar-label-display">
                    <div className="sidebar-label-icon"><HomeIcon /></div>
                    <div className="sidebar-label-name">Home</div>
                </div>
                <div className="sidebar-label-display">
                    <div className="sidebar-label-icon"><LibraryMusicIcon /></div>
                    <div className="sidebar-label-name">Your Library</div>
                </div>
                <div className="sidebar-label-heading">Playlists</div>
                <div className="sidebar-label-display">
                    <div className="sidebar-label-icon"><AddIcon /></div>
                    <div className="sidebar-label-name">Create Playlist</div>
                </div>
            </div>
        </div>
    )
}