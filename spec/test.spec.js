function Tennis(){

    var A;
    var B;

  this.start=function(){
    A=0;
    B=0;


  }

  this.ScoreB=function(){
if(B===0)
{
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

}
}


describe('tennis game',function(){
  var tennis = new Tennis();
it('should echo "Love-Love"when starting the game',function(){

tennis.start();

expect(tennis.echo()).toEqual('Love-Love');
})

});
