import React from "react";

function JSXExample()
{// varible declaration
  const topic="JSX";
  const description="JSX allows us to write html inside js";


  return(

    <div>
    <div className="hero">
      <p>{topic} is used in react.</p>
      </div>
      <div className="hero-content">
      <p>{description}</p>
      </div>
   </div>
    
  )
}
export default JSXExample;