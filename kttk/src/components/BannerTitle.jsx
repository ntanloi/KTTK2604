import React, { useState, useEffect } from 'react';
import qrcode1 from '../images/image.png';
import qrcode2 from '../images/image.png';
import qrcode3 from '../images/image.png';

const banners = [
    {
        title: "Tri nghiệm KHÔNG GIAN THỰC TẾ ẢO<br />ĐẠI HỌC CÔNG NGHIỆP THÀNH PHỐ HỒ CHÍ MINH",
        qrCode: qrcode1,
        url: "HTTPS://VR.IUH.EDU.VN",
    },
    {
        title: "KHÁM PHÁ CÁC CHƯƠNG TRÌNH ĐÀO TẠO<br />ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH",
        qrCode: qrcode2,
        url: "HTTPS://TRAINING.IUH.EDU.VN",
    },
    {
        title: "THAM GIA NGÀY HỘI TUYỂN SINH 2025<br />ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH",
        qrCode: qrcode3,
        url: "HTTPS://ADMISSION.IUH.EDU.VN",
    },
];

const BannerTitle = () => {
    const [currentBanner, setCurrentBanner] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length);
        }, 3000); // Chuyển đổi mỗi 3 giây

        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, []);

    return (
        <div className="banner-content">
            <h2
                className="banner-title"
                dangerouslySetInnerHTML={{ __html: banners[currentBanner].title }}
            />
            <img
                src={banners[currentBanner].qrCode}
                alt="QR Code"
                className="qr-code"
            />
            <p>{banners[currentBanner].url}</p>
        </div>
    );
};

export default BannerTitle;