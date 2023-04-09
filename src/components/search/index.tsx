import { FC } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SingleAsset } from "../../common/types/assets";
import { useAppSelector } from "../../utils/hook";

const SearchComponent: FC = (): JSX.Element => {
    const navigate = useNavigate()
    const assetsArray: SingleAsset[] = useAppSelector((state) => state.assets.assets)

    const navigateToAssetPage = (value: string | null) => {
        if (!value) return
        navigate(`/single/${value}`)
    }
    return (
        <Stack spacing={2} sx={{width: 300}}>
            <Autocomplete 
                freeSolo
                onChange={(e: any, value: string | null) => navigateToAssetPage(value)}
                options={assetsArray.map((element: {name: string}) => element.name)}
                renderInput={(element) => (
                    <TextField 
                        {...element}
                        label='Поиск'
                        InputProps={{
                            ...element.InputProps,
                            type: 'search',
                        }}/>
                )}
            />
        </Stack>
    );
}

export default SearchComponent