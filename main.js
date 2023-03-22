// Utilizamos el DOM
// Informacion sobre el fundador
const botonFundador = document.getElementById('botonFundador')
const letreroPrincipal = document.getElementById('letreroPrincipal')
const iconoFundador = document.getElementById('iconoFundador')

botonFundador.addEventListener('click', mostrarLetreroPrincipal)

function mostrarLetreroPrincipal() {
    letreroPrincipal.classList.toggle('mostrar')
    botonEmpresa.classList.toggle('disable')
    botonRelaciones.classList.toggle('disable')
    botonPresente.classList.toggle('disable')
    botonFundador.classList.toggle('disable')
}

iconoFundador.addEventListener('click', volverAtrasPrincipal)

function volverAtrasPrincipal() {
    letreroPrincipal.classList.remove('mostrar')
    botonEmpresa.classList.toggle('disable')
    botonRelaciones.classList.toggle('disable')
    botonPresente.classList.toggle('disable')
    botonFundador.classList.toggle('disable')
}

// Informacion sobre la empresa

const botonEmpresa = document.getElementById('botonEmpresa')
const letreroEmpresa = document.getElementById('letreroEmpresa')
const iconoEmpresa = document.getElementById('iconoEmpresa')

botonEmpresa.addEventListener('click', mostrarLetreroEmpresa)

function mostrarLetreroEmpresa() {
    letreroEmpresa.classList.toggle('mostrar')
    botonFundador.classList.toggle('disable')
    botonRelaciones.classList.toggle('disable')
    botonPresente.classList.toggle('disable')
    botonEmpresa.classList.toggle('disable')
}

iconoEmpresa.addEventListener('click', volverAtrasEmpresa)

function volverAtrasEmpresa() {
    letreroEmpresa.classList.remove('mostrar')
    botonRelaciones.classList.toggle('disable')
    botonPresente.classList.toggle('disable')
    botonFundador.classList.toggle('disable')
    botonEmpresa.classList.toggle('disable')
}

// Otras empresas relacionadas
const botonRelaciones = document.getElementById('botonEmpresasRelacionadas')
const LetreroEmpresasRelacionadas = document.getElementById('LetreroEmpresasRelacionadas')
const iconoEmpresasRelacionadas = document.getElementById('iconoEmpresasRelacionadas')

botonRelaciones.addEventListener('click', mostrarletreroRelaciones)

function mostrarletreroRelaciones() {
    LetreroEmpresasRelacionadas.classList.toggle('mostrar')
    botonFundador.classList.toggle('disable')
    botonEmpresa.classList.toggle('disable')
    botonPresente.classList.toggle('disable')
    botonRelaciones.classList.toggle('disable')
}

iconoEmpresasRelacionadas.addEventListener('click', volverAtrasRelaciones)


function volverAtrasRelaciones() {
    LetreroEmpresasRelacionadas.classList.remove('mostrar')
    botonRelaciones.classList.toggle('disable')
    botonPresente.classList.toggle('disable')
    botonFundador.classList.toggle('disable')
    botonEmpresa.classList.toggle('disable')
}

// El presente de la empresa
const botonPresente = document.getElementById('botonPresente')
const letreroPresente = document.getElementById('letreroPresente')
const iconoPresente = document.getElementById('iconoPresente')

botonPresente.addEventListener('click',mostrarLetreroPresente)

function mostrarLetreroPresente() {
    letreroPresente.classList.toggle('mostrar')
    botonFundador.classList.toggle('disable')
    botonEmpresa.classList.toggle('disable')
    botonRelaciones.classList.toggle('disable')
    botonPresente.classList.toggle('disable')
}

iconoPresente.addEventListener('click', volverAtrasPresente)

function volverAtrasPresente() {
    letreroPresente.classList.remove('mostrar')
    botonRelaciones.classList.toggle('disable')
    botonPresente.classList.toggle('disable')
    botonFundador.classList.toggle('disable')
    botonEmpresa.classList.toggle('disable')
}