import {useQuery} from '@apollo/client';
import {getTestimoni} from "../GraphQL/Query";

function useGetTestimoni() {
    const{
        data: dataTestimoni,
        loading: loadingTestimoni,
        error: errorTestimoni,
    } = useQuery(getTestimoni, {fetchPolicy:"network-only"});
    return {dataTestimoni, loadingTestimoni, errorTestimoni};
}

export default useGetTestimoni;