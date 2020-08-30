
function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

function filterEmptyData(data) {
  if (data == undefined) {
    return "<br>";
  } else {
    return data;
  }
}

test('checks if parameter is undefined or not', () => {
  expect(filterEmptyData(undefined)).toBe("<br>");
});

function filterQuery(item) {
  const query = "KEIK";
  const regex = new RegExp(`^${query}`, 'gi');
  return item.match(regex);
}

test('checks name matches regex query', () => {
  expect(filterQuery("KEIK")).toStrictEqual(["KEIK"]);
});