class GrandParent {
    cook() {
        return " I can Cook";
    }
}
class Parent extends GrandParent {
    drive() {
        return "I can Drive";
    }
}
class You extends Parent {
    playGuitar() {
        return "I can Plaiy Guitar";
    }
}

let me = new You();
console.log(me.playGuitar());
console.log(me.drive())
console.log(me.cook());