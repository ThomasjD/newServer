
//http is  a core module, require is  a global function that node provides
  //so the http module is now assigned to an object called http
const http = require('http')

//define port name and host for our server
  //host name is label assigned to the server to identify it to other applications on the web
    //ex. domain name such as facebook is a domain
    //we can attach to the local host "local host"
    const hostname = 'localhost'

    //port # is to identify particular program on the network as a running process
    const port = 3000

    //create a server by storing the server object in this constant
    const server = http.createServer((req, res)=> {
       //console.log(req)

    //grabing url from request via ES6 destructive syntax
      //same as const url = req.url
      //const { url } = req

      const url = req.url
      //console.log(url)

      if (url === '/translations') {
        const translations = {1: 'one', 2: 'two', 3: 'three'}

        //setHeader: 2 arguments (Content-Type, (application data type) )
        res.setHeader('Content-Type', 'application/json')

        //data stream takes strings as parameters but translations is an js object
          //use JSON.stringify() to turn translations object to a json
        res.write(JSON.stringify(translations))

        //can end a res before it gets to the other res.end()
        res.end()
      }

      console.log('I am in the server')

    //respond by res.end() to signal to server that it finished all configuration
       res.end('Welcome to Node!')
       //res.end(req)
    })//end of server()


      //http server takes an argument; which is a call back function that allows
        //us to specify different options for the server
        //this callback function has 2 arguments itself (req, res)


        //For the server to start listening for req
        server.listen(port, hostname), () => {
          //${} is called literal string(template literal) interpolation (E6)
          console.log(`Server running at ${hostname} ${port}`)
          //console.log('Server running at hostname: ' + hostname 'port: '+ port)
        }
