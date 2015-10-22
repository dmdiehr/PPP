describe('igpayAtinlay', function(){
  it("will add 'ay' to the end of words that begin with a vowel", function(){
    expect(igpayAtinlay('example')).to.equal('exampleay');
  });
});

describe('igpayAtinlay', function(){
  it("for words that begin with consonants, it will remove the beginning consonants and add those consonants, plus 'ay' to the end of the word", function(){
    expect(igpayAtinlay('standard')).to.equal('andardstay');
  });
});
