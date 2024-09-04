//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function TonyHawkCharacter(chName, chStance, chSponsor, chMove){
    this.characterName = chName
    this.stance = chStance
    this.sponsor = chSponsor
    this.specialMove = chMove

    // these next ones are methods
    this.flip = function(){
        console.log('Kickflip')
    }
    this.taunt = function() {
        console.log(`Don't make me use my ${this.specialMove}`)
    }

    this.grab = function(){
        console.log('MELON GRABBBB')
    }
}


let kareemCampell = new TonyHawkCharacter('Kareem', 'Goofy', 'Element', 'Ghetto Bird')