import React from 'react';
import './subTitle.css';
function SubPageTitle({title}) {
    console.log("isi title:", title)
    return (
        <h2 className="background-hr">
            <span className="text-title text-white">{title}</span>
        </h2>
    );
}

export default SubPageTitle;