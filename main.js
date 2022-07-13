
/*
class Animal {
    constructor(edad, sexo, especie) {
        this.edad = edad;
        this.sexo = sexo;
        this.especie = especie;
        this.info = `${this.edad}, ${this.sexo}, ${this.especie}`;

    }
    ataque() {
        console.log('Atacando');
    }
    caminar() {
        console.log('caminar');

    }
    volar() {
        if (this.especie !== 'ave') {
            document.write('no puede volar');
        } else {
            document.write('puede volar');
        }
    }
}

class Perro extends Animal {
    constructor(edad, sexo, especie, raza) {
        super(edad, sexo, especie)
        this.raza = null;
    }
    static ladrar() {
        document.write('ladrando')
    }

    set setRaza(newName) {
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }
}

const hominido = new Animal(1, 'M', 'hominido');
hominido.caminar();
hominido.volar()

const pajaro = new Animal(4, 'F', 'ave');
pajaro.volar();

const cholo = new Perro(4, 'M', 'border-coli')
Perro.ladrar()

cholo.setRaza = 'doberman';
document.write(cholo.raza)
document.write(cholo.getRaza);
*/

class telefono {
    constructor(color, weight, resolutionScreen, resolucionCamera, ram) {
        this.color = color;
        this.weight = weight;
        this.resolutionScreen = resolutionScreen;
        this.resolucionCamera = resolucionCamera;
        this.ram = ram;
        this.encendido = false;

    }
    on() {
        if (this.encendido == false) {
            alert('onnn')
            this.encendido = true
        } else {
            alert('celular apagado');
            this.encendido = false;
        }
    }

    off() {
        if (this.encendido == true) {
            alert('Apagando')
            this.encendido = false;
        } else {
            alert('El telefono ya esta apagado')

        }

    }
    restart() {
        if (this.encendido == true) {
            alert('reiniciando')
        } else {
            alert('celular esta apagado');
        }

    }
    capture() {
        if (this.encendido == true) {
            alert('Tomando foto');
        } else {
            alert('telefono apagado')
        }
    }
    play() {
        if (this.encendido == true) {
            alert('Grabando');
        } else {
            alert('telefono apagado')
        }
    }
    specs() {
        return `
        Colour: <b>${this.color}</b></br>
        weight: <b>${this.weight}</b></br>
        resolutionScreen: <b>${this.resolutionScreen}</b></br>
        resolucionCamera: <b>${this.resolucionCamera}</b></br>
        ram: <b> ${this.ram}</b>
        `;
    }

}
const celular = new telefono('azul', 23, '8pg', '40mpx', '8Gb');
document.write(`${celular.specs()}`)

celular.on()
celular.capture()
celular.play()
celular.restart()





/*

class smartphone extends telefono{
    super(color, weight, resolutionScreen, camera, ram,)

}       */