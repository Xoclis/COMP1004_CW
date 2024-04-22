const express = require('express');
const bodyParser = require('body-parser');
const tools = require('./src/tools');

const app = express();

app.listen(3000);

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorisation');
    next();
});

app.get('/', async (req, res) => {
    res.sendStatus(200);
});

app.post('/trackers/income', async(req, res) => {
    let clientJson = await tools.getJson('./database/income.json');

    const incomes = clientJson['incomes'];
    
    const records = [];

    for (const uuid in incomes)
        if(uuid === req.body.uuid)
            for(const i in incomes[uuid])
                records.push({
                    uuid: incomes[uuid][i]['uuid'],
                    name: incomes[uuid][i]['income_name'],
                    amount: incomes[uuid][i]['income_amount']
                });
            
    if (records === null)
        res.status(404).json(records);

    else res.status(200).json(records);
});

app.post('/trackers/income', async(req, res) => {
    res.sendStatus(200);
});

app.post('/trackers/expense', async(req, res) => {
    let clientJson = await tools.getJson('./database/expense.json');

    const expenses = clientJson['expenses'];
    
    const records = [];

    console.log(expenses);
    for (const uuid in expenses)
        if(uuid === req.body.uuid)
            for(const i in expenses[uuid])
                records.push({
                    uuid: expenses[uuid][i]['uuid'],
                    name: expenses[uuid][i]['expense_name'],
                    amount: expenses[uuid][i]['expense_amount'],
                    date: expenses[uuid][i]['expense_date']
                });

    if (records === null)
        res.status(404).json(records);

    else res.status(200).json(records);
});

app.post('/trackers/appendExpense', async(req, res) => {
    res.sendStatus(200);
});

app.post('/login', async (req, res) => {});

app.post('/register', async (req, res) => { });