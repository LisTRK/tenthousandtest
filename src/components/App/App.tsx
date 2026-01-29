
import { useState } from "react";
import {  searchProducts } from "../../api/api";
import ProductsList from "../ProductsList/ProductsList";
import SearchBar from "../SearchBar/SearcchBar";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import { Toaster } from 'react-hot-toast';
import Pagination from "../Pagination/Pagination";
import LimitPicker from "../LimitPicker/LimitPicker";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10)
    

    const getFetchSearch = async (query: string, page: number, limit: number) => {
              
        const responce = await searchProducts(query, page, limit);
            return responce;
    };
    
    const {isError, isLoading, data, isFetching, isSuccess } = useQuery({
        queryKey: ['product', query, page, limit],
        queryFn: () => getFetchSearch(query, page, limit),
        placeholderData: keepPreviousData
    });
    
    
    const handleLimitChange = (newLimit: number) => {
        setLimit(newLimit);
        setPage(1);
    };

     const handleSearchSubmit = async (query: string) => {
        setQuery(query);
        setPage(1);
    }
    
    
    return <>
    <SearchBar onSubmit={handleSearchSubmit} />
    {isSuccess && data.total > 1 &&
        <Pagination
        page={page}
        totalPages={Math.ceil(data.total/limit)}
        setPage={setPage}
     />}
     <LimitPicker limit={limit} onChange={handleLimitChange} />

    {(isLoading || isFetching) && <Loader loading = {isFetching}/>}
    {data?.products && <ProductsList products={data.products} />}
    <Toaster />
    {data?.total === 0 && <p>Enter a search query</p>}
    {isError && <ErrorMessage />}
    </>
    
};

export default App;