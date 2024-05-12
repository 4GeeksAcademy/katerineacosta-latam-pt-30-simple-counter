import React from "react";

function SimpleCounter(props){
    let numStr = props.seconds.toString();  
    numStr = numStr.padStart(6, "0");
    numStr = numStr.split('');

    return (<>
        <div className="container d-flex justify-content-around align-items-center bg-dark text-white" style={{width: "25%",
        height: "15vh", fontSize: "2rem"}}>
            <span className="border p-3"><i className="far fa-clock"></i></span>
            <span className="border p-3">{numStr[0]}</span>
            <span className="border p-3">{numStr[1]}</span>
            <span className="border p-3">{numStr[2]}</span>
            <span className="border p-3">{numStr[3]}</span>
            <span className="border p-3">{numStr[4]}</span>
            <span className="border p-3">{numStr[5]}</span>
        </div>
    </>)
}

export default SimpleCounter;