import React from "react";
import ReactDOM from "react-dom/client";

// react Element

const elem =<span> React Eelemt </span>

const title= (
    <h1 className ="head" tableIndex ="5">  
    {elem}
    React by Nilesh title example
    </h1>
    );


// Tital component
const Title =() =>(
<h1 className ="head" tableIndex ="5">  
React by Nilesh component injwction
</h1>
);

//React functional Component

// class based components old will learn later not required for new devlopment
//functional component -new


//component composition

const number =1000;

const HeadingComponent= ()=>(
    <div id ="container">
        <h2>{number}</h2>
        {title}
         {/* this way can put another componet   */}
        <Title />
        <Title></Title>
        {Title()}
     <h1 className="heading"> Nilesh react functional component</h1>
     </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(<HeadingComponent/>)