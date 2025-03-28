import React, { useState } from "react";
import CSVUploader from "./CSVUploader";
import SpendingTrendChart from "./SpendingTrendChart";
import SpendingCategoryChart from "./SpendingCategoryChart";
import IncomeSourceChart from "./IncomeSourceChart";
import ExtraInsightsChart from "./ExtraInsightsChart";

function Dashboard() {
    const [data, setData] = useState([]);

    return (
        <div>
            <h1>Bank Data Analyzer</h1>
            <CSVUploader onDataParsed={setData} />
            {data.length > 0 && (
                <>
                    <h2>Account Balance Over Time</h2>
                    <SpendingTrendChart data={data} />

                    <h2>Top Spending Categories</h2>
                    <SpendingCategoryChart data={data} />

                    <h2>Top Income Sources</h2>
                    <IncomeSourceChart data={data} />

                    <h2>Spending vs. Income Over Time</h2>
                    <ExtraInsightsChart data={data} />
                </>
            )}
        </div>
    );
}

export default Dashboard;
