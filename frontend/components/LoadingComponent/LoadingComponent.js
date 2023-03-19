import React, { useEffect } from 'react'


const LoadingComponent = () => {

    useEffect(() => {
    
    }, [])
    
  return (
   <>
    <div class="container">
	<span class="spinner spinner--quarter"> </span>
	<span class="spinner spinner--dotted"></span>
	<span class="spinner spinner--hourglass"></span>
    </div>
    <div className='container2'>
      <span>Checking Loan Eligibility..</span>
      <span>ML Model Running</span>
      <span>Producing Results</span>
    </div>
   </>
  )
}

export default LoadingComponent