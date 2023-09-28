import React from 'react';
import OuterBox from "../ReusableComponent/OuterBox";
import InvisibleInput from "../ReusableComponent/InvisibleInput";
import {BsPencil} from "react-icons/bs";
import {Divider} from "antd";
import Input from "../ReusableComponent/Input";
import {AiOutlineBars} from "react-icons/ai";
import {BiPlus} from "react-icons/bi";
import {CloseOutlined} from "@mui/icons-material";
import AddQuest from "../ReusableComponent/AddQuest";

const AdditionalQuest = () => {
    return (
        <div>
            <>
                <OuterBox text="Additional Question">
                    <div>
                        <p>Paragraph</p>
                        <div>

                            <InvisibleInput placeholder="Please Tell Me About Your Self In Than 500 Word"/>
                            <div>
                                <BsPencil style={{
                                    width: "19%",
                                    position: "relative",
                                    marginLeft: "20rem",
                                    bottom: "21px",
                                }}/>
                            </div>
                            <Divider/>
                        </div>

                        <div>
                            <p>Dropdown</p>
                            <div>

                                <InvisibleInput placeholder="Please select the year of graduation from the list below"/>
                                <div>
                                    <BsPencil style={{
                                        width: "19%",
                                        position: "relative",
                                        marginLeft: "22rem",
                                        bottom: "21px",
                                    }}/>
                                </div>
                                <Input placeholder="Type here ..."/>
                            </div>
                            <div>
                                <label ><h2>Choice</h2></label>
                                <AiOutlineBars/>
                                <input type="text" style={{
                                    width: "70%",
                                    height: "5vh",
                                    marginLeft: "10px",
                                }} placeholder="Type here ..."/>
                                <BiPlus style={{
                                    marginLeft: "12px",
                                    fontSize: "21px",
                                }}/>
                            </div>
                            <div className="footer">
                                <div className="close">
                                    <CloseOutlined className="icon" />
                                    <h4>Delete & reload</h4>
                                </div>
                                <button className="btn">Save</button>
                            </div>

                            <Divider/>
                                <p>Yes/No</p>
                                <div>

                                    <InvisibleInput placeholder="Have you ever been rejected by the UK embassy?"/>
                                    <div>
                                        <BsPencil style={{
                                            width: "19%",
                                            position: "relative",
                                            marginLeft: "20rem",
                                            bottom: "21px",
                                        }}/>
                                    </div>
                                </div>
                        </div>
                        <AddQuest/>

                    </div>
                </OuterBox>
            </>

        </div>
    );
};

export default AdditionalQuest;