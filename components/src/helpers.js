export function dumpKeys(dict) {
  var ret = [];

  for (var record in dict) {
    for (var key in dict[record]) {
      if (!ret.includes(key)) {
        ret.push(key);
      }
    }
  }

  return ret;
}

export async function getDataFromEndpoint(endpoint) {
  const data = await fetch(endpoint)
  .then(response => response.json())
  return data;
}