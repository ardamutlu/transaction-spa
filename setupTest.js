/* eslint no-undef: 0 */
import "@testing-library/jest-dom";

if (typeof window !== "undefined") {
  window.alert = (msg) => {};
}

afterAll(() => {
  jest.resetAllMocks();
});
