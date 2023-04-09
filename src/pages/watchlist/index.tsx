import { useEffect, useMemo } from "react";
import WatchlistTableComponente from "../../components/watchlist-table";
import { deleteWatchlistElements } from '../../store/thunks/watchlist';
import { getTopPriceData } from "../../store/thunks/assets";
import { getWatchlistElements } from "../../store/thunks/watchlist";
import { useAppDispatch, useAppSelector } from "../../utils/hook";

const WatchListPage = () => {
    const dispatch = useAppDispatch()
    const watchlist = useAppSelector((state) => state.watchlist.assets)
    const { assets } = useAppSelector((state) => state.assets)

    

    const handleDeleteElement = (id: string) => {
        const findWatchlistElementId = watchlist.map((element: any) => {
            const isCurrentElement = element.assetId === id
            return isCurrentElement ? element.id : ''  
        })
        if (findWatchlistElementId) {
            let cuurentElement = findWatchlistElementId;
            for (let i = findWatchlistElementId.length - 1; i >= 0; i--) {
                if (typeof findWatchlistElementId[i] !== "number")
                findWatchlistElementId.splice(i, 1);
            }
            
            dispatch(deleteWatchlistElements(Number(cuurentElement)))
        }  
    }

    useEffect(() => {
        dispatch(getWatchlistElements())
        dispatch(getTopPriceData())
    },[dispatch])

    const filterdAsset = assets.filter((element: any) => {
        return watchlist.some((otherElement: any) => otherElement.assetId === element.id)
        
    })
    
    return (
        <WatchlistTableComponente data={filterdAsset} handleClick={(id: string) => handleDeleteElement(id)}/>
    );
};

export default WatchListPage;