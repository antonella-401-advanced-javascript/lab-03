const DocumentCollection = require('../lib/document-collection');
const path = require('path');

jest.mock('../lib/files.js', () => ({
  readFile: jest.fn(),
  writeFile: jest.fn(),
  readdir: jest.fn(),
}));

// for setting up mock expectations
const { readFile, writeFile, readdir } = require('../lib/files');
const documentCollection = new DocumentCollection('folder');

describe('Document Collection', () => {
  it('saves file', () => {
    const newFolder = {
      key: 'file'
    };
    writeFile.mockResolvedValue(newFolder);

    documentCollection.save(newFolder)
      .then(() => {
        expect(writeFile.mock.calls.length).toBe(1);
        expect(writeFile.mock.calls[0][1]).toBe(JSON.stringify(newFolder));
      });
  });

  it('gets file', () => {
    const id = 'test';
    const newFolder = {
      key: 'file'
    };
    readFile.mockResolvedValue(JSON.stringify(newFolder));

    return documentCollection.get(id)
      .then(res => {
        expect(readFile.mock.calls.length).toBe(1);
        expect(readFile.mock.calls[0][0]).toBe('./folder/' + id + '.json');
        expect(res).toEqual(newFolder);
      });
  });

  it('gets all files', () => {
    readdir.mockResolvedValue([]);

    return documentCollection.getAll()
      .then(res => {
        expect(readdir.mock.calls.length).toBe(1);
        expect(readdir.mock.calls[0][0]).toEqual('folder');
        expect(res).toEqual([]);
      });
  });
});
