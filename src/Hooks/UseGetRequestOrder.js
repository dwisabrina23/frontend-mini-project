import {useQuery} from '@apollo/client';
import {getRequestOrder} from "../GraphQL/Query";

function UseGetRequestOrder() {
    const{
        data: dataRequest,
        loading: loadiingRequest,
        error: errorRequest,
    } = useQuery(getRequestOrder, {fetchPolicy:"cache-and-network"});
    return {
        dataRequest, loadiingRequest, errorRequest
    };
}

export default UseGetRequestOrder;