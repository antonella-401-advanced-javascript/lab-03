const DocumentCollection = require('./lib/document-collection');

const documents = new DocumentCollection('./testing');

const test = {
  key: 'test1'
};

documents.save(test);

documents.get(test.id)
  .then(res => {
    console.log(res);
  });

documents.getAll()
  .then(res => {
    console.log(res);
  });
