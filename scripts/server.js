// Simple Express server setup to serve the build output
//const path = require('path');
/*app.use('*', (req, res) => {
    //res.sendFile(path.resolve(DIST_DIR, 'index.html'));
    //res.json({ message: 'Hello LWC' });
});*/

const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const jsforce = require('jsforce');

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.json());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3001;
const DIST_DIR = './dist';
const SF_USERNAME = process.env.SF_USERNAME;
const SF_PASSWORD = process.env.SF_PASSWORD;

const conn = new jsforce.Connection({
    loginUrl: 'https://login.salesforce.com'
});

// eslint-disable-next-line consistent-return
conn.login(SF_USERNAME, SF_PASSWORD, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log(conn.accessToken);
});

app.use(express.static(DIST_DIR));

//Express Routings
app.get('/api/v1/getAccRecords', (req, res) => {
    // eslint-disable-next-line consistent-return
    conn.query(
        'SELECT Id, Name FROM Account ORDER BY LastModifiedDate DESC',
        (err, result) => {
            if (err) {
                return console.error(err);
            }

            res.send(result.records);
        }
    );
});

app.post('/api/v1/newAccRecord', (req, res) => {
    // eslint-disable-next-line consistent-return
    conn.sobject('Account').create({ Name: req.body.accName }, (err, ret) => {
        if (err || !ret.success) {
            return console.error(err, ret);
        }

        res.send(ret.id);
    });
});

app.listen(PORT, () =>
    console.log(`✅  Server started: http://${HOST}:${PORT}`)
);
