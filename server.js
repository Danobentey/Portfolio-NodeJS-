const http = require('http');
const fs = require('fs');



const server =  http.createServer((req, res) => {
  console.log ('Server started');
  console.log(req.url, req.method)
  
  res.setHeader('Content-type', 'text/html');
  
  
  let path = './views/';
  let request = req.url;

  switch (request) {
      case '/home':
        request= '/';

      case '/':
        path += 'index.html';
        break;
      
        
      case '/about.html':
        path += 'about.html';
        break;
      
      case '/contact.html':
        path += 'contact.html'
        break

        case '/projects.html':
          path += 'projects.html'
          break

          case '/services.html':
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
