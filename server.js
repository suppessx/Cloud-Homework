const express = require('express');
const PORT = 8080;

const app = express();
const dateTimeObject = new Date();

app.get('/', (req, res) => {
    const dateInfo = {
        Date: dateTimeObject.toDateString(),
        Time: dateTimeObject.toTimeString()
    };
    const responseText = `A date-time object is created<br>Date: ${dateInfo.Date}<br>Time: ${dateInfo.Time}`;
    res.send(responseText);
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}/`);
});
