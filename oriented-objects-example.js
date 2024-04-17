// Definição da classe Carro
class Carro {
  constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.ligado = false;
  }

  ligar() {
      if (!this.ligado) {
          console.log("O carro está ligado.");
          this.ligado = true;
      } else {
          console.log("O carro já está ligado.");
      }
  }

  desligar() {
      if (this.ligado) {
          console.log("O carro está desligado.");
          this.ligado = false;
      } else {
          console.log("O carro já está desligado.");
      }
  }

  getInfo() {
      return `Carro: ${this.marca} ${this.modelo} - Ano ${this.ano}`;
  }
}

// Criando instâncias da classe Carro
let firstCar = new Carro("Toyota", "Corolla", 2020);
let carro2 = new Carro("Honda", "Civic", 2019);

// Usando métodos da classe Ca firstCar.ligar(); // Saída: O carro está ligado.
carro2.desligar(); // Saída: O carro já está desligado.

console.log(firstCar.getInfo()); // Saída: Carro: Toyota Corolla - Ano 2020
console.log(carro2.getInfo()); // Saída: Carro: Honda Civic - Ano 2019
