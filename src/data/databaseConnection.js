const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'root',
  database: 'consultasbr'
})

connection.connect((err)=>{
  if(err) throw err
  console.log("Database Connected")
})
module.exports=connection
