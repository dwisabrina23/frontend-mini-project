import {useMutation} from '@apollo/client';
import {acceptOrder} from '../GraphQL/Mutation';
import {getAcceptedOrder, getRequestOrder, getCanceledOrder} from '../GraphQL/Query'

function useAcceptOrder() {
    const [
        AcceptOrder,
        {loading: loadingAccept}
    ] = useMutation(acceptOrder, {refetchQueries:[getAcceptedOrder, getRequestOrder, getCanceledOrder]});
    return {AcceptOrder, loadingAccept}
}

export default useAcceptOrder;