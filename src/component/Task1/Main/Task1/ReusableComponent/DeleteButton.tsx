import React from 'react';
import {CloseOutlined} from "@mui/icons-material";

const DeleteButton = () => {
    return (
        <div className="delete">
            <div className="delete-btn" style={{
                display: "flex",
                color: "red",
                marginBottom: "-21px"
            }}>
                <CloseOutlined className="icon" style={{
                    marginTop: "15px"
                }}/>
                <h3 style={{
                    marginLeft: "25px"
                }}>Delete question</h3>
            </div>

        </div>
    );
};

export default DeleteButton;