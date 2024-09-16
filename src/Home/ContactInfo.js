import React from 'react';
import { Link } from 'react-router-dom';

const ContactInfo = () => (
    <div className="contact-data">
    <div className="container">
        <div className="item">
        <p className="bold phone">Takata Recall Hotline</p>
        <p>If your vehicle has been affected by the Takata airbag recall, call us to schedule your free repair.</p>
        <p className="phone">1-877-496-3691</p>
        </div>

        <div className="item phone">
        <p className="bold">Roadside Assistance</p>
        <p>In the event of an emergency, get immediate assistance 24 hours a day, 7 days a week.</p>
        <p className="phone">1-800-367-6372</p>
        <p className="phone">1-800-222-0100</p>
        </div>

        <div className="item">
        <p className="bold phone">Mercedes-Benz Financial Services</p>
        <p>Speak to a MBFS representative, available Mon-Fri, 9 am - 9 pm or Sat 9 am -5 pm (ET).</p>
        <p className="phone">1-800-654-6222</p>
        </div>
    </div>

    <div className="container">
        <div className="item">
        <p className="bold phone">Connected Car Services</p>
        <p>For setup and assistance with connected vehicle services, contact our Customer Assistance Center.</p>
        <p className="phone">1-800-367-6372</p>
        <p className="phone">1-800-222-0100</p>
        </div>

        <div className="item">
        <p className="bold phone">Customer Care</p>
        <p>For general assistance with your vehicle or account, contact us Mon-Fri, 9 am - 9 pm (ET).</p>
        <p className="phone">1-800-367-6372</p>
        <p className="phone">1-800-222-0100</p>
        </div>

        <div className="item">
        <p className="bold phone">Email Us</p>
        <p>Prefer email instead? Send us a message and we’ll respond within 24 hours.</p>
        <Link to="/email" className="phone">Email Us</Link>
        </div>
    </div>
    </div>
);

export default ContactInfo;
