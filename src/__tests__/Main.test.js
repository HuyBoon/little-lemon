jest.mock(
    "react-router-dom",
    () => ({
        useNavigate: () => jest.fn(),
    }),
    { virtual: true },
);

import { initializeTimes, updateTimes } from "../Main";

test("initializeTimes returns a non-empty array", () => {
    const result = initializeTimes();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns a non-empty array for a given date", () => {
    const date = new Date("2026-04-14");
    const result = updateTimes([], date);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});
