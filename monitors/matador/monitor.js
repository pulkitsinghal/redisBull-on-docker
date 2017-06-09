var app = require('bull-ui/app')({
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
  }
});

app.listen(3000, function(){
  console.log('bull-ui started listening on port', this.address().port);
});
