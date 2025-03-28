import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function SpendingTrendChart({ data }) {
    return (
        <LineChart width={700} height={400} data={data}>
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" />
            <Line type="monotone" dataKey="balance" stroke="#8884d8" />
        </LineChart>
    );
}

export default SpendingTrendChart;
