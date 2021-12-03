import React from 'react';
import TableItem from './TableItem';
import './table.css';

function TableProject({data, accept, cancel, hapus}) {
  console.log(data)
  return (
    <div className="m-3" style={{overflowX:"scroll"}}>
      <table className="table" cellPadding="5px" style={{margin:"auto"}}>
        <thead style={{height:"25px"}}>
          <tr className="bg-green text-white py-3">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Package</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Notes</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.order?.map((item) =>
            <TableItem data={item} accept={accept} cancel={cancel} hapus={hapus} />
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default TableProject;
