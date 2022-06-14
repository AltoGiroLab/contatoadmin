var btn_add = document.getElementById('add');
var btn_buy = document.getElementById('buy');
var form1 = document.getElementById('form1');
var box = document.getElementById('box');

var contador = 1;

btn_add.addEventListener('click', function () {
    contador++;
    createLabel();
    createInput();
});

//<label for="nome">Produto: </label>
function createLabel() {
    var elemento = document.createElement('label');
    elemento.setAttribute('for', 'nome_' + contador);
    elemento.textContent = 'Produto:';

    box.appendChild(elemento);
}

//<input type="text" name="nome" id="nome" autocomplete="off"/>
function createInput() {
    var elemento = document.createElement('input');
    elemento.setAttribute('type', 'text');
    elemento.setAttribute('name', 'nome_' + contador);
    elemento.setAttribute('id', 'nome_' + contador);
    elemento.setAttribute('autocomplete', 'off');

    box.appendChild(elemento);
}

btn_buy.addEventListener('click', function () {
    form1.submit();
});

form1.addEventListener('submit', function () {
    alert(serialize(document.forms[0]));
});