import React from 'react';
import GridMenu from './GridMenu';
import ServiceData from '../Models/ServiceData';
function ServiceGrid({componentTitle}) {
    return (
        <div>
            <h2 className="text-center mt-3">{componentTitle}</h2>
            <div className="row m-3">
                {ServiceData.map((item, id) => (
                    <GridMenu
                        key = {id}
                        photo = {item.photo}
                        title = {item.title}
                        content = {item.content}
                    />
                ))}
            </div>
        </div>
    );
}

export default ServiceGrid;