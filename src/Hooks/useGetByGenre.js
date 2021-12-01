import {useQuery} from '@apollo/client';
import {getByGenreData} from "../GraphQL/Query";

function useGetByGenre() {
    const{
        data: dataGenre,
        loading: loadingGenre,
        error: errorGenre,
    } = useQuery(getByGenreData, {fetchPolicy:"network-only"});
    return {dataGenre, loadingGenre, errorGenre};
}

export default useGetByGenre;