import React from 'react';
import logo from './images/logo.png'

const Footer = () => {
    return (
        <div className="container-fluid footer pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                           <img  className="logo" src={logo}/>
                           <p className="fw-bold text-capitalize mt-2">A product logo is specially<span className="footer_desc"> created for that specific product.</span></p>
                    </div>
                    <div className="col-lg-2 col-md-4">
                    <ul className="">
                        <li className="fw-bold text-uppercase"><a href="#" className="footer_link">Realme</a></li>
                        <li className="pt-1 fw-bold text-uppercase"><a href="#" className="footer_link">Oneplus</a></li>
                        <li className="pt-1 fw-bold text-uppercase"><a href="#" className="footer_link">Samsung</a></li>
                    </ul>
                    </div>
                    <div className="col-lg-2 col-md-4">
                    <ul>
                        <li className="fw-bold text-uppercase"><a href="#" className="footer_link">Asus</a></li>
                        <li className="pt-1 fw-bold text-uppercase"><a href="#" className="footer_link">AMD ryzen</a></li>
                        <li className="pt-1 fw-bold text-uppercase"><a href="#" className="footer_link">hp</a></li>
                    </ul>
                    </div>
                    <div className="col-lg-2 col-md-4">
                    <ul>
                        <li className="fw-bold text-uppercase"><a href="#" className="footer_link">sony</a></li>
                        <li className="pt-1 fw-bold text-uppercase"><a href="#" className="footer_link">apple</a></li>
                        <li className="pt-1 fw-bold text-uppercase"><a href="#" className="footer_link">boat</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;