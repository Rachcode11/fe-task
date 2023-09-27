import React, { useState } from 'react';
import './uploadAndDisplayImage.css';
import { AiOutlineUpload } from 'react-icons/ai';
import {CloseOutlined} from "@mui/icons-material";

const UploadAndDisplayImage = () => {
    const [image, setImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState('No selected file');

    const handleClick = (): void => {
        const inputField = document.querySelector('.input-field') as HTMLElement | null;
        if (inputField) {
            inputField.click();
        }
    };

    return (
        <div className="main_container">

            <>
                {image ? <div>

                    <img src={image} width={400} height={200} alt={fileName} className="image" />
                    <div className="close">
                        <CloseOutlined className="icon"/>
                        <h4>Delete & reload</h4>
                    </div>
                </div> : <>
                    <div className="cover_contain">

                        <h3>Upload Cover Image</h3>
                    </div>
                    <div className="form_contain">
                        <form action="" onClick={handleClick}>
                            <input
                                type="file"
                                accept="image/*"
                                className="input-field"
                                hidden
                                onChange={({ target: { files } }) => {
                                    if (files && files[0]) {
                                        setFileName(files[0].name);
                                        setImage(URL.createObjectURL(files[0]));
                                    }
                                }}
                            />



                                <div>
                                    <div style={{
                                        textAlign: "center"
                                    }}>

                                        <AiOutlineUpload  size={60} />
                                        <h3>Upload Cover Image</h3>
                                    </div>
                                    <p>16:9 ratio is recommended. Max image size 1mb</p>
                                </div>
                        </form>
                    </div>
                </>}
            </>
                   </div>
    );
};

export default UploadAndDisplayImage;
