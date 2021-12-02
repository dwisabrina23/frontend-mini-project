import {useMutation} from '@apollo/client';
import {insertOrder} from '../GraphQL/Mutation';

function useCreateOrder() {
    const [
        createOrder,
        {loading: loadingCreate}
    ] = useMutation(insertOrder);
    return {createOrder, loadingCreate}
}

export default useCreateOrder;