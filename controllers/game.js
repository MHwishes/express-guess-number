const request = require('request');

const getAnswer = {
  baseUrl: 'http://localhost:3000',
  url: '/generate',
  method: 'GET',
  json: true
};


const isUnique = (item, index, array) => {
  return array.lastIndexOf(item) === index;
};

request(getAnswer, function (error, response, body) {
  let chance = 6;
  const answer = body;
  console.log('Welcome!\n');
  console.log(`Please input your number(${chance}):`);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (input) => {
    const validate = input.split('').every(isUnique);

    if (!validate) {
      console.log('Cannot input duplicate numbers!');
      // this.ask();
      console.log(`Please input your number(${chance}):`);
    } else {



      //const result = CompareNumber.compare(input, this.answer);
      const compare = {
        baseUrl: 'http://localhost:3000',
        url: '/compare',
        method: 'POST',
        json: true,
        body: {
          input: input,
          answer: answer.toString()
        }
      };

      request(compare, function (error, response, body) {

        if (body === '4A0B') {
          console.log('Congratulations!');
          process.exit();
        } else {
          console.log(body);
          chance--;
          if (chance === 0) {
            console.log('Game Over\n');
            console.log(`Answer:${answer}`);
            process.exit();
          } else {

            console.log(`Please input your number(${chance}):`);
          }
        }
      })

    }
  });

});

module.exports=request;
