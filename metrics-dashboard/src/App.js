// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './pages/NavigationBar';
import Dropdown from './pages/Dropdown';
import Graph from './pages/Graph';

const App = () => {
  const [metric, setMetric] = useState('lcp');
  const [device, setDevice] = useState('desktop');

  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        <h1>Metrics Dashboard</h1>
        <div className="row">
          <div className="col-md-6">
            <Dropdown
              label="Select Metric"
              options={['lcp', 'cls']}
              value={metric}
              onChange={setMetric}
            />
          </div>
          <div className="col-md-6">
            <Dropdown
              label="Select Device"
              options={['desktop', 'mobile']}
              value={device}
              onChange={setDevice}
            />
          </div>
        </div>
        <Graph metric={metric} device={device} />
      </div>
    </div>
  );
};

export default App;
