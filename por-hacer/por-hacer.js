/*

*/

const fs = require('fs');

let listadoPorHacer = [];

const guardarBDD = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se grabo', err);
    });

}

const cargarBDD = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (e) {
        listadoPorHacer = [];
    }
}


const crear = (descripcion) => {

    cargarBDD();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarBDD();
    return porHacer;
}

const getListado = () => {
    arr = [];
    cargarBDD();
    arr = listadoPorHacer;
    return arr;
}

const actualizar = (descripcion, completado = true) => {


    cargarBDD();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBDD();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {


    cargarBDD();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.unshift(index);
        listadoPorHacer.shift();
        guardarBDD();
        return true;
    } else {
        return false;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}