import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { clientId } from '../Spotify';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { connect } from 'react-redux';

function Header(props) {

    const [headerStyle, setHeaderstyle] = useState(false);

    const { previousPageName } = props.SpotifyApiReducer;
    const { handlePageChange } = props;

    const getScrollHeight = () => {
        if (window.scrollY > 100) setHeaderstyle(true);
        else setHeaderstyle(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', () => getScrollHeight())
        let userProfile = document.getElementById('user-profile');
        userProfile.addEventListener('mouseover', () => {
            document.getElementById('dropdown').style.display = 'block';
        })
        userProfile.addEventListener('mouseleave', () => {
            document.getElementById('dropdown').style.display = 'none';
        })
        return (() => window.removeEventListener('scroll', () => getScrollHeight()))
    }, [])

    const redirectPage = () => {
        window.location.href = "http://localhost:3000";
    }

    return (
        <div>
            <div className={`header-main ${headerStyle ? 'header-background' : ''}`}>
                <div className="header-arrow-container">
                    {
                        previousPageName ? <div className="header-left-arrow"><KeyboardArrowLeftIcon style={{ width: '34px', height: '34px' }} onClick={() => handlePageChange(previousPageName)} /></div> : null
                    }
                    {/* <div className="header-right-arrow"><KeyboardArrowRightIcon /></div> */}
                </div>
                <div className="header-user-profile" id="user-profile">
                    <div className="header-user-profile-container">
                        <AccountCircleIcon className="header-user-icon" />
                        <div className="header-user-client-id">{clientId.slice(0, 15)}...</div>
                        <ArrowDropDownIcon />
                    </div>
                    <div className="header-user-dropdown" id="dropdown">
                        <div className="header-user-logout" onClick={() => redirectPage()}>Logout</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToPops = (state) => {
    return {
        SpotifyApiReducer: state.SpotifyApiReducer
    }
}

export default connect(mapStateToPops)(Header);