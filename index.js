slowMath.add(6, 2)
    .then(
        (sum) => {
            console.log(`The sum is ${sum}`);
            return slowMath.multiply(sum, 2);
            })
    .then(
        (times) =>{
            console.log(`The multiplied result is ${times}`);
            return slowMath.divide(times, 4);
            })
    .then(
        (div) => {
            console.log(`Is divisible by ${div}`);
            return slowMath.subtract(div, 3);
            })
    .then(
        (sub) => {
            console.log(`Minus ${sub}`);
            return slowMath.add(sub, 98);
            })
    .then(
        (divide) => {
            console.log(`The dividing result is ${divide}`);
            return slowMath.divide(divide, 99);
        })
    .then(
        (mult) => {
            console.log(`The multiplication is ${mult}`);
            return slowMath.multiply(mult, 50);
        })
    .then(
        (div) => {
            console.log(`The division is ${div}`);
            return slowMath.remainder(div, 40);
        })
    .then(
        (sum) => {
            console.log(`The sum is ${sum}`);
            return slowMath.add(sum, 32);
        })
    .then(
        (difference) => {
            console.log(`The final result is ${difference}, where you fill in the blank with the final result.`);
        })
    .catch((err) => {
        console.log('err; ' + err);
        })





     


    
    // System.login(“user”, “pass”)
    // .then(
    //     function(success) {
    //         return someData.save();
    //         }).then(function(success) {
    //         return someData.delete();
    //         }).then(function(success) {
    //          console.log(‘deleted!’);
    //         }).catch(function(error) {
    //         console.log(error);
    //     });