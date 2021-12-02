import {useSubscription} from '@apollo/client';
import {subsOrderUser} from '../GraphQL/Subscription';

export default function useSubscribeOrder(id){
    const {
        data: dataSubs, 
        loading: loadingSubs
    } = useSubscription(subsOrderUser,
        {variables: {id}});
    return{dataSubs, loadingSubs};
}