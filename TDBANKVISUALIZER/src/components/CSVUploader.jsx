import React from "react";
import Papa from "papaparse";

function CSVUploader({ onDataParsed }) {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                const processedData = result.data.map(row => ({
                    date: row["Date"],
                    description: row["Description"],
                    transactionType: row["Transaction Type"],
                    debit: parseFloat(row["Debit"]) || 0,
                    credit: parseFloat(row["Credit"]) || 0,
                    balance: parseFloat(row["Account Running Balance"]) || 0
                }));
                onDataParsed(processedData);
            },
        });
    };

    return (
        <div>
            <h2>Upload Your Bank CSV</h2>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
        </div>
    );
}

export default CSVUploader;
