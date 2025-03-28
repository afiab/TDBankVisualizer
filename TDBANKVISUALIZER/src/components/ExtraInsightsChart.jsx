import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

function ExtraInsightsChart({ data }) {
    return (
        <BarChart width={700} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="debit" fill="#FF5733" name="Spending" />
            <Bar dataKey="credit" fill="#33FF57" name="Income" />
        </BarChart>
    );
}

export default ExtraInsightsChart;
