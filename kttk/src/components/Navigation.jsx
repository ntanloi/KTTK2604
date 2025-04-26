import React from 'react';

const Navigation = () => (
    <div className="nav">
        <a href="#" className="nav-link">GIỚI THIỆU</a>
        <a href="#" className="nav-link">ĐÀO TẠO</a>
        <a href="#" className="nav-link">TUYỂN SINH</a>
        <a href="#" className="nav-link">NGHIÊN CỨU</a>
        <a href="#" className="nav-link">SINH VIÊN</a>
        <a href="#" className="nav-link">GIẢNG VIÊN</a>
        <a href="#" className="nav-link">VĂN BẰNG</a>
        <div className="search-container">
            <input
                type="text"
                placeholder="Tìm kiếm..."
                className="search-input"
            />
            <span className="search-icon">🔍</span>
        </div>
    </div>
);

export default Navigation;