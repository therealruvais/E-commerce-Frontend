import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumb = ({title}) => {
  return (
    <div className="breadcrumb py-5 w-full ">
      <div className="px-8">
          <center>
            <Link to="/">Home /</Link> {title}
          </center>
      </div>
    </div>
  );
}

export default BreadCrumb