# vitest-simply-exits-when-met-process-exit-repro

Reproduction of [vitest#2615](https://github.com/vitest-dev/vitest/issues/2615).

## Summary

`vitest` will simply exit if the test contains an unexpected `process.exit` call, this may be very bad for troubleshooting some asynchronous tasks from from dependencies.

## Step to reproduce

1. `git clone https://github.com/ulivz/vitest-simply-exits-when-met-process-exit-repro`
1. `pnpm i`
1. Run `npm run test`, you will notice that `vitest` process will exit and not give you any logs:

![](https://github.com/ulivz/vitest-simply-exits-when-met-process-exit-repro/blob/main/assets/vitest.png?raw=true)

1. Run `npm run test:jest` to execute same test with `jest`, you'll find that jest is able to tell you what went wrong:

![](https://github.com/ulivz/vitest-simply-exits-when-met-process-exit-repro/blob/main/assets/jest.png?raw=true)


## Relevant Information

I am currently locating that the problem is that vitest will exit directly when the **Worker** process driving the test exits:

https://github.com/vitest-dev/vitest/blob/199776767a10bcd9f241e36a5cdd578c7d7c0dc2/packages/vitest/src/node/pool.ts#L140-L142