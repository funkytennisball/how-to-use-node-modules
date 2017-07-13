const argon2 = require('argon2');

console.time('test');
argon2.hash('password').then(hash => {
    console.timeEnd('test');
    console.log(hash);

    argon2.verify(hash, 'password').then(match => {
        if(match){
            console.log('match');
        } else {
            console.log('notmatch');
        }
    });
}).catch(err => {

});