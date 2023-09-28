import React from 'react';
import "../PersonalInfo/profileInfo.css"


type IProps = {
    placeholder?: string;
    label?: string;
    children?:React.ReactNode;
}
const InvisibleInput = (props: IProps) => {
    return (
        <div >
            <div style={{

            }}>
                <label htmlFor="">{props.label}</label>
                {props.children}
                <input type="text" placeholder={props.placeholder} className="personal-input"/>
            </div>

        </div>
    );
};

export default InvisibleInput;