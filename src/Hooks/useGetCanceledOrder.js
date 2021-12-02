import {useQuery} from '@apollo/client';
import {getCanceledOrder} from "../GraphQL/Query";

function useGetCanceledOrder() {
    const{
        data: dataCanceled,
        loading: loadingCanceled,
        error: errorCanceled,
    } = useQuery(getCanceledOrder, {fetchPolicy:"network-only"});
    return {dataCanceled, loadingCanceled, errorCanceled};
}

export default useGetCanceledOrder;