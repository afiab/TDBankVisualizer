import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

// Function to dynamically extract a category from the transaction description
const extractCategory = (description) => {
    // If it contains "ZELLE", categorize it as "ZELLE"
    if (description.toUpperCase().includes("ZELLE")) {
        return "ZELLE";
    }

    // Remove leading transaction prefixes
    let cleaned = description.replace(/^[A-Z\s]+[0-9]+/, "").trim();

    // Split by multiple spaces
    let sections = cleaned.split(/\s{2,}/).filter(section => section.trim().length > 0);

    // The first section after the numbers is the category
    return sections.length > 0 ? sections[0] : "Other";
};

function SpendingCategoryChart({ data }) {
    const categoryTotals = data.reduce((acc, row) => {
        if (row.debit > 0) {
            let category = extractCategory(row.description);
            acc[category] = (acc[category] || 0) + row.debit;
        }
        return acc;
    }, {});

    const chartData = Object.keys(categoryTotals)
        .map(key => ({
            name: `${key} ($${categoryTotals[key].toFixed(2)})`, // Add total in legend
            value: parseFloat(categoryTotals[key].toFixed(2)) // Round to 2 decimal places
        }))
        .sort((a, b) => b.value - a.value); // Sort from greatest to least

    const COLORS = ["#FF5733", "#FF8D33", "#FFC733", "#75FF33", "#33FF57", "#3399FF", "#8D33FF"];

    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
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
        </ResponsiveContainer>
    );
}

export default SpendingCategoryChart;
