import React from 'react';
import iuhlogo from '../images/iuhlogo.png';

const HeaderMain = () => (
    <div className="header-main">
        <img src={iuhlogo} alt="IUH Logo" className="logo" />
        <div className="title">
            <h1>BỘ CÔNG THƯƠNG<br />ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h1>
            <p>Đổi mới tư duy, làm giàu thêm tri thức - dồi sóng</p>
        </div>
    </div>
);

export default HeaderMain;