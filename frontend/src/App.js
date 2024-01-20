// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import "./App.css";

function App() {
  const [gasPrices, setGasPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGasPrices = async () => {
      try {
        const response = await axios.get("/api/gas-prices");
        setGasPrices(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gas prices:", error.message);
        setLoading(false);
      }
    };

    fetchGasPrices();
  }, []);

  return (
    <div className="App">
      <h1>Gas Prices</h1>

      {loading ? (
        <ClipLoader size={150} color={"#123abc"} loading={loading} />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Gas Price</th>
            </tr>
          </thead>
          <tbody>
            {gasPrices.map((price) => (
              <tr key={price._id}>
                <td>{new Date(price.timestamp).toLocaleString()}</td>
                <td>{price.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default App;
