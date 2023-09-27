import React, { useState } from 'react';
import { userProfile } from "./userProfile";
import "./profileInfo.css"
import { Divider, Switch, Checkbox } from "antd";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import {AiOutlinePlus} from "react-icons/ai";
import OuterBox from "../ReusableComponent/OuterBox";
import InvisibleInput from "../ReusableComponent/InvisibleInput";

const PersonalInfo = ({open, onClose}: any) => {
    const [profileData, setProfileDate] = useState(userProfile);

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
                <div key={index} style={{
                    width: "415px"
                }} >
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "400px"
                    }}>
                       <InvisibleInput placeholder={val.name}/>
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
                                    <Switch checkedChildren unCheckedChildren />
                                    <p style={{ marginLeft: "1rem" }}>Hide</p>
                                </div>
                            </div>}
                        </div>
                    </div>
                    {index !== profileData.length - 1 && <Divider />}
                </div>
            ))}
        </div>
            </OuterBox>
        </div>
    );
};

export default PersonalInfo;
