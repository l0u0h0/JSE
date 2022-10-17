// function returnPromiseForTimeout() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(Math.random());
//       console.log("after resolve");
//     }, 1000);
//   });
// }

// returnPromiseForTimeout()
//   .then((value) => {
//     console.log("value", value);
//     return returnPromiseForTimeout();
//   })
//   .then((value) => {
//     console.log("then 2");
//     console.log("value", value);
//     return returnPromiseForTimeout();
//   })
//   .then((value) => {
//     console.log("then 3");
//     console.log("value", value);
//     return returnPromiseForTimeout();
//   });

// returnPromiseForTimeout();

/**
 *
 * @param {number} duration
 */
async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, duration);
  });
}

async function main() {
  console.log("1");
  await sleep(1000);
  console.log("2");
  await sleep(1000);
  console.log("3");
  await sleep(1000);
  console.log("finish");
}

main();
