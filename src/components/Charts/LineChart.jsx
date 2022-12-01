import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  LineSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import {
  lineCustomSeries,
  LinePrimaryYAxis,
  LinePrimaryXAxis,
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

export default function LineChart() {
  const {currentMode} = useStateContext()
  return (

    <ChartComponent
    id='line-chart'
    height='420px'
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    tooltip={{enable: true}}
    chartArea={{border: {width: 0}}}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    legendSettings={{ background: 'white' }}>
      <Inject services={[LineSeries, Tooltip, Legend, DateTime]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index)=> <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
   
  );
}
