import { createContext, useContext, useRef } from "react";

const CacheContext = createContext()

export function CacheProvider({children}){

    const cacheRef = useRef({})

    const getCacheKey = (type, param) => {
        if(type === "popular") return `popular_${param.page}`
        if(type === "search") return `search_${param.query}`
    };

    const getFromCache = (type, param) => {
        const key = getCacheKey(type, param)
        return cacheRef.current[key]
    };

    const setInCache = (type, param, data) => {
        const key = getCacheKey(type, param)
        cacheRef.current[key] = data
        console.log(cacheRef);
    };

    const deleteCache = () => {
        cacheRef.current = {}
    };

    const value = {
        getFromCache, setInCache, deleteCache
    }

    return (
        <CacheContext.Provider value={value}>
            {children}
        </CacheContext.Provider>
    )
}

export const useApiCache = () => useContext(CacheContext)