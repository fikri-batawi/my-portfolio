import React from 'react';
import Button from '../Button';
import IconMedia from '../IconMedia';
import './contact.scss'
import Gap from '../../atoms/Gap';
import {instagram,youtube,twitter,github} from '../../assets'


const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <Button title="E-mail" />
            <Gap height={78} />
            <div className="icons">
                <IconMedia icon={instagram} url="https://instagram.com/fikri_batawi" />
                <Gap width={24} />
                <IconMedia icon={twitter} url="#" />
                <Gap width={24} />
                <IconMedia icon={youtube} url="#" />
                <Gap width={24} />
                <IconMedia icon={github} url="https://github.com/fikri-batawi" />
            </div>
        </div>
    )
}

export default Contact
