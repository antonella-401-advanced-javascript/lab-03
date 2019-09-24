const Database = require('./lib/database');
const Model = require('./lib/model');
const DocumentCollection = require('./lib/document-collection');

const documents = new DocumentCollection('test/test');

const test = {
  key: 'potato'
};

documents.save(test);

Database.connect('./test')
  .then(() => {
    const model = new Model('test', test);
    
    model.create(test)
      .then(created => {
        console.log(created);
      });
    
    model.findById(test._id)
      .then(res => {
        console.log(res);
      });
    
    model.find()
      .then(res => {
        console.log(res);
      });
  })
  .finally(() => Database.close());

