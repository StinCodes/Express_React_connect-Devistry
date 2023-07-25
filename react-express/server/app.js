const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
  console.log(`Server started at ${PORT}`)
})

const items = [
  {
    name: 'Laptop',
    price: 500
  },
  {
    name: 'Desktop',
    price: 700
  }
]

app.get('/api/items')
