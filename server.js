const http = require('http');
const fs = require('fs');



const server =  http.createServer((req, res) => {
  console.log ('Server started');
  console.log(req.url, req.method)
  
  res.setHeader('Content-type', 'text/html');
  
  
  let path = './views/';
  let request = req.url;

  switch (request) {
    case '/':
      path += 'index.html';
      break;

      case '/home':
        res.statusCode = 301
        res.setHeader('Location', '/');
        res.end();
        
      case '/about':
        path += 'about.html';
        break;
      
      case '/contact':
        path += 'contact.html'
        break

        case '/projects':
          path += 'projects.html'
          break

          case '/services':
            path += 'services.html'
            break 

      default: path += '404.html'
        break;
      }
      
      console.log(path, typeof(path))
      
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      res.end(data)
      console.log(path, typeof(path))
    }
  });

})

server.listen(2000, 'localhost', () => {
  console.log('listening for request')
})
