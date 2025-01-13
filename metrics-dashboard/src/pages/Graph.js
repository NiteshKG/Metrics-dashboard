import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';

const Graph = ({ metric, device }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (metric && device) {
      setLoading(true); 
      setError(null);
      axios
        .get(`https://example-metrics.speedvitals.workers.dev/?metric=${metric}&device=${device}`)
        .then((response) => {
          console.log(response.data);
          setData(response.data || []); 
          setLoading(false);
        })
        .catch((error) => {
          console.error(error); // Log error for debugging
          setError("Failed to load data. Please try again.");
          setLoading(false);
        });
    }
  }, [metric, device]);

  const getOptions = () => ({
    title: {
      text: `Metric: ${metric.toUpperCase()}, Device: ${device.toUpperCase()}`,
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: Array.isArray(data) ? data.map((item) => item.timestamp) : [],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: Array.isArray(data) ? data.map((item) => item.value) : [],
        type: 'line',
      },
    ],
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return <ReactECharts option={getOptions()} style={{ height: '400px' }} />;
};

export default Graph;
