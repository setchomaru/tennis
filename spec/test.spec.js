function Tennis(A,B){
  let s ='';
if(A===0&&B===0){
      s+='Love-Love';

  }
  if(A===15&&B===0){
    s+='Fifteen-Love'
  }
  if(A===30&&B===0){
    s+='Thirty-Love'
  }

  if(A===40&&B===0){
    s+='forty-Love'
  }
  if(A===50&&B===0){
    s+='fifty-Love'
  }
  if(A===0&&B===15){
    s+='Love-fifteen'
  }
  if(A===0&&B===30){
    s+='Love-Thirt'
  }
  if(A===0&&B===40){
    s+='Love-forty'
  }
  if(A===0&&B===50){
    s+='Love-fifty'
  }
  if(A===15&&B===15){
    s+='fifteen-fifteen'
  }
  if(A===30&&B===30){
    s+='thiry-thiry'
  }

  return s===''? (A,B):s;
}

console.log(Tennis(0,0));
console.log(Tennis(15,0));
console.log(Tennis(30,0));
console.log(Tennis(40,0));
console.log(Tennis(50,0));
console.log(Tennis(0,15));
console.log(Tennis(0,30));
console.log(Tennis(0,40));
console.log(Tennis(0,50));
console.log(Tennis(15,15));
console.log(Tennis(30,30));

describe('tennis game',function(){
it('should echo "Love-Love"when starting the game',function(){
var tennis = Tennis(0,0);

expect(tennis).toEqual('Love-Love');

});

it('should echo "Fifteen-Love"when starting the game',function(){
var tennis = Tennis(15,0);

expect(tennis).toEqual('Fifteen-Love');

});

it('should echo "Thirty-Love"when starting the game',function(){
var tennis = Tennis(30,0);

expect(tennis).toEqual('Thirty-Love');

});
it('should echo "forty-Love"when starting the game',function(){
var tennis = Tennis(40,0);

expect(tennis).toEqual('forty-Love');

});
it('should echo "fifty-Love"when starting the game',function(){
var tennis = Tennis(50,0);

expect(tennis).toEqual('fifty-Love');

});

it('should echo "Love-fifteen"when starting the game',function(){
var tennis = Tennis(0,15);

expect(tennis).toEqual('Love-fifteen');

});

it('should echo "Love-Thirt"when starting the game',function(){
var tennis = Tennis(0,30);

expect(tennis).toEqual('Love-Thirt');

});

it('should echo "Love-forty"when starting the game',function(){
var tennis = Tennis(0,40);

expect(tennis).toEqual('Love-forty');

});

it('should echo "Love-fifty"when starting the game',function(){
var tennis = Tennis(0,50);

expect(tennis).toEqual('Love-fifty');

});
it('should echo "fifteen-fifteen"when starting the game',function(){
var tennis = Tennis(15,15);

expect(tennis).toEqual('fifteen-fifteen');

});

it('should echo "thiry-thiry"when starting the game',function(){
var tennis = Tennis(30,30);

expect(tennis).toEqual('thiry-thiry');

});
});
