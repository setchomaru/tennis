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
//ScoreB
this.ScoreB=function(){
if(B===0)
{
B=15;
}
else if(B===15)
{
B=30;
}

}


this.echo = function(){
if(A===0&&B===0){
    return'Love-Love';

}
if(A===15&&B===0){
  return'Fifteen-Love';
}
if(A===30&&B===0){
  return'Thirty-Love';
}

if(A===40&&B===0){
return'forty-Love';
}
if(A===50&&B===0){
return'A winner';
}
}
//ScoreB
this.echoB = function(){
if(A===0&&B===0){
    return'Love-Love';
}
if(A===0&&B===15){
  return'Love-Fifteen';
}
if(A===0&&B===30){
  return'Love-Thirty';
}
}
}


describe('tennis game',function(){
var tennis = new Tennis();
it('should echo "Love-Love"when starting the game',function(){

tennis.start();

expect(tennis.echo()).toEqual('Love-Love');
})


it('should echo "Fifteen-Love"when A Rated',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('Fifteen-Love');
})

it('should echo "Thirty-Love"when A Rated',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('Thirty-Love');
})

it('should echo "forty-Love"when A Rated',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('forty-Love');
})
it('should echo "A winner"when A winner',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('A winner');
})
});


//ScoreB

describe('tennis game',function(){
var tennisB = new Tennis();
it('should echo "Love-Love"when starting the game',function(){

tennisB.start();                      //B=0-0

expect(tennisB.echoB()).toEqual('Love-Love');
})
it('should echo "Love-Fifteen" when B Rated',function(){

tennisB.ScoreB();                     //B=0-15

expect(tennisB.echoB()).toEqual('Love-Fifteen');
})
it('should echo "Love-Thirty" when B Rated',function(){

tennisB.ScoreB();                     //B=0-30

expect(tennisB.echoB()).toEqual('Love-Thirty');
})

});
