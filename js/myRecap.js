
//36 first challange
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))