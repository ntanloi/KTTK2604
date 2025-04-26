import React from 'react';
import iuhlogo from '../images/iuhlogo.png';

const FooterBottom = () => (
    <div className="footer-bottom">
        <img src={iuhlogo} alt="IUH Logo" className="logo" />
        <p>Số lượt truy cập: 2,278,335,280<br />Bản quyền © 2015 - 2025</p>
        <div className="social-links">
            <a href="#"><img src="https://via.placeholder.com/20" alt="Facebook" /></a>
            <a href="#"><img src="https://via.placeholder.com/20" alt="Twitter" /></a>
            <a href="#"><img src="https://via.placeholder.com/20" alt="LinkedIn" /></a>
        </div>
    </div>
);

export default FooterBottom;