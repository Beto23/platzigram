var express = require('express');
var livereload = require('express-livereload');
var app = express();

livereload(app, config={});

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index', { title: 'Platzigram'  });
});

app.get('/signup', function(req, res){
  res.render('index', { title: 'Platzigram - Signup'  });
});

app.get('/signin', function(req, res){
  res.render('index', { title: 'Platzigram - Signin'});
});

app.get('/api/pictures', function (req, res, next) {
  var pictures = [
    {
      user: {
        username: 'slifszyc',
        avatar: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/1185631_627964767253159_486476512_n.jpg?oh=e040f41795fe069cba37488f5e497318&oe=57E669EC'
      },
      url: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/1544966_607696085946694_1721555721_n.jpg?oh=184c3dc258b9b0386c9aed91512ca272&oe=57C19AAB',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'slifszyc',
        avatar: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/1185631_627964767253159_486476512_n.jpg?oh=e040f41795fe069cba37488f5e497318&oe=57E669EC'
      },
      url: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/1544966_607696085946694_1721555721_n.jpg?oh=184c3dc258b9b0386c9aed91512ca272&oe=57C19AAB',
      likes: 1,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];

  setTimeout(function () {
    res.send(pictures);
  }, 2000);
});

app.listen(3000, function(err){
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platzigram escuchando en el puerto 3000');
});
