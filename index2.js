
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
const express = require('express')
const app = express()
const port = 3000
const jwt = require('jsonwebtoken');

 app.use(express.json())
  
  app.post('/login', (req, res) => {
    console.log(req.body)

    let result = login(req.body.username, 
      req.body.password)

      let token = generateToken(result)
      res.send(token)
  })


app.get('/', (req, res) => {
  res.send('Hello UTeM!')
})

app.get('/bye', (req, res) => {
    res.send('BYE UTeM!')
  })

  app.post('/register', (req, res) => {
    
    let result = register(
      req.body.username,
      req.body.password,
      req.body.name,
      req.body.email
      )

    res.send(result)
  })



  function login(reqUsername, reqPassword)
  {
   let matchUser = dbUsers.find ( x => x.username == reqUsername)
  
  if(!matchUser) return "User not found!"
  if(matchUser.password == reqPassword)
  {
      return matchUser
  }
  else
  {
      return "Invalid password"
  }
  }
  
  //for(let i = 0; i <dbUsers.length; i++)
  //console.log(login("NSF","password"))
  //console.log(login("NAF","password"))
  
 
function login1(reqUsername, reqpassword)
{
let matchUser = dbUsers.find(user => user.username == reqUsername)
console.log(matchUser)
}

let dbUsers = [

  {
      username: "NSF",
      password : "123456",
      name: "N S",
      email: "b022110002@student.utem.edu.my"
  }
  ,
  {
      username: "NAF",
      password : "789321",
      name: "NF",
      email: "b022110003@student.utem.edu.my"
  }
  ,
  {
      username: "MAF",
      password : "453627",
      name: "AF",
      email: "b022110004@student.utem.edu.my"
  }
]

function register(reqUsername, reqPassword, reqName, reqEmail)
{
    dbUsers.push({
        username : reqUsername,
        password : reqPassword,
        name : reqName, 
        email : reqEmail
    })
}

function generatetoken(UserData)
{
    const token = jwt.sign(
        userData,
        'thisispassword'
        {expiresIn: 60}
    );
    return token
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}
)})
