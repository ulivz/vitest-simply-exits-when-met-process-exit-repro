# vitest-simply-exits-when-met-process-exit-repro

Reproduction of [vitest#2615](https://github.com/vitest-dev/vitest/issues/2615)

## Summary

`vitest` will simply exit if the test contains an unexpected `process.exit` call, This may be very bad for troubleshooting some asynchronous tasks from from dependencies.

## Step to reproduce

1. `git clone https://github.com/ulivz/vitest-simply-exits-when-met-process-exit-repro`
1. `pnpm i`
2. Run `pnpm test`, you will notice that `vitest` will not give you any logs:

![](https://github.com/ulivz/vitest-simply-exits-when-met-process-exit-repro/blob/main/assets/vitest.png?raw=true)

1. Run `pnpm test` to execute same test with `jest`, you'll find that jest is able to tell you what went wrong:

![](https://github.com/ulivz/vitest-simply-exits-when-met-process-exit-repro/blob/main/assets/jest.png?raw=true)


