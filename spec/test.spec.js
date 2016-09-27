function Tennis(){

    var A;
    var B;

  this.start=function(){
    A=0;
    B=0;


  }

  this.ScoreA=function(){
if(A===0)
{
  A=15;

}
else if(A===15)
{
  A=30;

}
else if(A===30)
{
  A=40;

}
else if(A===40)
{
  A=50;

}

  }

this.echo = function(){
  if(A===0&&B===0){
      return'Love-Love';

  }
  if(A===15&&B===0){
    return'Fifteen-Love'
  }
  if(A===30&&B===0){
    return'Thirty-Love'
  }

  if(A===40&&B===0){
  return'forty-Love'
  }
  if(A===50&&B===0){
  return'A Winner'
  }

}
}


describe('tennis game',function(){
  var tennis = new Tennis();
it('should echo "Love-Love"when starting the game',function(){

tennis.start();

expect(tennis.echo()).toEqual('Love-Love');
})


it('should echo "Fifteen-Love"when Get ScoreA',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('Fifteen-Love');
})

it('should echo "Thirty-Love"when Get ScoreA',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('Thirty-Love');
})

it('should echo "forty-Love"when Get ScoreA',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('forty-Love');
})

it('should echo "A Winner "when A Winner',function(){


tennis.ScoreA();

expect(tennis.echo()).toEqual('A Winner');
})
it('should echo "B Winner "when A Winner',function(){


tennis.ScoreB();

expect(tennis.echo()).toEqual('B Winner');
})
});
