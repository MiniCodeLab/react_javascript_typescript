const name = "Minicoder";

const quote = "Bienvenido " + name;
console.log("OLD:", quote);

const newQuote = `Bienvenido ${name}`;
console.log("NEW:", newQuote);

const x = 10;
const y = 5;

const resultado = `El resultado de la suma es: ${x + y}`;
console.log(resultado);

const superheroe = {
  name: "Batman",
  suit: "Black",
  city: "Gotham",
  age: 14,
};

const myHTML = `
<div>
    <h2>${superheroe.name}</h2>
    <p>Suit: ${superheroe.suit}</p>
    <p>City: ${superheroe.city}</p>
    <p>${
      superheroe.age > 18 ? "Batman puede conducir" : "Batman no puede conducir"
    }</p>
</div>`;

document.body.innerHTML = myHTML;
