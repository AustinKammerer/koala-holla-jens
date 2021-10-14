console.log('js');

$(document).ready(function () {
  console.log('JQ');
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $('#addButton').on('click', function () {
    console.log('in addButton on click');
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    };
    // call saveKoala with the new obejct
    console.log(koalaToSend);
    saveKoala(koalaToSend);
  });
}
function renderKoalas() {
  $.ajax({
    method: 'GET',
    url: '/koala'
  }).then(function (response) {
    for (let i = 0; i < response.length; i++) {
      $("#viewKoalas").append(`
      <tr>  
        <td>${response.name}</td>
        <td>${response.age}</td>
        <td>${response.gender}</td>
        <td>${response.readyForTransfer}</td>
        <td>${response.notes}</td>
      </tr>
      `)
    }
    console.log(response);
  }).catch(function (error) {
    console.log(error)
  })
}

function getKoalas() {
  console.log('in getKoalas');
  // ajax call to server to get koalas
  renderKoalas();
} // end getKoalas

function saveKoala(newKoala) {
  console.log('in saveKoala', newKoala);
  // ajax call to server to get koalas

}


