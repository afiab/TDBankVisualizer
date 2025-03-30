# TDBankVisualizer

I made this as a way to track my own spending and financial habits from TD Bank. I can download the data as a csv from my account, so I decided to parse it and generate graphs based on the data.

## Running Locally
Use the following commands:
```
npm install papaparse recharts
npm run dev
```

## Intended Usage
Download a csv file of your account history when you login on the TD Bank website. Then upload that file onto this site for your transaction history to be visualized.

### Generated Charts
- **Account Balance Over Time**: A line chart that visualizes how your total account balanced has increased or decreased over time. Left to right is most to least recent balance.
- **Top Spending Categories**: A pie chart breaking down your transaction history by the place where the transaction occurred. 
- **Top Income Sources**: A pie chart breaking down where your deposits are sourced from.
- **Spending vs. Income Over Time**: A bar graph with red to represent spending and green to represent deposits. The timing of the bars are from left to right of most to least recent.

### Sample CSV Data for testing:

```
Date,Bank RTN,Account Number,Transaction Type,Description,Debit,Credit,Check Number,Account Running Balance
3/27/25,000000000,1111111111,DEBIT,VISA DDA PUR AP 444444     MOVIES 101 ONLINE         CITYNAME     * NY,20.14,,,3850.65
3/26/25,000000000,1111111111,CREDIT,COMPANY              SALARY ,,155.17,,3870.79
3/24/25,000000000,1111111111,DEBIT,TD ZELLE RECEIVED 55555A5AAA5 Zelle BOBTHEBUILDER,16,,,3715.62
3/18/25,000000000,1111111111,DEBIT,VISA DDA PUR AP 444444     UBER    EATS                HELP UBER COM * CA,18.62,,,3731.62
3/17/25,000000000,1111111111,DEBIT,VISA DDA PUR AP 444444     AMTRAK EAST CAFE     Q12    WASHINGTON    * DC,8.5,,,3750.24
3/17/25,000000000,1111111111,DEBIT,VISA DDA PUR AP 444444     MTA NYCT PAYGO              NEW YORK      * NY,2.9,,,3758.74
3/12/25,000000000,1111111111,CREDIT,COMPANY              SALARY ,,246.73,,3761.64
3/10/25,000000000,1111111111,DEBIT,VISA DDA PUR AP 444444     BAGEL LAND                  ROCHESTER     * NY,7.5,,,3514.91
3/4/25,000000000,1111111111,DEBIT,TD ZELLE RECEIVED 55555A5AAA5 Zelle BOBTHEBUILDER,11.99,,,3522.41
2/26/25,000000000,1111111111,CREDIT,COMPANY              SALARY ,,306.75,,3534.4
2/25/25,000000000,1111111111,DEBIT,DDA PURCHASE AP 12345678   WAL MART  1234              CITYNAME     * NY,34.45,,,3227.65
2/18/25,000000000,1111111111,DEBIT,VISA DDA PUR AP 444444     UBER    EATS                HELP UBER COM * CA,31,,,3262.1
2/12/25,000000000,1111111111,CREDIT,COMPANY              SALARY ,,306.75,,3293.1
2/10/25,000000000,1111111111,DEBIT,VISA DDA PUR AP 444444     UBER    TRIP                HELP UBER COM * CA,11.93,,,2986.35
2/3/25,000000000,1111111111,DEBIT,VISA DDA PUR AP 444444     UBER    EATS                HELP UBER COM * CA,28,,,2998.28
2/3/25,000000000,1111111111,CREDIT,TD ZELLE RECEIVED 55555A5AAA5 Zelle BOBTHEBUILDER,,50,,3026.28
1/29/25,000000000,1111111111,CREDIT,COMPANY              SALARY ,,62.54,,2976.28
1/27/25,000000000,1111111111,DEBIT,TD ZELLE RECEIVED 55555A5AAA5 Zelle BOBTHEBUILDER,15.25,,,2913.74
1/27/25,000000000,1111111111,DEBIT,DDA PURCHASE AP 444444     ALDI 66666                  CITYNAME     * NY,22.03,,,2928.99
1/27/25,000000000,1111111111,CREDIT,TD ZELLE RECEIVED 55555A5AAA5 Zelle BOBTHEBUILDER,,50,,2951.02%
```
