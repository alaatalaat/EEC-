import "./App.css";
import Header from "../src/Components/Header/header";
import { Suspense, useState } from "react";
import Home from "./Components/Home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "../src/Store/store";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { blue } from '@mui/material/colors';


function App() {
  const [mode,setMode] =useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primry:{
        main:blue[100],
        dark:blue[200],
        light:blue[50]
      },
      ModeColor: {
        main:blue[100],
        dark:blue[200],
        light:blue[50]
      }
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Provider store={store}>
          <Router>
            <Header setMode={setMode} />
            <Suspense fallback="Looooooooooding">
              <Routes>
                <Route exact activeClassName='is-active' path="/" element={<Home />} />
              </Routes>
            </Suspense>
          </Router>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
