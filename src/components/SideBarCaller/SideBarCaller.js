import React, { useState } from 'react';
import * as styled from './SideBarCallerStyles';
import SideBar from '../SideBar/SideBar';

const SideBarCaller = () => {
    const [IsChecked, setChecked] = useState(false);
    const checkedTrueFalse = () => setChecked(!IsChecked);

    return (
        <div>
            <styled.SideBarCallerHolder id="menuToggle" onClick={checkedTrueFalse}>
                <input type="checkbox" className="input"/>
                <span></span>
                <span></span>
                <span></span>
            </styled.SideBarCallerHolder>
            <SideBar IsChecked={IsChecked}/>
        </div>
    )  
}

export default SideBarCaller;