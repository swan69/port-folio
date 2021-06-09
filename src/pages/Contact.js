import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';

const Contact = () => {
    return (
        <main>
            <div className="contact">
                <Navigation />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>69001 Lyon</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard text="0621218667" className="hover">
                                <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {alert("Téléphone copié !");}}
                                >06 21 21 86 67</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <CopyToClipboard text="swan.marin@gmail.com" className="hover">
                            <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {alert("Mail copié !");}}
                            >swan.marin@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="linkedin"><SocialNetwork /></div>
                    <div className="credits">
                        <p>Copyright © 2021</p>
                    </div>
                </div>
                <ButtonsBottom left={'/project-2'} />
            </div>
        </main>
    );
};

export default Contact;