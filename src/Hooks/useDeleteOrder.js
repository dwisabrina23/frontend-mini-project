import {useMutation} from '@apollo/client';
import {deleteOrder} from '../GraphQL/Mutation';

function useDeleteOrder(props) {
    const [
        DeleteOrder,
        {loading: loadingDelete}
    ] = useMutation(deleteOrder);
    return {DeleteOrder, loadingDelete}
}

export default useDeleteOrder;