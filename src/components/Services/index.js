import React from 'react';
import Gap from '../../atoms/Gap';
import CardService from '../CardService';
import './service.scss';
import { iconService1, iconService2, iconService3 } from '../../assets';

const Services = () => {
    return (
        <div className="service-container">
            <h2>What Can I Do</h2>
            <div className="service-items">
                <CardService
                    image={iconService1}
                    title="Make Design"
                    subtitle="We make designs interesting accordingly client needs" />
                <Gap width={120} />
                <CardService
                    image={iconService2}
                    title="Design to Code"
                    subtitle="We create clean code with pre-made designs" />
                <Gap width={120} />
                <CardService
                    image={iconService3}
                    title="Dynamic Apps"
                    subtitle="We create dynamic applications according to the latest data" />
            </div>
        </div>
    )
}

export default Services
