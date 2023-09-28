import React from 'react';
import "../PersonalInfo/profileInfo.css"
import {AiOutlinePlus} from "react-icons/ai";

type IProps = {
    children?: React.ReactNode;
    text?:  string;
}


const OuterBox = (props: IProps) => {


    return (
        <div>
            <div className="person_container">
                <div className="container">
                    {props.text}
                </div>
                <div className="input-contain">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default OuterBox;
