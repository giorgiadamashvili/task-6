try {
    console.log(a);
    let a = 3
    console.log('Let must be declared before use');

} catch (err) {
    let b = 1 / 0;
    console.log('Cannot be divided by zero')
}
