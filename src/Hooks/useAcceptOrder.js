import {useMutation} from '@apollo/client';
import {acceptOrder} from '../GraphQL/Mutation';

function useAcceptOrder() {
    const [
        AcceptOrder,
        {loading: loadingAccept}
    ] = useMutation(acceptOrder);
    return {AcceptOrder, loadingAccept}
}

export default useAcceptOrder;