import React from 'react';
import "../../Task1/PersonalInfo/profileInfo.css"


const Input = ({label,placeholder}: any) => {
    return (
        <div className="input">
            <label className="input-label">{label}</label>
            <div className="input-case">
            <input type="text" placeholder={placeholder} className="nonVisibleInput"/>
            </div>

        </div>
    );
};

export default Input;