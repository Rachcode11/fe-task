import React from 'react';
import { DropdownItem } from "./dropdownlist";
import "./dropdown.css";

const Dropdown = ({ label }: any) => {
    return (
        <div className="dropdown">
            <div className="dropdown-btn">
                <div className="input-label" style={{
                    marginBottom: '1rem',
                }}>
                    {label}
                </div>
                <select className="select">
                    <option value="" disabled selected hidden
                    >
                       <p style={{color: "red"}}> Select any Option</p>
                    </option>
                    {DropdownItem.map((val, index) => (
                        <option key={index}>{val.name}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Dropdown;
