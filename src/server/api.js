// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const jsforce = require('jsforce');

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.json());

const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.API_PORT || 3002;
const SF_USERNAME = process.env.SF_USERNAME || 'phpuser04@trailhead.com';
const SF_PASSWORD = process.env.SF_PASSWORD || 'abhi4791#ANTeFtMvFWQVT96p1MJ5Pxeg';

const conn = new jsforce.Connection({
    loginUrl: 'https://login.salesforce.com'
});

// eslint-disable-next-line consistent-return
conn.login(SF_USERNAME, SF_PASSWORD, (err) => {
    if (err) {
        return console.error(err);
    }
});

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true });
});

app.get('/api/v1/getAccRecords', (req, res) => {
    // eslint-disable-next-line consistent-return
    conn.query('SELECT Id, Name FROM Account ORDER BY LastModifiedDate DESC', (err, result) => {
        if (err) {
            return console.error(err);
        }

        res.send(result.records);
    });
});

app.post('/api/v1/newAccRecord', (req, res) => {
    // eslint-disable-next-line consistent-return
    conn.sobject("Account").create({ Name : req.body.accName }, (err, ret) => {
        if (err || !ret.success) { 
            return console.error(err, ret); 
        }

        res.send(ret.id);
    });
});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
);
