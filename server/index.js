const express = require('express')
const app = express()
const ctrl = require('./controller')

app.use(express.json())

app.get('/api/people', ctrl.getPeople )
app.post('/api/people', ctrl.addPerson)
app.put('/api/people/:newId', ctrl.updatePerson)
app.delete('/api/people/:newId', ctrl.deletePerson)


app.listen(3334, () => console.log(`Rock and Roll on 3334`))