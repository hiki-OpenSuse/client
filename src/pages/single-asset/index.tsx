import { Grid, Box, Avatar, Typography, Button } from '@mui/material';
import { FC } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { SingleAsset } from '../../common/types/assets';
import FlexBetween from '../../components/flex-between';
import { createWatchListRecord } from '../../store/thunks/assets';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { useStyles } from './style';

const SingleAssetPage: FC = (): JSX.Element => {
    const navigate = useNavigate()
    const classes = useStyles()
    const { id } = useParams()
    const dispatch = useAppDispatch()

    const assetsArray: SingleAsset[] = useAppSelector((state) => state.assets.assets)

    const asset = assetsArray.find((element) => element.name === (id as string))

    const handleCreateWatchListRecord = () => {
        const data = {
            name: '',
            assetId: ''
        }
        if(asset) {
            data.name = asset.name,
            data.assetId = asset.id
        }

        dispatch(createWatchListRecord(data))
    }
   
    return (
        <>
            {
                asset && (
                    <Grid container spacing={4} className={classes.root}>
                        <Grid item xs={12} className={classes.item}>
                            <Typography variant='h1'>
                                {asset.name}
                            </Typography>
                        </Grid>
                        <Grid item sm={6} xs={12} className={classes.item}>
                            <FlexBetween className={classes.itemWrapper}>
                                <Avatar src={asset.image}/>
                                <Typography variant='h2' className={classes.assetInfo}>
                                    {asset.symbol.toLocaleUpperCase()}
                                </Typography>
                            </FlexBetween>
                        </Grid>
                        <Grid item sm={6} xs={12} className={classes.item}>
                            <FlexBetween className={classes.itemWrapper}>
                                <Typography variant='h2' className={classes.assetNameInfo}>
                                    Цена($): 
                                </Typography>
                                <Typography variant='h2' className={classes.assetInfo}>
                                    {asset.current_price}
                                </Typography>
                            </FlexBetween>
                        </Grid>
                        <Grid item sm={6} xs={12} className={classes.item}>
                            <Box className={classes.itemWrapper}>
                                <Typography variant='h2' className={classes.assetNameInfo}>
                                    Изменение цены($): 
                                </Typography>
                                <Typography variant='h2' 
                                    color={asset.price_change_24h > 0 ? '#A9FFA7' : '#FFA7A7'}
                                    className={classes.assetInfo}>
                                    {asset.price_change_24h}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={6} xs={12} className={classes.item}>
                            <Box className={classes.itemWrapper}>
                                <Typography variant='h2' className={classes.assetNameInfo}>
                                    Изменение цены(%):
                                </Typography>
                                <Typography variant='h2'
                                    color={asset.price_change_percentage_24h > 0 ? '#A9FFA7' : '#FFA7A7'}
                                    className={classes.assetInfo}>
                                    {asset.price_change_percentage_24h}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid container className={classes.buttonBlock}>
                            <Button 
                                color='success'
                                variant='outlined'
                                className={classes.button}
                                onClick={() => navigate(-1)}
                            >
                                Назад
                            </Button>
                            <Button
                                color='success'
                                variant='outlined'
                                className={classes.button}
                                onClick={handleCreateWatchListRecord}
                            >
                                Добавить в избраное
                            </Button>
                        </Grid>
                    </Grid>
                )
            }
        </>
    );
}

export default SingleAssetPage