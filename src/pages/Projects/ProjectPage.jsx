import React, {useState, useEffect} from 'react';
import TabsProject from '../../components/TabsProject';
import UseGetRequestOrder from '../../Hooks/UseGetRequestOrder';
import UseGetAcceptedOrder from'../../Hooks/UseGetAcceptedOrder';
import UseGetCanceledOrder from '../../Hooks/UseGetCanceledOrder';
import SubPageTitle from '../../components/SubPageTitle';
import useCancelOrder from '../../Hooks/useCancelOrder';
import useAcceptOrder from '../../Hooks/useAcceptOrder';
import useDeleteOrder from '../../Hooks/useDeleteOrder';

function ProjectPage() {
    //state
    const [reqData, setReqData] = useState([]);
    const [accData, setAccData] = useState([]);
    const [cancelData, setCancelData] = useState([]);

    //graphql
    const {dataRequest, loadiingRequest, errorRequest} = UseGetRequestOrder();
    const {dataAccepted, loadingAccepted, errorAccepted} = UseGetAcceptedOrder();
    const {dataCanceled, loadingCanceled, errorCanceled} = UseGetCanceledOrder();

    //update status
    const {CancelOrder, loadingCancel} = useCancelOrder();
    const {AcceptOrder, loadingAccept} = useAcceptOrder();

    //delete
    const {DeleteOrder, loadingDelete} = useDeleteOrder();

    useEffect(() => {
        if(dataRequest && dataAccepted && dataCanceled){
          setReqData(dataRequest);
          setAccData(dataAccepted);
          setCancelData(dataCanceled);
        }
        if(errorAccepted || errorCanceled || errorRequest){
            console.log("error acc:", errorAccepted)
            console.log("error cancel:", errorCanceled)
            console.log("error req:", errorRequest)
        }
    }, [dataRequest, dataAccepted, dataCanceled, errorAccepted, errorCanceled, errorRequest])
    
    //event handling
    const acceptOrder = (id) => {
        AcceptOrder({
            variables:{
                id: id,
            }
        })
    }

    const cancelOrder = (id) => {
        CancelOrder({
            variables:{
                id: id,
            }
        })
    }

    const deleteOrder = (id) => {
        DeleteOrder({
            variables:{
                id:id
            }
        }
        )
    }

    return (
        <div>
            <SubPageTitle title="Project"/>
            {loadiingRequest || loadingAccepted || loadingCanceled ? (
                <p className="text-center">loading..</p>
            ):null}
            <TabsProject
                dataReq={reqData}
                dataAcc={accData}
                dataCancel={cancelData}
                accept={acceptOrder}
                cancel={cancelOrder}
                hapus = {deleteOrder}
            />
        </div>
    );
}

export default ProjectPage;