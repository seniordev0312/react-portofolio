import React from "react";

import PersonalData from "../../Data/PersonalData";
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./footer.css";
import { useSelector } from "react-redux";

function Footer(){
    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    let currentYear=new Date().getFullYear();
    return(
        <footer className="centered" style={{color:nonThemeColor}}>
            <CopyrightIcon/>
            &nbsp;{currentYear}
            &nbsp;Coded By&nbsp; {PersonalData.firstName}&nbsp;{PersonalData.lastName}
        </footer>
    )
}
export default Footer;