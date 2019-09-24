const Schema = require('../lib/Schema');

describe('Schema', () => {

  const exampleSchema = {
    firstName: {
      Type: 'string',
      required: true
    },
    lastName: {
      Type: 'string',
      required: true
    },
    married: {
      Type: 'boolean',
      required: true
    },
    kids: {
      Type: 'number',
      required: true
    },
    birthday: {
      Type: 'date',
      required: false
    }
  };
  const schema = new Schema(exampleSchema);

  const personModel = {
    firstName: 'Chris',
    lastName: 'Sample',
    married: true,
    kids: 3
  };
  
  it('validates a correct model', () => {
    expect(schema.validate(personModel)).toEqual(personModel);
  });

  it('validates date was passed', () => {
    const birthCheck = {
      firstName: 'Chris',
      lastName: 'Sample',
      married: true,
      kids: 3,
      birthday: new Date('09-27-1995')
    };
    expect(schema.validate(birthCheck)).toEqual(birthCheck);
  });

  it('ignores properties not found on schema', () => {
    const extraPerson = {
      firstName: 'Christa',
      lastName: 'Sample',
      married: true,
      kids: 3,
      birthday: new Date('09-27-1995'),
      potato: 'yes'
    };
    const goodPerson = {
      firstName: 'Christa',
      lastName: 'Sample',
      married: true,
      kids: 3,
      birthday: new Date('09-27-1995')
    };
    expect(schema.validate(extraPerson)).toEqual(goodPerson);
  });

  it('Boolean caster', () => {
    const castPerson = {
      firstName: 'Chris',
      lastName: 'Sample',
      married: 'true',
      kids: 3,
    };
    expect(schema.validate(castPerson)).toEqual(personModel);
  });

  it('Number caster', () => {
    const castPerson = {
      firstName: 'Chris',
      lastName: 'Sample',
      married: 'true',
      kids: '3'
    };
    expect(schema.validate(castPerson)).toEqual(personModel);
  });

  it('throws on invalid model', () => {
    const badPerson = {
      firstName: 'Chris',
      lastName: 'Sample',
      married: true,
      kids: true
    };
    const badPerson2 = {
      firstName: 'Chris',
      lastName: 'Sample',
      married: true,
      kids: '1gh4'
    };
    expect(schema.validate(badPerson)).not.toEqual(personModel);
    expect(schema.validate(badPerson2)).not.toEqual(personModel);
  });

});