import React, {useState} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import TableProject from './TableProject';

function TabsProject({dataReq, dataAcc, dataCancel, accept, cancel, hapus}) {
    console.log("dataReq:", dataReq);
    console.log("dataAcc:", dataAcc);
    console.log("hapus:", hapus);

    //state tabs nav
    const [key, setKey] = useState('main')
    
    return (
    <div className="m-3 mt-5">
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
        <Tab eventKey="main" title="Request">
            <div className="container-fluid d-flext justify-content-between">
                <div className="text-left">
                    <h2>REQUESTED ORDER PAINTASTIC</h2>
                </div>
            </div>
            <TableProject data={dataReq} accept={accept} cancel={cancel} hapus={hapus}/>
        </Tab>
        <Tab eventKey="current" title="Current Project">
            <div className="container-fluid d-flext justify-content-between">
                <div className="text-left">
                    <h2>ACCEPTED PROJECT PAINTASTIC</h2>
                </div>
            </div>
            <TableProject data={dataAcc} accept={accept} cancel={cancel} hapus={hapus}/>
        </Tab>
        <Tab eventKey="canceled" title="Canceled Project">
        <div className="container-fluid d-flext justify-content-between">
                <div className="text-left">
                    <h2>PROJECT REQUEST PAINTASTIC</h2>
                </div>
            </div>
            <TableProject data={dataCancel} accept={accept} cancel={cancel} hapus={hapus}/>
        </Tab>
    </Tabs>
    </div>
  );
}

export default TabsProject;

// <button type="button float-end" className="btn btn-outline-info">
// Sort  <i className="fa fa-sort-amount-asc" aria-hidden="true"></i>
// </button>

