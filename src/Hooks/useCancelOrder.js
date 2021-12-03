import {useMutation} from '@apollo/client';
import {cancelOrder} from '../GraphQL/Mutation';
import {getAcceptedOrder, getRequestOrder, getCanceledOrder} from '../GraphQL/Query';

function useCancelOrder(props) {
    const [
        CancelOrder,
        {loading: loadingCancel}
    ] = useMutation(cancelOrder, {refetchQueries:[getAcceptedOrder, getCanceledOrder, getRequestOrder]});
    return {CancelOrder, loadingCancel}
}

export default useCancelOrder;