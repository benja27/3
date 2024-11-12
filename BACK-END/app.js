import express from "express"
import cors from "cors"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors({
    origin: "*",
    methods: "GET, POST"

}))

let users = [
    {username: "benja", password: bcrypt.hashSync("benja",10) }
]


app.post("/signup", (req,res)=>{
    let {username, password} = req.body

    console.log(username, password)
    if(!username || !password){
        console.log('efe de foca')
        return res.status(400).json({message:"favor de validar los datos"})
    }    
    users.push({username, password: bcrypt.hashSync(password, 10)})    
    console.log(users)
    return res.status(200).json({message: "usuario creado con exito"})
})

let secret = "asdfasdf"

app.post("/login", (req, res)=>{
    let {username, password} = req.body

    let user = users.find(e=> e.username === username)
    // if (!user) return res.status(400).json({message:"usuario no existe"})
    // console.log(username, password)
    if(!user || !bcrypt.compareSync( password, user.password )  ){
       return res.status(400).json({message:"valores invalidos"})
    }



    let token = jwt.sign({username}, secret, {expiresIn:"1m"} )

    res.json({token})

})


app.listen(3000, ()=> {
    console.log('servidor corriendo en el puerto 3000')
})