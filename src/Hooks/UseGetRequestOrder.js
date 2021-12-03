import {useQuery} from '@apollo/client';
import {getRequestOrder} from "../GraphQL/Query";

function UseGetRequestOrder() {
    const{
        data: dataRequest,
        loading: loadiingRequest,
        error: errorRequest,
    } = useQuery(getRequestOrder, {fetchPolicy:"network-only"});
    return {
        dataRequest, loadiingRequest, errorRequest
    };
}

export default UseGetRequestOrder;