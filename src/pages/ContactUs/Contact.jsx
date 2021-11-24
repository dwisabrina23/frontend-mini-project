import React from 'react';
import Form from '../../components/Form';
import SideBanner from '../../components/SideBanner';
import '../index.css';
function Contact() {
    return (
        <div>
            <h2 className="text-page-title text-center">CONTACT US</h2>
           <div className="row">
                <SideBanner/>
                <div className="col-lg col-md col-sm px-4 mb-3">
                    <Form/>
                </div>
            </div> 
        </div>
    );
}

export default Contact;