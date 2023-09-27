import React from 'react';
import "../PersonalInfo/profileInfo.css"


type IProps = {
    placeholder?: string;
    label?: string;
}
const InvisibleInput = (props: IProps) => {
    return (
        <div>
            <div >
                <label htmlFor="">{props.label}</label>
                <input type="text" placeholder={props.placeholder} className="personal-input"/>
            </div>

        </div>
    );
};

export default InvisibleInput;