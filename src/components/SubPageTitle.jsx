import React from 'react';

function SubPageTitle({title}) {
    console.log("isi title:", title)
    return (
        <div className="py-3">
            <h2 className="background">
                <span className="text-white text tittle">{title}</span>
            </h2>
        </div>
    );
}

export default SubPageTitle;