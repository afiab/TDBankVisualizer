import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

function IncomeSourceChart({ data }) {
    const extractIncomeSource = (description) => {
        if (description.toUpperCase().includes("ZELLE")) {
            const parts = description.split("Zelle");
            return parts.length > 1 ? "Zelle" + parts[1].trim() : "Zelle";
        }
        return description;
    };

    const incomeSources = data.reduce((acc, row) => {
        if (row.credit > 0) {
            const source = extractIncomeSource(row.description);
            acc[source] = (acc[source] || 0) + row.credit;
        }
        return acc;
    }, {});

    const chartData = Object.keys(incomeSources)
        .map(key => ({
            name: `${key} ($${incomeSources[key].toFixed(2)})`, // Include total in the legend
            value: parseFloat(incomeSources[key].toFixed(2))
        }))
        .sort((a, b) => b.value - a.value); // Sort from greatest to least

    const COLORS = ["#3366FF", "#33A1FF", "#33E3FF", "#33FFBD", "#33FF75"];

    return (
        <PieChart width={600} height={400}>
            <Pie data={chartData} dataKey="value" nameKey="name" outerRadius={150}>
                {chartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip formatter={(value) => `$${value.toFixed(2)}`} /> 
            <Legend 
                layout="vertical" 
                verticalAlign="middle" 
                align="right" 
                iconType="circle" 
                wrapperStyle={{ paddingLeft: '20px' }}
            />
        </PieChart>
    );
}

export default IncomeSourceChart;
