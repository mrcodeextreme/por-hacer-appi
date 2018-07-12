const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza completamente estado de tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de tarea por hacer'
        }
    })
    .help()
    .argv;


module.exports = { argv }