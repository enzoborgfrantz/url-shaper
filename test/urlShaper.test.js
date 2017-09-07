import urlShaper from '../src/urlShaper';

describe('urlShaper', () => {
  const mockPath = "http://www.test.com/";

  const mockUrlParameters = {
    name: 'joe',
    surname: 'smith',
    age: 15,
    isRegistered: true,
  };

  const mockUrlParametersWithNullAndUndefined = {
    ...mockUrlParameters,
    null: 'hello',
    'null': 'world',
    undefined: 'boo',
    'undefined': 'bar',
  };

  test('builds url when valid path and valid queryParameters are provided', () => {
    const testUrl = urlShaper(mockPath, mockUrlParameters);
    const expectedUrl = `${mockPath}?name=joe&surname=smith&age=15&isRegistered=true`;

    expect(testUrl).toEqual(expectedUrl);
  });

  test('builds url when valid path and null / undefined queryParameters are provided', () => {
    const testUrl = urlShaper(mockPath, mockUrlParametersWithNullAndUndefined);
    const expectedUrl = `${mockPath}?name=joe&surname=smith&age=15&isRegistered=true`;

    expect(testUrl).toEqual(expectedUrl);
  });
});
