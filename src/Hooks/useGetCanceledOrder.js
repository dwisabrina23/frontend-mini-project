import {useQuery} from '@apollo/client';
import {getCanceledOrder} from "../GraphQL/Query";

function UseGetCanceledOrder() {
    const{
        data: dataCanceled,
        loading: loadingCanceled,
        error: errorCanceled,
    } = useQuery(getCanceledOrder, {fetchPolicy:"network-only"});
    return {dataCanceled, loadingCanceled, errorCanceled};
}

export default UseGetCanceledOrder;