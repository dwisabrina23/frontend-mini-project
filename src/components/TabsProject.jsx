import React, {useState} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import TableProject from './TableProject';

function TabsProject(props) {
    const [key, setKey] = useState('main')

    return (
    <div className="m-3">
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
        <Tab eventKey="main" title="Request">
            <div className="container-fluid d-flext justify-content-between">
                <div className="text-left">
                    <h2>PROJECT REQUEST PAINTASTIC</h2>
                </div>
                {/* <button type="button float-end" className="btn btn-outline-info">
                Sort  <i className="fa fa-sort-amount-asc" aria-hidden="true"></i>
                </button> */}
            </div>
            <TableProject/>
        </Tab>
        <Tab eventKey="current" title="Current Project">
            <p>hi from profile</p>
        </Tab>
        <Tab eventKey="canceled" title="Canceled Project" disabled>
            <p>hi from Contact</p>
        </Tab>
    </Tabs>
    </div>
  );
}

export default TabsProject;
