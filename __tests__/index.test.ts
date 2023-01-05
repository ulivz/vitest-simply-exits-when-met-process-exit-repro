export async function sleep(t: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, t));
}

export async function exit() {
  await sleep(2000);
  console.log("test process (worker) will exit");
  process.exit(1);
}

it("async task with unexpected exit", async () => {
  console.log(`async task start`);
  await exit();
});
