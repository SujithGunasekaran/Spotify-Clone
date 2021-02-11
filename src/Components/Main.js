import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Home from './Home';

function Main() {

    return (
        <div>
            <div className="sidebar-main">
                <div className="sidebar-content">
                    <Sidebar />
                </div>
                <div className="body-main">
                    <Home />
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Main;