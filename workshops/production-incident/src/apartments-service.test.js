import { getDialMessage } from "./apartments-service";

const LEVIN_APT_NUM = 3;
const RUBIN_APT_NUM = 8;
const ORON_APT = 4;
const NON_EXISTING_APT_NUM = 1234;

test("Return the right dial message [Levin family] when 3 is dialed", () => {
    expect(getDialMessage(LEVIN_APT_NUM)).toBe("Calling Yoni Levin");
});

test("Return the right dial message [Rubin family] when 8 is dialed", () => {
    expect(getDialMessage(RUBIN_APT_NUM)).toBe("Calling Anton Rubin");
});

test("Calling an apartment that does not exist", () => {
    expect(getDialMessage(NON_EXISTING_APT_NUM)).toBe(
        "Invalid apartment number"
    );
});

test("Calling an apartment without tenant lastname", () => {
    expect(getDialMessage(ORON_APT)).toBe("Oron")
    // TODO: implement the test here
    // TODO: implement the test here
    // TODO: implement the test here
    // TODO: implement the test here
});
