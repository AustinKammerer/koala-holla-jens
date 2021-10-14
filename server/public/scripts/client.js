console.log("js");

$(document).ready(function () {
  console.log("JQ");
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
  $("#addButton").on("click", function () {
    console.log("in addButton on click");
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $("#nameIn").val(),
      age: $("#ageIn").val(),
      gender: $("#genderIn").val(),
      readyForTransfer: $("#readyForTransferIn").val(),
      notes: $("#notesIn").val(),
    };
    // call saveKoala with the new obejct
    console.log(koalaToSend);
    saveKoala(koalaToSend);
  });
}

function renderKoalas(response) {
  $("#viewKoalas").empty();
  for (let i = 0; i < response.length; i++) {
    $("#viewKoalas").append(`
      <tr>  
        <td>${response[i].name}</td>
        <td>${response[i].age}</td>
        <td>${response[i].gender}</td>
        <td>${response[i].transfer_ready}</td>
        <td>${response[i].notes}</td>
      </tr>
      `);
  }
}

function getKoalas() {
  console.log("in getKoalas");
  // ajax call to server to get koalas
  $.ajax({
    method: "GET",
    url: "/koalas",
  })
    .then(function (response) {
      console.log(response);
      renderKoalas(response);
    })
    .catch(function (error) {
      console.log(error);
    });
} // end getKoalas

function saveKoala(newKoala) {
  console.log("in saveKoala", newKoala);
  // ajax call to server to get koalas
}
