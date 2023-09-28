import React, {useEffect, useState} from 'react';
import { userProfile } from "./userProfile";
import "./profileInfo.css"
import { Divider, Switch, Checkbox } from "antd";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import OuterBox from "../ReusableComponent/OuterBox";
import InvisibleInput from "../ReusableComponent/InvisibleInput";
import AddQuest from "../ReusableComponent/AddQuest";
import Question from "../Question";

const PersonalInfo = ({open, onClose}: any) => {
    const [profileData, setProfileDate] = useState(userProfile);
    const [openModal, setOpenModal] = useState(false)
    const [success, openSuccess] = useState(false)
    const closeModal = (e: any) => {
        setOpenModal(false);
        if (e) {
            openSuccess(true);
        }
    }
    useEffect(()=>{
        getRequest();

    },[])


    const getRequest = async () => {
        try {
            const url = "http://127.0.0.1:4010/api/902.2330733792203/programs/df293244-bfbc-614a-f15a-03fb97405e04/application-form";
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const response = await fetch(url, requestOptions);

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }

            const data = await response.json();
            console.log('Data:', data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    getRequest();


    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div>
            <OuterBox text="Personal Information">
        <div style={{
            width: "62%"
        }}>
            {profileData.map((val, index) => (
                <div key={index}  >
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "400px"
                    }}>
                       <InvisibleInput placeholder={val.name} />
                        <div className="show">
                            {val.showInternal && <div style={{ marginRight: "8px" }}>
                                <Checkbox onChange={onChange}>
                                    <p>Internal</p>
                                </Checkbox>
                            </div>}
                            {val.showHide && <div className="hide">
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}>
                                    <Switch checkedChildren unCheckedChildren checked={true}/>
                                    <p style={{ marginLeft: "1rem" }}>Hide</p>
                                </div>
                            </div>}
                        </div>
                    </div>
                    {index !== profileData.length - 1 && <Divider />}
                </div>
            ))}
            <AddQuest onClose={closeModal} />
            <Question show={success} onCloseModal={()=> openSuccess(false)} />
        </div>
            </OuterBox>
        </div>
    );
};

export default PersonalInfo;
