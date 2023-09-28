import React from 'react';
import OuterBox from "../ReusableComponent/OuterBox";
import InvisibleInput from "../ReusableComponent/InvisibleInput";
import {Checkbox, Divider, Switch} from "antd";
import "../PersonalInfo/profileInfo.css"
import AddQuest from "../ReusableComponent/AddQuest";

const Profile = () => {
    return (
        <div>
            <OuterBox text="Profile">
                <div>
                    <div>
                        <div className="profile">
                            <InvisibleInput label="Education"/>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <Checkbox>Mandatory</Checkbox>
                                <div style={{
                                    display: "flex"
                                }}>
                                    <Switch checkedChildren unCheckedChildren/>
                                    <p style={{marginLeft: "9px", marginTop: "1px"}}>Hide</p>
                                </div>
                            </div>
                        </div>
                            <Divider/>
                    </div>
                    <div>
                        <div className="profile">
                            <InvisibleInput label="Experience"/>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <Checkbox style={{
                                    marginTop : "20px"
                                }}>Mandatory</Checkbox>
                                <div style={{
                                    display: "flex"
                                }}>
                                    <Switch checkedChildren unCheckedChildren/>
                                    <p style={{marginLeft: "9px", marginTop: "1px"}}>Hide</p>
                                </div>
                            </div>
                        </div>
                        <Divider/>
                    </div>
                    <div>
                        <div className="profile">
                            <InvisibleInput label="Resume"/>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <Checkbox>Mandatory</Checkbox>
                                <div style={{
                                    display: "flex"
                                }}>
                                    <Switch checkedChildren unCheckedChildren/>
                                    <p style={{marginLeft: "9px", marginTop: "1px"}}>Hide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AddQuest/>
                </OuterBox>

        </div>
    );
};

export default Profile;