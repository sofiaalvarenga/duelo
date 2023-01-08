//ESTRUCTURA DEL JUEGO
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        //reduce target resiliance by power
        if (target instanceof Unit) {
            target.resilience -= this.power;
        } else {
            throw new Error('Target must be a unit!');
        }
    }
}

//Unidad
const ninja1 = new Unit('ninja cinturon Rojo', 3, 3, 4);
const ninja2 = new Unit('ninja cinturon Negro', 4, 5, 4);
console.log(ninja1, ninja2);

//Tarjeta de Efecto
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.text = text;
        this.magnitude = magnitude;
    }
    attack(target) {
        if (target instanceof Unit) {
            if (this.name == "Algoritmo Dificil") {
                target.resilience += 3; //aumenta en 3
            } else if (this.name == "Rechazo de promesa no manejado") {
                target.resilience -= 2; //disminuye en 2
            } else if (this.name == "Programacion en pareja") {
                target.power += 2;//aumenta en 2
            }
        } else {
            throw new Error('Target must be a unit!');
        }
    }
}
const effect1 = new Effect("Algoritmo dificil", 2, "aumentar la resistencia del objetivo en 3", "resilience", 3);
const effect2 = new Effect("Rechazo de promesa no manejado", 1, "reducir la resilienvia del objetivo en 2", "resilience", 2);
const effect3 = new Effect("Programacion en pareja", 3, "aumentar el poder del objetivo en 2", "power", 2);

console.log(effect1, effect2, effect3);