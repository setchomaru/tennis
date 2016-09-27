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


  this.ScoreB=function(){

  if(B===0){
    B=15;
  }
  else if(B===15)
  {
    B=30;
  }
  else if(B===30)
  {
    B=40;

  }
  else if(B===40)
  {
    B=50;

  }
}

this.echo = function(){
  if(A===0&&B===0){
      return'Love-Love';
}
else if(A===15&&B===0){
    return'Fifteen-Love'
  }
   else if(A===30&&B===0){
    return'Thirty-Love'
  }

 else if(A===40&&B===0){
  return'forty-Love'
  }
 else if(A===50&&B===0){
  return'A Winner'
  }
else if(B===15)
{
    return'Fifteen-Love'
}


}
}


describe('tennis game',function(){
  var tennis = new Tennis();
it('should echo "Love-Love"when starting the game',function(){

tennis.start();

expect(tennis.echo()).toEqual('Love-Love'); //A=0-0
})


it('should echo "Fifteen-Love"when Get ScoreA',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('Fifteen-Love');//A=15-0
})

it('should echo "Thirty-Love"when Get ScoreA',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('Thirty-Love');//A=30-0
})

it('should echo "forty-Love"when Get ScoreA',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('forty-Love');//A=40-0
})

it('should echo "A Winner "when A Winner',function(){


tennis.ScoreA();

expect(tennis.echo()).toEqual('A Winner'); //A win
})

it('should echo "Fifteen-Love"when  Get ScoreB',function(){


tennis.ScoreB();

expect(tennis.echo()).toEqual('Fifteen-Love'); //B== 15-0
})

});
