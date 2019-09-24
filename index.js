const Database = require('./lib/database');
const { setup, testing, testing2 } = require('./models/instances');
const Model = require('./lib/model');

Database.connect('./test')
  .then(() => {
    const schemaSetup = new Model('test', setup);
    
    schemaSetup.create(testing2)
      .then(created => {
        console.log('potato', created);
        schemaSetup.findById(created._id)
          .then(res => {
            console.log('potato id', res);
            schemaSetup.create(testing)
              .then(created => {
                console.log('potato2', created);
                schemaSetup.findById(created._id)
                  .then(res => {
                    console.log('potato2 id', res);
                    schemaSetup.find()
                      .then(res => {
                        console.log('potato4', res);
                      });
                  });
              });
          });

      });
  });


