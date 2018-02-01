slowMath.add(1, 2)
    .then(
        (sum) => {
            return slowMath.subtract(sum, 1);
        },
        (err) => {
            console.log(err);
        })
    .then(
        (difference) => {
            console.log(`the result of 3-1 is ${difference}`);
        })
    .catch((err) => {
        console.log('err; ' + err);
    })