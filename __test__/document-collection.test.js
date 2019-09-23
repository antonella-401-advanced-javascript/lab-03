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
    const newFile = {
      key: 'file'
    };
    writeFile.mockResolvedValue(newFile);

    documentCollection.save(newFile)
      .then(() => {
        expect(writeFile.mock.calls.length).toBe(1);
        expect(writeFile.mock.calls[0][1]).toBe(JSON.stringify(newFile));
      });
  });
});
