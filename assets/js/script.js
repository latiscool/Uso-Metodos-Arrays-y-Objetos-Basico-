var radiologia = [
  {
    hora: '11:00',
    especialista: 'IGNACIO SCHULZ',
    paciente: 'FRANCISCA ROJAS',
    rut: '9878782-1',
    prevision: 'FONASA',
  },
  {
    hora: '11:30',
    especialista: 'FEDERICO SUBERCASEAUX',
    paciente: 'PAMELA ESTRADA',
    rut: '15345241-3',
    prevision: 'ISAPRE',
  },
  {
    hora: '15:00',
    especialista: 'FERNANDO WURTHZ',
    paciente: 'ARMANDO LUNA',
    rut: '16445345-9',
    prevision: 'ISAPRE',
  },
  {
    hora: '15:30',
    especialista: 'ANA MARIA GODOY',
    paciente: 'MANUEL GODOY',
    rut: '17666419-0',
    prevision: 'FONASA',
  },
  {
    hora: '16:00',
    especialista: 'PATRICIA SUAZO',
    paciente: 'RAMON ULLOA',
    rut: '14989389-K',
    prevision: 'FONASA',
  },
];

var traumatologia = [
  {
    hora: '8:00',
    especialista: 'MARIA PAZ ALTUZARRA',
    paciente: 'PAULA SANCHEZ',
    rut: '15554774-5',
    prevision: 'FONASA',
  },
  {
    hora: '10:00',
    especialista: 'RAUL ARAYA',
    paciente: 'ANGÉLICA NAVAS',
    rut: '15444147-9',
    prevision: 'ISAPRE',
  },
  {
    hora: '10:30',
    especialista: 'MARIA ARRIAGADA',
    paciente: 'ANA KLAPP',
    rut: '17879423-9',
    prevision: 'ISAPRE',
  },
  {
    hora: '11:00',
    especialista: 'ALEJANDRO BADILLA',
    paciente: 'FELIPE MARDONES',
    rut: '1547423-6',
    prevision: 'ISAPRE',
  },
  {
    hora: '11:30',
    especialista: 'CECILIA BUDNIK',
    paciente: 'DIEGO MARRE',
    rut: '16554741-K',
    prevision: 'FONASA',
  },
  {
    hora: '12:00',
    especialista: 'ARTURO CAVAGNARO',
    paciente: 'CECILIA MENDEZ',
    rut: '9747535-8',
    prevision: 'ISAPRE',
  },
  {
    hora: '12:30',
    especialista: 'ANDRES KANACRI',
    paciente: 'MARCIAL SUAZO',
    rut: '11254785-5',
    prevision: 'ISAPRE',
  },
];

var dental = [
  {
    hora: '8:30',
    especialista: 'ANDREA ZUÑIGA',
    paciente: 'MARCELA RETAMAL',
    rut: '11123425-6',
    prevision: 'ISAPRE',
  },
  {
    hora: '11:00',
    especialista: 'MARIA PIA ZAÑARTU',
    paciente: 'ANGEL MUÑOZ',
    rut: '9878789-2',
    prevision: 'ISAPRE',
  },
  {
    hora: '11:30',
    especialista: 'SCARLETT WITTING',
    paciente: 'MARIO KAST',
    rut: '7998789-5',
    prevision: 'FONASA',
  },
  {
    hora: '13:00',
    especialista: 'FRANCISCO VON TEUBER',
    paciente: 'KARIN FERNANDEZ',
    rut: '18887662-K',
    prevision: 'FONASA',
  },
  {
    hora: '13:30',
    especialista: 'EDUARDO VIÑUELA',
    paciente: 'HUGO SANCHEZ',
    rut: '17665461-4',
    prevision: 'FONASA',
  },
  {
    hora: '14:00',
    especialista: 'RAQUEL VILLASECA',
    paciente: 'ANA SEPULVEDA',
    rut: '14441281-0',
    prevision: 'ISAPRE',
  },
];

//PROBLEMA 1, AGREGAR LAS SIGUIENTES HORAS:
var trauma1 = {
  hora: '09:00',
  especialista: 'Rene poblete',
  paciente: 'Ana gellona',
  rut: '13123329-7',
  prevision: 'ISAPRE',
};
var trauma2 = {
  hora: '09:30',
  especialista: 'Maria solar',
  paciente: 'Ramiro andrade',
  rut: '12221451-K',
  prevision: 'ISAPRE',
};
var trauma3 = {
  hora: '10:30',
  especialista: 'Raul loyola',
  paciente: 'Carmen isla',
  rut: '10112348-3 ',
  prevision: 'ISAPRE',
};
var trauma4 = {
  hora: '11:00',
  especialista: 'Antonio larenas',
  paciente: 'Pablo loayza',
  rut: '13453234-1',
  prevision: 'ISAPRE',
};
var trauma5 = {
  hora: '11:30',
  especialista: 'Matias aravena',
  paciente: 'Susana poblete',
  rut: '14345656-6',
  prevision: 'fonasa',
};
traumatologia.push(trauma1, trauma2, trauma3, trauma4, trauma5);

// PUBLICAR NUEVA TABLA TRAUMATOLOGIA

var datos_trauma =
  '  <thead> <tr> <th scope="col">HORA</th>  <th scope="col">ESPECIALISTA</th>  <th scope="col">PACIENTE</th>  <th scope="col">RUT</th> <th scope="col">PREVISION</th>  </tr></thead>';

for (var j = 0; j < traumatologia.length; j++) {
  datos_trauma += `<tr>
          <td>${traumatologia[j].hora}</td>
          <td>${traumatologia[j].especialista}</td>
          <td>${traumatologia[j].paciente}</td>
          <td>${traumatologia[j].rut}</td>
          <td>${traumatologia[j].prevision}</td>
      </tr> `;
}

document.getElementById('trauma-tabla').innerHTML = datos_trauma;

// ************************************************************
// PROBLEMA 2 ELIMINAR EL PRIMER Y ULTIMO ELEMENTO DE RADIOLOGIA
// *************************************************************
radiologia.shift();
radiologia.pop();
var datos_radio =
  '  <thead> <tr> <th scope="col">HORA</th>  <th scope="col">ESPECIALISTA</th>  <th scope="col">PACIENTE</th>  <th scope="col">RUT</th> <th scope="col">PREVISION</th>  </tr></thead>';

for (var i = 0; i < radiologia.length; i++) {
  datos_radio += `<tr>
          <td>${radiologia[i].hora}</td>
          <td>${radiologia[i].especialista}</td>
          <td>${radiologia[i].paciente}</td>
          <td>${radiologia[i].rut}</td>
          <td>${radiologia[i].prevision}</td>
      </tr>`;
}

document.getElementById('radio-tabla').innerHTML = datos_radio;

// ***************************************************************************************
// PROBLEMA 3 : IMPRIMIR EL LISTADO DE CONSULTAS MEDICAS DE DENTAL MEDIANTE DOM SEPARADO POR GUION
//Y CADA FILA SEPARADA POR UN PARRAFO
// *************************************************************************************************

var fap = '';

for (let i = 0; i < dental.length; i++) {
  fap += `<tr><td>${dental[i].hora} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].rut} - ${dental[i].prevision}</td></tr>`;
}

document.getElementById('p-dental').innerHTML = fap;

// *********************************************************************************
// PROBLEMA 4: LISTA ATENCION MEDICO DE TODOS LOS PACIENTES QUE SE ATENDIERON EN EL DIA
// **********************************************************************************

var listaConcat = traumatologia.concat(radiologia, dental);

var text = '';
var listaMap = listaConcat.map(function (param) {
  return param.paciente;
});

listaMap.forEach(myFunction);

function myFunction(item) {
  text += '<li>' + item + '</li>';
}

document.getElementById('ol-li').innerHTML = text;

// ************************************************************************
// PROBLEMA 5: FILTRAR LOS PACIENTES ISAPRES QUE FUERON ATENDIDOS EN DENTAL
// **********************************************************************

var isapre = dental.filter(function (params2) {
  return params2.prevision === 'ISAPRE';
});
var vuelta2 = '';
function obtenerPac2(item2) {
  return (vuelta2 += '<li>' + item2.paciente + '-' + item2.prevision + '</li>');
}
isapre.map(obtenerPac2).forEach(function (m) {
  return (document.getElementById('atendidoIsapre').innerHTML = m);
});

// ***************************************************************************
// PROBLEMA 6: FILTRAR LOS PACIENTES FONASA QUE FUERON ATENDIDOS EN RADIOLOGIA
// ****************************************************************************

var fonosa = traumatologia.filter(function (params) {
  return params.prevision === 'FONASA';
});
var vuelta = '';
function obtenerPac(item) {
  return (vuelta += '<li>' + item.paciente + '-' + item.prevision + '</li>');
}
fonosa.map(obtenerPac).forEach(function (m) {
  return (document.getElementById('atendidoFonasa').innerHTML = m);
});
