class CompareNumber {

  static compare(req, res) {
 // static compare(req) {
    
     const inputs = req.body.input.split('');
     const answers = req.body.answer.split('');
    
    // const inputs = input.split('');
    // const answers =answer.split('');
    
    const rightDigitCount = inputs.filter(c => answers.includes(c)).length;
    const x = inputs.filter(c => answers.indexOf(c) === inputs.indexOf(c)).length;
    const y = rightDigitCount - x;

    //return `${x}A${y}B`;
    
    res.send(`${x}A${y}B`);
    
  }
}

module.exports = CompareNumber;
