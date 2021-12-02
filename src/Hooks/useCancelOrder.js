import {useMutation} from '@apollo/client';
import {cancelOrder} from '../GraphQL/Mutation';

function useCancelOrder(props) {
    const [
        CancelOrder,
        {loading: loadingCancel}
    ] = useMutation(cancelOrder);
    return {CancelOrder, loadingCancel}
}

export default useCancelOrder;