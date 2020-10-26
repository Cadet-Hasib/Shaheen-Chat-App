import React from 'react';
import './SidebarOption.css';

function SidebarOption({ text, Icon }) {
    return (
        <div className="SidebarOption">
            {Icon && <Icon />}

            <h3>{text}</h3>
        </div>
    )
}

export default SidebarOption
