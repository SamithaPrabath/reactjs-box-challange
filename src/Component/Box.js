import React from "react";
import './BorderStyles.css';


export default function Box(props){
    const styles={
        backgroundColor:props.on?"black":"transparent"
    }
    
    return(
        <div 
            style={styles} 
            className="box" 
            onClick={props.mouseClick}> 
        </div>
    )
}