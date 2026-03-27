import React from "react";


// props destructuring or drilling 
function EmployeeDetail({id,name,department,salary,education,experience,hobbies})
{
    return (
        <>
            <div className="app">
                <h1>id is : {id}</h1>
                <h3>name is : {name}</h3>
                <h4>department is : {department}</h4>
                <h5>salary is : {salary}</h5>
                <h6>education is : {education}</h6>
                <h6>experience is : {experience}</h6>
                <h6>hobbies are : {hobbies}</h6>
            </div>
        </>
    )
}

export default EmployeeDetail;