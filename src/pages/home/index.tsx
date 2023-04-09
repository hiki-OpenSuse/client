import { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getFavoriteAssets, getTopPriceData } from '../../store/thunks/assets';
import { Box, Grid } from '@mui/material';
import { useStyles } from './style';
import AreaChartComponent from '../../components/charts/area-chart';
import TrendUp from '../../assets/images/trend-up.svg';
import TrendDown from '../../assets/images/trend-down.svg';
import LineChartComponent from '../../components/charts/line-chart';
import { IChartData, SingleAsset } from '../../common/types/assets';
import TopPriceComponent from '../../components/top-price';

const HomePage: FC = (): JSX.Element => {
    const favoriteAssets: IChartData[] = useAppSelector((state) => state.assets.favoriteAssets);
    const assetsArray: SingleAsset[] = useAppSelector((state) => state.assets.assets)
   
    const dispatch = useAppDispatch();
    const fetchDataRef = useRef(false);
    const classes = useStyles();

    const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], [])
    const filteredArray = useMemo(() => {
        return (
            favoriteAssets.filter((value, index, self) => index === self.findIndex((t) => t.name === value.name))
        )
    }, [favoriteAssets])
    const filteredAssetArray = assetsArray
    .slice()
    .sort((a, b) => b.current_price - a.current_price)

    const fetchData = useCallback((data: string[]) => {
        data.forEach((element: string) => {
            dispatch(getFavoriteAssets(element));
        });
    }, [dispatch]);

    useEffect(() => {
        if (fetchDataRef.current) return;
        fetchDataRef.current = true;
        fetchData(favoriteAssetName);
        dispatch(getTopPriceData())
    }, [favoriteAssetName, fetchData, dispatch]);

    const renderFavoriteBlock = filteredArray.map((element: IChartData) => {       
        const currentPrice = element.singleAsset.map((element: any) => element.current_price);
        const changePrice = element.singleAsset.map((element: any) => element.price_change_percentage_24h);
        return (
            <Grid key={element.name} item xs={12} md={6} lg={6}>
                <Grid container className={classes.topCardItem}>
                    <Grid item xs={12} md={6} lg={6}>
                        <h3 className={classes.assetName}>{element.name}</h3>
                        <div className={classes.itemDetails}>
                            <h3 className={classes.cardPrice}>${currentPrice}</h3>
                            <Box className={classes.priceTrend} bgcolor={changePrice[0] > 0 ? '#A9FFA7' : '#FFA7A7'}>
                                {changePrice[0] < 0 ? (
                                    <img src={TrendDown} alt='trend down'/>
                                    ) : (
                                    <img src={TrendUp} alt='trend up' />
                                )}
                                <span className={classes.cardCapitalize}>
                                {Number(changePrice).toFixed(2)}%
                                </span>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <AreaChartComponent data={element.price_chart_data} />
                    </Grid>
                </Grid>
            </Grid>
        );
    });

    return (
        <Box className={classes.root}>
            <Grid className={classes.areaChart} container spacing={2}>
                {renderFavoriteBlock}
            </Grid>
            <Grid container className={classes.LineChartBlock}>
                <Grid item xs={12} sm={12} lg={12}>
                    {filteredArray.length && <LineChartComponent  data={filteredArray}/>}
                </Grid>
            </Grid>
            <Grid container className={classes.TopPriceRoot}>
                <Grid item lg={12}>
                    {filteredAssetArray.length && (
                        <TopPriceComponent assets={filteredAssetArray.slice(0, 7)}/>
                    )}
                </Grid>
            </Grid>
        </Box>

    );
    };

    export default HomePage;