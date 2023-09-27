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
                    <div style={{
                        display: "flex"
                    }}>
                        <div className="plus" style={{
                            marginTop: "9px",
                            fontSize: "2rem",
                            color: "black",
                            cursor: "pointer"
                        }} >
                            <AiOutlinePlus  />
                        </div>
                        <p style={{
                            marginLeft: "2rem",
                            fontFamily: "Roboto, san-serif",
                            fontSize: "1rem"
                        }}>Add a questions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OuterBox;
