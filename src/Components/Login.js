import React from 'react';
import { spotifyAccessURL } from '../Spotify';
export default function Login() {
    return (
        <div>
            <div className="login-main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <img
                                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                                className="login-image"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button className="login-btn">
                                <a href={spotifyAccessURL}>Login to Spotify</a>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}