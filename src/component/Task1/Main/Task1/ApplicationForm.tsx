import React from 'react';
import UploadAndDisplayImage from "./Upload/UploadAndDisplayImage";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Profile from "./Profile/Profile";
import AdditionalQuest from "./AdditionalQuest/AdditionalQuest";

const ApplicationForm = () => {
    return (
        <div>
            <UploadAndDisplayImage/>
            <PersonalInfo/>
            <Profile/>
            <AdditionalQuest/>
        </div>
    );
};

export default ApplicationForm;