var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');

  var pictures = [
    {
      user: {
        username: 'beto23',
        avatar: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/1185631_627964767253159_486476512_n.jpg?oh=dbe01a246b201026a38bfd9737847d8e&oe=580DF6EC'
      },
      url: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/1014210_546510868731883_2130914507_n.jpg?oh=a2ef25f9a4257a0d3b65deba123f02ac&oe=5809AE5A',
      likes: 10,
      liked: true
    },
    {
      user: {
        username: 'beto23',
        avatar: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/1185631_627964767253159_486476512_n.jpg?oh=dbe01a246b201026a38bfd9737847d8e&oe=580DF6EC'
      },
      url: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/1014210_546510868731883_2130914507_n.jpg?oh=a2ef25f9a4257a0d3b65deba123f02ac&oe=5809AE5A',
      likes: 2,
      liked: true
    }
  ];

  empty(main).appendChild(template(pictures));
});
