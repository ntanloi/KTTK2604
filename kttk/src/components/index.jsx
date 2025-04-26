import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';
import Navigation from './Navigation';
import BannerTitle from './BannerTitle';
import Sidebar from './Sidebar';
import Announcements from './Announcements';
import Admissions from './Admissions';
import InternationalCooperation from './InternationalCooperation';
import FooterGrid from './FooterGrid';
import FooterBottom from './FooterBottom';

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
                <div className="main-content">
                    <Announcements />
                    <Admissions />
                    <InternationalCooperation />
                </div>
            </div>
            <div className="footer">
                <FooterGrid />
                <FooterBottom />
            </div>
        </>
    );
}