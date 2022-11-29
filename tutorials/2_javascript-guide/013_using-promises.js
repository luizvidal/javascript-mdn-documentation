// function successCallback(result) {
//     console.log(`Audio file ready at URL: ${result}`);
// }

// function failureCallback(error) {
//     console.error(`Error generating audio file: ${error}`);
// }

// createAudioFileAsync(audioSettings, successCallback, failureCallback); 

// new Promise((resolve, reject) => {
//     console.log('Initial');

//     resolve();

// })

// .then(() => {
//     throw new Error('Something failed');

//     console.log("Do this")
// })

// .catch(() => {
//     console.error('Do that')
// })

// .then(() => {
//     console.log('Do this, no matter what happened before')
// })

// setTimeout(() => console.log('10 seconds passed'), 10 * 1000);

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(10 * 1000)
// .then(
//     () => console.log('10 seconds')
// )
// .catch(
//     () => console.log('error...')
// )

// Promise.resolve().then(() => console.log(2));
// console.log(1)

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
.then(() => console.log(2))
.then(() => console.log(3));

console.log(1)