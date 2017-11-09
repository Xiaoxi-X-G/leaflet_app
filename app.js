/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START app]
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  //res.status(200).send('Hello, world!').end();
    res.sendfile('./index.html');
});

app.get('/css/anz_styleSheet.css', (req, res) => {
    res.sendfile('./css/anz_styleSheet.css');
});

app.get('/js/getCompanyNames.js', (req, res) => {
    res.sendfile('./js/getCompanyNames.js');
});

app.get('/js/generateGenericPack.js', (req, res) => {
    res.sendfile('./js/generateGenericPack.js');
});

app.get('/js/getAllCompanyNames.js', (req, res) => {
    res.sendfile('./js/getAllCompanyNames.js');
});

app.get('/css/ANZCustomized-MDBPremium.css', (req, res) => {
    res.sendfile('./css/ANZCustomized-MDBPremium.css');
});

app.get('/css/ANZCustomized-MDB.css', (req, res) => {
    res.sendfile('./css/ANZCustomized-MDB.css');
});

app.get('/images/logo-anz.svg', (req, res) => {
    res.sendfile('./images/logo-anz.svg');
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
