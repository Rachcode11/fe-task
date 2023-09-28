import React from 'react';
import Modal from '../Task1/ReusableComponent/Modal/Modal';
import Dropdown from "./ReusableComponent/Dropdown/Dropdown";
import Input from "./ReusableComponent/Input";

interface QuestionIprops {
    show: boolean;
    onCloseModal: () => void;
}

const Question: React.FC<QuestionIprops> = ({ show, onCloseModal }) => {
    return (
        <div>
            <Modal isOpen={show} onClose={onCloseModal} label="Question">
                <div><Dropdown label="Type"/></div>
                <div><Input label="Question" placeholder="Type Here ..."/></div>
            </Modal>
        </div>
    );
};

export default Question;
