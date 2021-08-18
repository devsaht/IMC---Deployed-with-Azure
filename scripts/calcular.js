
const btnCalcular = document.querySelector('.btn-calcular');



const leerDatos = () => {
    const talla = document.getElementsByName('talla')[0].value;
    const peso = document.getElementsByName('peso')[0].value;

    calcularIMC(talla, peso);
}

const calcularIMC = (talla, peso) =>{
    const textResultado = document.querySelector('.es-resultado');


    const formulario = document.querySelector('.form-box');
    const nuevo = document.createElement('div');

    var resultado = peso/Math.pow(talla,2);

    resultado = Math.round(resultado);


    var resultText ;
    if (resultado <25){
        resultText  = 'Estas en el rango normal';
    }
    else if (resultado <30){
        resultText  = 'Tienes algo de sobrepeso';
    }
    else if (resultado <30){
        resultText  = 'Tienes una obesidad moderada';
    }
    else if (resultado <30){
        resultText  = 'Tienes una obesidad severa';
    }
    else{
        resultText  = 'Estás corriendo peligro';
    }
    textResultado.textContent = 'SU IMC ES: '+resultado+' -----  '+resultText;

    // nuevo.textContent = resultText;
    // formulario.appendChild(nuevo);
    // suponiendo resultado valido

    // const resTalla = document.querySelector('.res-talla');
    // const resPeso = document.querySelector('.res-peso');
    // const resIMC = document.querySelector('.res-imc');
    // const resCat = document.querySelector('.res-cat');
    // const resRecom = document.querySelector('.res-recom');

    // resTalla.textContent = talla;
    // resPeso.textContent = peso;
    // resIMC.textContent = resultado;
    // resCat.textContent = 'tu categoria es: ';
    // resRecom.textContent = 'Tu puedes mejorar';

    // calcContent.classList.toggle('visibilidad');
    // calcContent.classList.toggle('no-visibilidad');

    // calcRes.classList.toggle('no-visibilidad');
    // calcRes.classList.toggle('visibilidad');



}

btnCalcular.addEventListener('click',() => {
    console.log('hello');
    leerDatos();
})
