import urlShaper from '../src/urlShaper';

describe('urlShaper', () => {
  const mockPath = "http://www.test.com/";
  const mockPathWithoutSlash = `${mockPath.slice(0, -1)}`;

  const mockUrlParameters = {
    name: 'joe',
    surname: 'smith',
    age: 15,
    isRegistered: true,
    favoriteQuote: '',
    incidents: 0,
  };

  const mockUrlParametersWithNullAndUndefined = {
    ...mockUrlParameters,
    null: 'hello',
    'null': 'world',
    undefined: 'boo',
    'undefined': 'bar',
    hello: null,
    world: 'null',
    boo: undefined,
    bar: 'undefined',
  };

  const expectedUrl = `${mockPath}?name=joe&surname=smith&age=15&isRegistered=true&favoriteQuote=&incidents=0`;

  test('resolves slash when not it\'s not provided in the path', () => {
    const testUrl = urlShaper(mockPathWithoutSlash, mockUrlParameters);
    expect(testUrl).toEqual(expectedUrl);
  })

  test('builds url when valid path and valid queryParameters are provided', () => {
    const testUrl = urlShaper(mockPath, mockUrlParameters);
    expect(testUrl).toEqual(expectedUrl);
  });

  test('builds url when valid path and null / undefined queryParameters are provided', () => {
    const testUrl = urlShaper(mockPath, mockUrlParametersWithNullAndUndefined);
    expect(testUrl).toEqual(expectedUrl);
  });

  test('returns an empty string when invalid parameters are provided', () => {
    expect(urlShaper(undefined, undefined)).toEqual('');
    expect(urlShaper(null, null)).toEqual('');
    expect(urlShaper('', '')).toEqual('');
    expect(urlShaper({}, {})).toEqual('');
    expect(urlShaper([], [])).toEqual('');
    expect(urlShaper(0, 0)).toEqual('');
    expect(urlShaper('', '')).toEqual('');
  });
});
