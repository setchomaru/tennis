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
}

<<<<<<< HEAD
this.echoB = function(){
  if(A===0&&B===15){
    return'Love-Fifteen';
=======
<<<<<<< HEAD
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

=======
>>>>>>> d2d9d8c6028fbdea1d37d6371d5d4e611ba5062b
  }
  if(A===0&&B===30){
    return'Love-Thirty';
  }
>>>>>>> 3fb3edc74e23c2f4e021b3fd1601c0706c1b936a

if(A===0&&B===40){
  return'Love-Forty';
  }
}

this.echo = function(){
<<<<<<< HEAD
if(A===0&&B===0){
    return'Love-Love';

}
if(A===15&&B===0){
  return'Fifteen-Love';
}
if(A===30&&B===0){
  return'Thirty-Love';
}
=======
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
<<<<<<< HEAD
=======
=======
  if(A===50&&B===0){
  return'A winner'
>>>>>>> d59609597faa583f80d5ebd915c3a891243fa3ca
  }
else if(B===15)
{
    return'Fifteen-Love'
}

>>>>>>> 3fb3edc74e23c2f4e021b3fd1601c0706c1b936a
>>>>>>> d2d9d8c6028fbdea1d37d6371d5d4e611ba5062b

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

expect(tennis.echo()).toEqual('Love-Love'); //A=0-0
})


it('should echo "Fifteen-Love"when get A',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('Fifteen-Love');//A=15-0
})

it('should echo "Thirty-Love"when get A',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('Thirty-Love');//A=30-0
})

it('should echo "forty-Love"when get A',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('forty-Love');//A=40-0
})
it('should echo "A winner"when A winner',function(){

tennis.ScoreA();

expect(tennis.echo()).toEqual('A Winner'); //A win
})

});

describe('tennis game',function(){
  var tennis = new Tennis();
it('should echo "Love-Fifteen"when  Get ScoreB',function(){


tennis.ScoreB();

expect(tennis.echoB()).toEqual('Love-Fifteen'); //B== 15-0
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
it('should echo "Love-Forty" when B Rated',function(){

tennisB.ScoreB();

expect(tennisB.echoB()).toEqual('Love-Forty'); // B=0-40
})
});
