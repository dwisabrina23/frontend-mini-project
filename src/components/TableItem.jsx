import React from 'react';
import './table.css';

function TableItem() {
    return (
            <tr className="table-data">
                <th scope="row">1</th>
                <td contenteditable="true">Mark</td>
                <td>Package Silver Modern Style</td>
                <td>Perumahan Cemara Giri Graha</td>
                <td>0890989098</td>
                <td>pending</td>
                <td>23 November 2021</td>
                <td>
                    <button type="button" className="btn btn-danger rounded-pill m-1"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    <button type="button" className="btn btn-success rounded-pill m-1">acc</button>
                    <button type="button" className="btn btn-secondary rounded-pill m-1"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                </td>
          </tr>
    );
}

export default TableItem;