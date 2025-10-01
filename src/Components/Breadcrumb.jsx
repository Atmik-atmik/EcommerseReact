import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const location = useLocation();
    console.log(location);
    const breadcrumb = location.pathname.split("/").filter(Boolean) ;
    // Above pathname gives string hence conververting it into array by split and boolean will give values which are true. Like in array first element is false hence it won't include this in array
    console.log(breadcrumb)
  return (
    <div>
      <div className='breadcrum'>
        <Link to = "/">Home</Link>
        {breadcrumb.map((curValue,index)=>{
            const isLast = index === breadcrumb.length-1;
            return isLast? (<span className='current-page'>/ {curValue}</span> ):<span><Link to={`/${curValue}`} >/ {curValue}</Link></span>
        })}
      </div>
    </div>
  )
}

export default Breadcrumb
