import './App.css'
import Grid from '@mui/material/Grid2'
import IndicatorWeather from './components/IndicatorWeather'; 
import TableWeather from './components/TableWeather';
import ControlWeather from './components/ControlWeather';
import LineChartWeather from './components/LineChartWeather';
function App() {
  

  return (
    <Grid>
   <Grid container spacing={5}>

    {/* Indicadores */}
    <Grid size={{ xs: 12, xl: 3 }}>Elemento: Indicador 1<IndicatorWeather title={'Indicator 1'} subtitle={'Unidad 1'} value={"1.23"}/><ControlWeather/></Grid>
    <Grid size={{ xs: 12, xl: 3 }}>Elemento: Indicador 2<IndicatorWeather title={'Indicator 2'} subtitle={'Unidad 2'} value={"3.13"}/></Grid>
    <Grid size={{ xs: 12, xl: 3 }}>Elemento: Indicador 3<IndicatorWeather title={'Indicator 3'} subtitle={'Unidad 3'} value={"2.31"}/></Grid>
    <Grid size={{ xs: 12, xl: 3 }}>Elemento: Indicador 4<IndicatorWeather title={'Indicator 4'} subtitle={'Unidad 4'} value={"3.21"}/></Grid>

    {/* Tabla */}
    <Grid size={{ xs: 12, xl: 8 }}>Elemento: Tabla<TableWeather/></Grid>

    {/* Gráfico */}
    <Grid size={{ xs: 12, xl: 4 }}>Elemento: Gráfico 1<LineChartWeather/></Grid>

    </Grid>
  </Grid>

  )
}

export default App
