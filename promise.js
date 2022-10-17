new Promise((resolve, reject) => {
  console.log("inside Promise");
  reject(new Error("First reject"));
  console.log("before resolve");
  resolve("First resolve");
  console.log("after resolve");
})
  .then((value) => {
    console.log("inside then");
    console.log(value);
  })
  .catch((err) => {
    console.log("error", err);
  });
