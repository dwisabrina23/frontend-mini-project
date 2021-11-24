import React from 'react';
import './sideBanner.css';
import contactImg from '../assets/contact-vevtor.png';

function SideBanner() {
    return (
            <div className="col-lg col-md col-sm side-contact-wrapper px-2">
                <div className="container-fluid text-left side-contact-ctr">
                    <div className="text-dark">
                        <h2 className="text-contact font-weight-bold">Thanks for your interest in Kreatives!</h2>
                        <p className="text-contact-desc text-weight-normal">
                        Want to discuss your ideas, projects or Requirements? <br/>Submit this form and our sales representative will contact you soon! <br/>Pick your date and enjoy the process!😊🙌
                        </p>
                    </div>
                    <div className="w-100">
                        <img
                            id="contact-vector"
                            src={contactImg}
                            alt="contact vector"
                            className="d-flex justify-content-center"
                        />
                    </div>
                </div>
            </div>
    );
}

export default SideBanner;