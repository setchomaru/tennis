function Tennis(){
    this.start  = function () {
    };
    this.echo = function(){
      return 'Love - Love';
    };
};

describe('Tennis game', function(){
  it('Should echo "Love - Love" when starting the game', function(){
    var tennis = new Tennis(0,0);
    expect(tennis.echo()).toEqual('Love - Love');
  });
  });
