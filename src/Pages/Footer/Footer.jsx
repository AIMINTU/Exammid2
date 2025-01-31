import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-blue-700 text-neutral-content grid-rows-2 p-10 max-w-7xl mx-auto  mt-40'>
            <footer className="footer flex gap-36 ">
                <nav>
                    <h4 className="footer-title">Services</h4>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h4 className="footer-title">Company</h4>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h4 className="footer-title">Legal</h4>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h4 className="footer-title">Social</h4>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">GitHub</a>
                </nav>
                <nav>
                    <h4 className="footer-title">Explore</h4>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </nav>
                <nav>
                    <h4 className="footer-title">Apps</h4>
                    <a className="link link-hover">Mac</a>
                    <a className="link link-hover">Windows</a>
                    <a className="link link-hover">iPhone</a>
                    <a className="link link-hover">Android</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;