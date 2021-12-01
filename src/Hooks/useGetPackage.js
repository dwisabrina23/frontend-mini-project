import {useQuery} from '@apollo/client';
import {getPackageData} from "../GraphQL/Query";

function useGetPackage() {
    const{
        data: dataPackage,
        loading: loadingPackage,
        error: errorPackage,
    } = useQuery(getPackageData, {fetchPolicy:"network-only"});
    return {dataPackage, loadingPackage, errorPackage};
}

export default useGetPackage;