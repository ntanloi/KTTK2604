import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';
import Navigation from './Navigation';
import BannerTitle from './BannerTitle';
import Sidebar from './Sidebar';


export default function Index() {
    return (
        <>
            <HeaderTop /> 
            <HeaderMain />
            <Navigation />
            <div className="banner">
                <BannerTitle />
            </div>
            <div className="content">
                <Sidebar />
            
            </div>
        </>
    );
}