const urlencoded = require('body-parser/lib/types/urlencoded');
const express = require('express');

const usuarioApi = require('./api/usuario');
const saudacao = require('./saudacaoMid');

const app = express();


require('./api/produto')(app, 'com param');



app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))
//Função middleware
app.use(saudacao('gabriel'))

app.post('/usuario', usuarioApi.salvar);
app.get('/usuario', usuarioApi.obter);


app.use('/opa', (req, re, next) => {
    console.log('middleware')
    next()
});


app.get('/cliente/:id', (req,res, next) => {
    res.send(`Cliente ${req.params.id} selecionado`);
    next()
})

app.get('/opa', (req, res, next) => {
    res.json([
        {name: 'gabriel', num: '123', numero: 123},
        {name: 'joa', num: '1545423', numero: 23},
        {name: 'pedro', num: '3213', numero: 45}
    ])

    // res.json({
    //     name: 'gabriel',
    //     price: 123,
    // })

    //res.send('estou bem');

    next()
});

app.post('/corpo', (req,res) => {
    // let corpo = '';
    // req.on('data', function(parte) {
    //     corpo += parte
    // });

    // req.on('end', function() {
    //     res.send(corpo);
    // });

    res.send(req.body)
});

app.use((req,res, next) => {
    console.log('middleware 2')
    next()
});

app.get('/clientes/relatorio', (req,res) => {
    res.send(`Cliente realtorio completo ${req.query.completo}  ano = ${req.query.ano}`);
})


app.listen(3005, () => console.log('🔥 Server running on port 3005'));