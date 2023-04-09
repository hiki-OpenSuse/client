import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./utils/router/privateRouter";
import AuthRootPage from "./pages/auth";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LayoutComponent from "./components/leayout";
import WatchListPage from "./pages/watchlist";
import NewsPage from "./pages/news";
import SettingsPage from "./pages/settings";
import SingleAssetPage from "./pages/single-asset";

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="App">
                    <Routes>
                        <Route element={<LayoutComponent/>}>
                            <Route element={<PrivateRouter/>}>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/watchlist" element={<WatchListPage/>}/>
                                <Route path="/news" element={<NewsPage/>}/>
                                <Route path="/settings" element={<SettingsPage/>}/>
                                <Route path="/single/:id" element={<SingleAssetPage/>}/>
                            </Route>
                            <Route path="login" element={<AuthRootPage/>}/>
                            <Route path="register" element={<AuthRootPage/>}/>
                        </Route>
                    </Routes>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
