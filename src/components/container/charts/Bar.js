// STEP 1 - Include Dependencies
// Include react
import React from 'react'

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'

// Include the fusioncharts library
import FusionCharts from 'fusioncharts'

// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts'

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const Bar = ({ data }) => {
  const chartConfigs = {
    type: 'bar2d', // The chart type
    renderAt: 'chartContainer',
    width: '100%',
    height: '100%',
    dataFormat: 'json', // Data type
    theme: 'gammel',
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Most Forked',
        yAxisName: 'Forks',
        xAxisName: 'Repos',
        xAxisNameFontSize: '18px',
        yAxisNameFontSize: '18px',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '35%',
      },
      // Chart Data
      data,
    },
  }
  return <ReactFC {...chartConfigs} />
}

export default Bar
