//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/counter";


//render your react application
let seconds = 0;
let parar = false

function stop(){
    parar = true;
}

function reset(){
    seconds = 0;
}

function continue1(){
    parar = false
}

setInterval(() => { 
    ReactDOM.render(
        <>
            <SimpleCounter seconds={seconds} />
            <div className="container d-flex justify-content-between align-items-center bg-dark pb-4" style={{width: "25%"}}>
                <button className="btn btn-danger fw-semibold" onClick={stop} style={{width: "7.5rem"}}>Parar</button>
                <button className="btn btn-warning fw-semibold text-white" onClick={reset} style={{width: "7.5rem"}}>Reiniciar</button>
                <button className="btn btn-success fw-semibold" onClick={continue1} style={{width: "7.5rem"}}>Resumir</button>
            </div>
        </>
        , document.querySelector("#app")
    );
    if(parar == false){
        seconds++;
    }

}, 1000);
