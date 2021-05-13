import React from 'react'

function Result({numbers}) {
    return (
        <div className="bg-primary text-white d-flex flex-wrap"  style={{height: "600px"}}>
            { 
                numbers.map( (Number, key) =>(
                    <div className="col-1 mh-25  mt-1 " key={key}>
                        <li>N°{key+1}:  {Number}</li>
                    </div>
                ))
            }
        </div>
    )
}

export default Result
