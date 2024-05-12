import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./counter";
import SimpleCounter from "./counter";
//import ShowSeconds from "./counter";
//import { useEffect } from "react";


//create your first component
const Home = () => {
	return(
		<SimpleCounter seconds={3434} />
	)

	// const [seconds,setSeconds] = useState(0);
	// useEffect(()=>{
	// const timer = setInterval(() => { 
	// 		setSeconds(seconds + 1);
	// 		console.log(seconds);
	// 	}, 1000);
	// 	return () => clearInterval(timer)
	// }, [setSeconds, seconds]);
	
	// return (
	// 	<ShowSeconds seconds={seconds} />
	// );
};

export default Home;
