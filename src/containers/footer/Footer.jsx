import React from 'react';
import './Footer.css' ;
import gpt3Logo from "../../assets/logo.svg"

const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'>Do you want to step in to the future before others like Saleihin Khan!</h1>
            </div>

            <div className='gpt3__footer-btn'>
                <p>Request Early Access</p>
            </div>

            <div className='gpt3__footer-links'>
                    <div className='gpt3__footer-links_logo'>
                        <img src={gpt3Logo} alt="footer img" />
                        <p>Saleihin Khan, All Rights Reserved</p>
                    </div>

                    <div className='gpt3__footer-links_div'>
                            <h4>Links</h4>
                            <p>OverAlls</p>
                            <p>Social Media</p>
                            <p>Counters</p>
                            <p>Contact</p>
                    </div>

                    <div className='gpt3__footer-links_div'>
                            <h4>Company</h4>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Contact</p>
                    </div>

                    <div className='gpt3__footer-links_div'>
                            <h4>Get in touch</h4>
                            <p>Saleihin Khan</p>
                            <p>saleihinkhan@gmail.com</p>
                            <p>+88 017 1436 7947</p>
                            <p>Dhaka, Bangladesh</p>
                    </div>
            </div>

            <div className='gpt3__footer-copyright'>
                    <p>© 2023 GPT-3. All rights reserved by Saleihin Khan.</p>
            </div>
        </div>
    );
};

export default Footer;