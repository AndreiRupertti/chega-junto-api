/*eslint eqeqeq:0*/
db = connect('localhost:27017/chega-junto')
db.dropDatabase()

db.persons.insert({
  'name': 'Jose Aldo',
  'email': 'josealdo@gmail.com',
  'password': '123456'
})

db.persons.insert({
  'name': 'Amara Abreu',
  'email': 'amaraabreu@gmail.com',
  'password': '123456'
})

db.orgs.insert({
  'name': 'Rails Girls',
  'email': 'railsgirls@gmail.com',
  'description': 'evento de mulheres na TI com foco em ruby',
  'events':[{
    '_id': new ObjectId(),
    'title': 'Rails Girls #12',
    'organization': 'Rails Girls',
    'adress':'Porto Alegre',
    'description': 'ut nunc aenean aliquam pretium orci, bibendum donec suspendisse tellus quam convallis ipsum. Facilisis sollicitudin inceptos, orci per urna venenatis donec cursus odio, luctus nulla in suscipit minim vestibulum, vitae amet sed vulputate mauris, sed adipiscing elit feugiat id. Lacus ante leo gravida nascetur, nec ut nibh potenti, laoreet dapibus sed diam vel. Non lectus mauris et, ultrices non purus vivamus nulla. Mollis quam fusce magnis, vestibulum egestas quis arcu,',
    'date': '17/02',
    'schedule': '18:45',
    'contact': 'railsgirls@gmail.com'
  },
  {
    '_id': new ObjectId(),
    'title': 'Rails Girls #13',
    'organization': 'Rails Girls',
    'adress':'Porto Alegre',
    'description': 'ut nunc aenean aliquam pretium orci, bibendum donec suspendisse tellus quam convallis ipsum. Facilisis sollicitudin inceptos, orci per urna venenatis donec cursus odio, luctus nulla in suscipit minim vestibulum, vitae amet sed vulputate mauris, sed adipiscing elit feugiat id. Lacus ante leo gravida nascetur, nec ut nibh potenti, laoreet dapibus sed diam vel. Non lectus mauris et, ultrices non purus vivamus nulla. Mollis quam fusce magnis, vestibulum egestas quis arcu,',
    'date': '18/02',
    'schedule': '08:45',
    'contact': 'railsgirls@gmail.com'
  }],
  'password': '123456'
})
db.orgs.insert({
  'name': 'Afro Phyton',
  'email': 'afrophyton@gmail.com',
  'description': 'evento da cultura negra na TI com foco em phyton',
  'events': [{
    '_id': new ObjectId(),
    'title': 'Afro Phyton #2',
    'organization': 'Afro Phyton',
    'adress':'Porto Alegre',
    'description': 'ut nunc aenean aliquam pretium orci, bibendum donec suspendisse tellus quam convallis ipsum. Facilisis sollicitudin inceptos, orci per urna venenatis donec cursus odio, luctus nulla in suscipit minim vestibulum, vitae amet sed vulputate mauris, sed adipiscing elit feugiat id. Lacus ante leo gravida nascetur, nec ut nibh potenti, laoreet dapibus sed diam vel. Non lectus mauris et, ultrices non purus vivamus nulla. Mollis quam fusce magnis, vestibulum egestas quis arcu,',
    'date': '17/02',
    'schedule': '18:45',
    'contact': 'afrophyton@gmail.com'
  }],
  'password': '123456'
})
db.orgs.insert({
  'name': 'Django Girls',
  'email': 'djangogirls@gmail.com',
  'description': 'evento de mulheres na TI com foco em django',
  'events': [{
    '_id': new ObjectId(),
    'title': 'Django Girls #21',
    'organization': 'Django Girls',
    'adress':'Porto Alegre',
    'description': 'ut nunc aenean aliquam pretium orci, bibendum donec suspendisse tellus quam convallis ipsum. Facilisis sollicitudin inceptos, orci per urna venenatis donec cursus odio, luctus nulla in suscipit minim vestibulum, vitae amet sed vulputate mauris, sed adipiscing elit feugiat id. Lacus ante leo gravida nascetur, nec ut nibh potenti, laoreet dapibus sed diam vel. Non lectus mauris et, ultrices non purus vivamus nulla. Mollis quam fusce magnis, vestibulum egestas quis arcu,',
    'date': '17/02',
    'schedule': '18:45',
    'contact': 'adjangogirls@gmail.com'
  }],
  'password': '123456'
})
