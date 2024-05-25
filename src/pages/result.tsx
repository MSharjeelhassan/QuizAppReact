// import React from 'react'
import BAButton from "../component/BAButton";

const Result = (props:any) => {

    const{status,outof,percentage,number,className, clicking}=props;
  return (
    <>
      <div className={`container mt-5 pt-5 border shadow ${className} `}>
        <div className="row justify-content-center p-5">
            <div className='col-12.col-sm-12.col-md-6.col-lg-6 border rounded shadow text-center pt-5'>
                <div className=''>
                    <h5 className=''>Result</h5>
                    <p>Number: {number}</p>
                    <p>Out of: {outof}</p>
                    <p>Percentage: {percentage}%</p>
                    <p>{status}</p>
                    <BAButton btnValue = 'Restart' className='btn btn-success my-3' onClick={clicking}/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Result
