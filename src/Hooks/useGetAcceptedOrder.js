import {useQuery} from '@apollo/client';
import {getAcceptedOrder} from "../GraphQL/Query";

function useGetAcceptedOrder() {
    const{
        data: dataAccepted,
        loading: loadingAccepted,
        error: errorAccepted,
    } = useQuery(getAcceptedOrder, {fetchPolicy:"network-only"});
    return {dataAccepted, loadingAccepted, errorAccepted};
}

export default useGetAcceptedOrder;