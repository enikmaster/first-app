import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues); //o spread operator serve para transformar o array em elementos separados, assim o .max() recebe 12 argumentos separados e não 1 array

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar
                key={dataPoint.id}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label} />)
            }
        </div>
    );
};

export default Chart;