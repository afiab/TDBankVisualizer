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
            <h2>Upload Here</h2>
            <p>Upload your TD Bank CSV file here. You can get this file by going into your account on the TD Bank website, and then exporting your account activity as a CSV.</p>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
        </div>
    );
}

export default CSVUploader;
