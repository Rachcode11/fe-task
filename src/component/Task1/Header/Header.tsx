import React, { useState } from 'react';
import { Divider } from 'antd';
import './Header.css';
import ApplicationForm from "../Main/Task1/ApplicationForm";


const Header = () => {
    const [activeTab, setActiveTab] = useState('Program Details');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const tabData = ['Program Details', 'Application Form', 'Workflow', 'Preview'];

    return (
        <div>
            <div className=" main">
                <div className="header_container">
                    {tabData.map((tab, index) => (
                        <div key={index} className="headerTab_container" onClick={() => handleTabClick(tab)}>
                            <div className={`${activeTab === tab ? 'activeTab' : ''} headerTab_content`}>
                                <span>{tab}</span>
                            </div>
                            {index < tabData.length - 1 && <Divider type="vertical" className="divide" />}
                        </div>
                    ))}
                </div>
            </div>

            {activeTab === 'Application Form' && <ApplicationForm />}
        </div>
    );
};

export default Header;
