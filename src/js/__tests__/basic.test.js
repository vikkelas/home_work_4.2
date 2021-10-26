import heroSort from "../app";

const tested = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];

const correct = [
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
  { name: "мечник", health: 10 },
];

test("checking the sorting of an array with toEqual", () => {
  const result = heroSort(tested);
  expect(result).toEqual(correct);
});

test("not toBe", () => {
  const result = heroSort(tested);
  expect(result).not.toBe(correct);
});
