//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeSFCharacter(punch,kick,catchPhrase,specialMove){
    this.punch = punch
    this.kick = kick
    this.catchPhrase = catchPhrase
    this.specialMove = specialMove
    this.taunt = function(){
        console.log(`You can't handle my ${this.specialMove}`);
    }
    this.winning = function(){
        console.log(`Haha! ${catchPhrase}`);
    }
    this.dash = function(){
        console.log('Whooooop, missed me!');
    }
}

let ryu = new MakeSFCharacter('high', 'high', 'GET OVER HERE', 'HADDDDDDDUUUKEN')


function MakeSFCharacter2(punch, kick, catchPhrase, specialMove){
    this.punch = punch
    this.kick = kick
    this.catchPhrase = catchPhrase
    this.specialMove = specialMove
    this.taunt = function(){
        console.log(`You'll die from my ${this.specialMove}`);
    }
    this.winning = function(){
        console.log(`You disgust me. Get up ${this.catchPhrase}`);
    }
    this.dash = function(){
        console.log(`You'll never catch me`);
    }
}

let akuma = new MakeSFCharacter2('high', 'high', 'PEASANT!!!!!!!', 'NEGATIVE HADUKEN!!!')