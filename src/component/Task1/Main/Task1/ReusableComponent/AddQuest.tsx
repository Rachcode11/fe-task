import React from 'react';
import {AiOutlinePlus} from "react-icons/ai";

const AddQuest = ({ onClose}: any) => {
    return (
        <div>
            <div style={{
                display: "flex"
            }}>
                <div className="plus" style={{
                    marginTop: "9px",
                    fontSize: "2rem",
                    color: "black",
                    cursor: "pointer"
                }} onClick={()=> onClose(true)} >
                    <AiOutlinePlus  />
                </div>
                <p style={{
                    marginLeft: "2rem",
                    fontFamily: "Roboto, san-serif",
                    fontSize: "1rem"
                }}>Add a questions</p>
            </div>

        </div>
    );
};

export default AddQuest;