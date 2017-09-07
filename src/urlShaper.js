const lastCharacter = (string = "") => string[string.length - 1];

const resolveSlash = (path = "") => (lastCharacter(path) === '/') ? path : `${path}/`;

const notNullOrUndefined = (values = []) => values
  .every(v => ![null, undefined, 'null', 'undefined'].includes(v));

const queryParameter = ([key, value]) => `${key}=${value}`;

const objectToArray = (object = {}) => Object.keys(object).map(key => [key, object[key]]);

const buildQuery = (parameters = {}) => {
  const parameterArray = objectToArray(parameters);

  const query = parameterArray
    .filter(notNullOrUndefined)
    .map(queryParameter)
    .join('&');

  return `?${query}`;
}

export default (path, queryParameters) => {
  const pathWithSlash = resolveSlash(path);
  const query = buildQuery(queryParameters);
  return `${pathWithSlash}${query}`;
}
