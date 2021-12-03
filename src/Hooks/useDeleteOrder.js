import {useMutation} from '@apollo/client';
import {deleteOrder} from '../GraphQL/Mutation';
import {getAcceptedOrder, getRequestOrder, getCanceledOrder} from '../GraphQL/Query'

function useDeleteOrder(props) {
    const [
        DeleteOrder,
        {loading: loadingDelete}
    ] = useMutation(deleteOrder, {refetchQueries:[getAcceptedOrder, getRequestOrder, getCanceledOrder]});
    return {DeleteOrder, loadingDelete}
}

export default useDeleteOrder;