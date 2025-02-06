import { useState } from 'react';
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { TopNavBar } from './Components/NavBar/TopNavBar';

// onClick={()=>setMode(mode === "light" ? "dark" : "light")}

function App() {
  const [mode,setMode] = useState("dark")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      ...mode === "light" ? {
          background : {
            primary : "#FFFFFF",
          },
          text : {
            primary : "#05073c",
            secondary : "#717171"
          }
      } : {
        background : {
          primary : "#152238",
        },
        text : {
          primary : "#FFFFFF",
          secondary : "#ddd3ec"
        }
      }
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <TopNavBar mode={mode} setMode={setMode}/>
    </ThemeProvider>
  )
}



export default App
