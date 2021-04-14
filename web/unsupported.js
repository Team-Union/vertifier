const fs = require('fs');
module.exports = {
    pathname: '/unsupported',
    method: 'GET',
    run: async (client, req, res, parsed) => {
        res.writeHead(200, {
            // 'strict-transport-security': 'max-age=86400; includeSubDomains; preload',
            'content-type': 'text/html; charset=UTF-8'
        });
      if (req.headers['user-agent'] && (req.headers['user-agent'].includes('MSIE') || req.headers['user-agent'].includes('rv:11.0'))) {
          res.writeHead(200, {
              'Content-Type': "text/html; charset=UTF-8",
              // 'strict-transport-security': 'max-age=86400; includeSubDomains; preload'
          });
          fs.readFile('./assets/html/unsupported.html', 'utf8', (err, data) => {
              res.end(data);
          });
          return;
      } else {
          res.redirect(301, '/')
    }
}
