import React from 'react';
import Button from '../Button';
import IconMedia from '../IconMedia';
import './contact.scss'
import Gap from '../../atoms/Gap';
import {instagram,youtube,github} from '../../assets'


const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <Button 
            title="E-mail"
            url="mailto:senikoding@gmail.com" />
            <Gap height={78} />
            <div className="icons">
                <IconMedia icon={instagram} url="https://instagram.com/fikri_batawi" />
                <Gap width={24} />
                <IconMedia icon={youtube} url="https://www.youtube.com/channel/UCJO0374h4mwnXTfwLcvNb8g" />
                <Gap width={24} />
                <IconMedia icon={github} url="https://github.com/fikri-batawi" />
            </div>
        </div>
    )
}

export default Contact
