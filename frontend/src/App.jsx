import { useEffect, useState } from 'react'
import axios from 'axios'
import Papa from 'papaparse'

import './App.css'



function App() {
  const [ret, setRet] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get("http://localhost:8080/random");
          setRet(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(ret, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const elem = document.createElement('a');
    elem.href = url;
    elem.download = 'activities.json';
    elem.click();
  };

  const downloadCSV = () => {
    const csv = Papa.unparse(ret);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const elem = document.createElement('a');
    elem.href = url;
    elem.download = 'activities.csv';
    elem.click();
  };

  const printToConsole = () => {
    console.log(ret);
  };

  return (
    <div>
      <table>
        <tr>
            <th>Activity</th>
            <th>Availability</th>
            <th>Type</th>
            <th>Participants</th>
            <th>Price</th>
            <th>Accessibility</th>
            <th>Duration</th>
            <th>Kid Friendly?</th>
            <th>Link</th>
            <th>Key</th>
        </tr>
        {
          ret.map((item, index) => (
            <tr key={index}>
              <td>{item.activity}</td>
              <td>{item.availability}</td>
              <td>{item.type}</td>
              <td>{item.participants}</td>
              <td>{item.price}</td>
              <td>{item.accessibility}</td>
              <td>{item.duration}</td>
              <td>{item.kidFriendly.toString()}</td>
              <td>{item.link}</td>
              <td>{item.key}</td>
            </tr>
          ))
        }
      </table>

      <div>
        <button onClick={downloadJSON}>Save as JSON</button>
        <button onClick={downloadCSV}>Save as CSV</button>
        <button onClick={printToConsole}>Print to console</button>
      </div>
    </div>
  )
}

export default App
