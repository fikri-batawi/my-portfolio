import React from 'react';
import './data.scss';
import profile from '../../assets/images/my-profile.png';
import DataTable from '../DataTable';
import Gap from '../../atoms/Gap';
import Button from '../Button';

const Data = () => {
    return (
        <>
            <div className="data-container">
                <div className="data-image" data-aos="flip-left" data-aos-duration="1500">
                    <img src={profile} alt="..." />
                </div>
                <div className="data-content" data-aos="fade-left" data-aos-duration="1500">
                    <h4 className="data-title">I’m a Website & Mobile Developer</h4>
                    <p className="data-subtitle">I'm passionate about creating engaging apps, experiences and I want to use technology to help make people's lives more fulfilling. </p>
                    <Gap height={16} />
                    <DataTable/>
                    <Gap height={36} />
                    <Button 
                        url="https://drive.google.com/file/d/1iNPK6BoNOzUXzMRHITml3tf0Z9jDC9is/view?usp=sharing" 
                        title="Download CV"/>
                </div>
            </div>
        </>
    )
}

export default Data
