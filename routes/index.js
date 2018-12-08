var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wild West' });
});


/* Butch  */
router.get('/bc', function(req, res, next) {
  res.render ('west', { title: 'Butch Сassidy', picture: 'images/bc.jpg', desc: 'Известный американский грабитель банков, поездов, а также лидер банды «Дикая банда».'
})
});

/* Billy the Kid */
router.get('/btk', function(req, res, next) {
  res.render ('west', { title: 'Billy the Kid', picture: 'images/btk.jpg', desc: 'Впервые убил человека, когда ему было восемнадцать лет. Считается, что он совершил убийство двадцати одного человека, но фактическое количество близко к девяти (четырёх он убил сам, пятерых — с чужой помощью).'
})
});

/* Jesse James */
router.get('/jj', function(req, res, next) {
  res.render ('west', { title: 'Jesse James', picture: 'images/jj.jpg', desc: 'Американский преступник XIX века, известный сподвижникам под прозвищем «Дингус».'
})
});

/* John Wesley Hardin */
router.get('/jwh', function(req, res, next) {
  res.render ('west', { title: 'John Wesley Hardin', picture: 'images/jwh.jpg', desc: 'Американский преступник, один из знаменитых стрелков на Диком Западе. Всего к моменту ареста он, по его же утверждениям, убил 44 человека.'
})
});

/* Pat Garrett */
router.get('/pg', function(req, res, next) {
  res.render ('west', { title: 'Pat Garrett', picture: 'images/pg.jpg', desc: 'Американский страж закона эпохи Дикого Запада, бармен, ковбой, охотник на бизонов и таможенный агент, известный больше всего тем, что убил знаменитого бандита Билли Кида.'
})
});

module.exports = router;
