const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: 'placeimg.com',
      port: '',
      pathname: '/640/480/people/**',
    }, ],
  },
}