const isString = value => typeof value === 'string';

const isNonEmptyString = value => !!value && isString(value);

const resolveSlash = path => path[path.length - 1] === '/' ? path : `${path}/`;

const isObject = value => (!!value && !Array.isArray(value) && typeof value === 'object');

const isNonEmptyObject = value => (isObject(value) && !!Object.keys(value).length);

const objectToArray = (object) => Object.keys(object).map(key => [key, object[key]]);

const isNullOrUndefined = value => [null, undefined, 'null', 'undefined'].includes(value);

const anyNullOrUndefined = values => !values.some(isNullOrUndefined);

const queryParameter = ([key, value]) => `${key}=${value}`;

const buildQuery = (parameters) => {
  const parameterArray = objectToArray(parameters);

  const query = parameterArray
    .filter(anyNullOrUndefined)
    .map(queryParameter)
    .join('&');

  return `?${query}`;
}

export default (path, queryParameters) => {
  const pathWithSlash = isNonEmptyString(path) ? resolveSlash(path) : '';
  const query = isNonEmptyObject(queryParameters) ? buildQuery(queryParameters) : '';
  return `${pathWithSlash}${query}`;
}
