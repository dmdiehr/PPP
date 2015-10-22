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

describe('igpayAtinlay', function(){
  it("when a 'u' follows a 'q' treat the 'u' as a consonant", function(){
    expect(igpayAtinlay('squeal')).to.equal('ealsquay');
  });
});

describe('igpayAtinlay', function(){
  it("will 'y' as a vowel if it is not the first letter", function(){
    expect(igpayAtinlay('psychology')).to.equal('ychologypsay');
  });
});
