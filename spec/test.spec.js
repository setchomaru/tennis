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
  return s===''? (A,B):s;
}

console.log(Tennis(0,0));
console.log(Tennis(15,0));
console.log(Tennis(30,0));


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

});
