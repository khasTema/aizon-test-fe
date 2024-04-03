import { useEffect, useState } from 'react';
import { tabsData } from '../data';
import { TabsData } from '../types';

export const useFetchedTabs = () => {
    const [data, setData] = useState<TabsData[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(()=> {
            try {
                setIsLoading(false)
                setData(tabsData)
            } catch(error) {
                console.error(error)
                setIsLoading(false)
            }
        }, 3000)
    },[])
    
    return { data, isLoading}
}

