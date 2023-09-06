const {express, routes} = require('./controller')
const path = require('path')
const app = express()
const cors = require('cors')
const errorHandling = require('./middleware/error-handling')
const cookieParser = require('cookie-parser')
const port = +process.env.PORT || 3000


    app.use((req, res, next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Request-Methods", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Expose-Headers", "Authorization");
        next();
    });
    //cookie parser and router 
    //cookieparser is set before router
    app.use(cookieParser(), cors(), routes);
    app.use(
        express.json(),
        express.urlencoded({
            extended: true,
        })
    );
    //handling of errors
    app.use(errorHandling);
    //server

app.use(
    express.static('./static'),
    express.urlencoded({
        extended: false
    }),
    cookieParser(),
    cors(),
    routes
)
routes.get('^/$|/Capstone-eomp', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './static/html/index.html'))
})
app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`)
})

