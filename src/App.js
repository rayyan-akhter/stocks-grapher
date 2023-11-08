import React from "react";
import StockChart from "./components/StockChart";
import "../src/App.css";

import * as aapl from "../src/assets/aapl";
import * as amzn from "../src/assets/amzn";
import * as meta from "../src/assets/meta";
import * as msft from "../src/assets/msft";
import * as tsla from "../src/assets/tsla";

const stockDataArray = [
  {
    min: aapl.aaplMinData,
    day: aapl.aaplDayData,
    week: aapl.aaplWeekData,
    month: aapl.aaplMonthData,
  },
  {
    min: amzn.amznMinData,
    day: amzn.amznDayData,
    week: amzn.amznWeekData,
    month: amzn.amznMonthData,
  },
  {
    min: meta.metaMinData,
    day: meta.metaDayData,
    week: meta.metaWeekData,
    month: meta.metaMonthData,
  },
  {
    min: msft.msftMinData,
    day: msft.msftDayData,
    week: msft.msftWeekData,
    month: msft.msftMonthData,
  },
  {
    min: tsla.tslaMinData,
    day: tsla.tslaDayData,
    week: tsla.tslaWeekData,
    month: tsla.tslaMonthData,
  },
];

function App() {
  return (
    <div className="App">
      <StockChart stockData={stockDataArray} dayKey="day" />
    </div>
  );
}

export default App;
