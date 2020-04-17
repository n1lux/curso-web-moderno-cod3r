// Deconstructurin objects

const showData = ({ name, age }) => {
    console.log('name', name)
    console.log('age', age)
}

const deconstructData = (data) => {
    const { name, age } = data;
    const { name: n = 'teste', age: a } = data;
    const { endereco: { rua, bairro } } = data;


    console.log('name', name);
    console.log('age', age);
    console.log(n, a);
    console.log(rua, bairro);
}


const teste = {
    name: "nome",
    age: "17",
    endereco: {
        rua: "teste",
        bairro: "jardim"
    }
}

// show(teste);
deconstructData(teste);

