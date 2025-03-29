import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { ResponsiveContainer } from "recharts";

function SpendingTrendChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#eee" />
                <Line type="monotone" dataKey="balance" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default SpendingTrendChart;
