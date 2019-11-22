import React from 'react'

const CompanyInfo = (props) => {
    return (
    <div className="mt-2">
    <img src={props.description.data['profile']['image']}></img>    
    <h5>Company: {props.description.data['profile']['companyName']}</h5>
    </div>
    )    
}

export default CompanyInfo;
