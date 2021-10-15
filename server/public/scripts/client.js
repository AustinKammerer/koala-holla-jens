console.log("js");

$(document).ready(function () {
  console.log("JQ");
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
  $("#viewKoalas").on("click", ".readyBtn", updateTransferStatus);
  $("#addButton").on("click", function () {
    console.log("in addButton on click");
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let boolean;
    if ($("#readyForTransferIn").val() === "true") {
      boolean = true;
    } else if ($("#readyForTransferIn").val() === "false") {
      boolean = false;
    }
    console.log(boolean);
    let koalaToSend = {
      name: $("#nameIn").val(),
      age: $("#ageIn").val(),
      gender: $("#genderIn").val(),
      transfer_ready: boolean,
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
    let id = response[i].id;
    let readyBtn = ``;
    if (!response[i].transfer_ready) {
      readyBtn = `<button class="readyBtn">Ready for Transfer</button>`;
    }
    let entry = $(`
      <tr data-id="${id}">  
        <td>${response[i].name}</td>
        <td>${response[i].age}</td>
        <td>${response[i].gender}</td>
        <td>${response[i].transfer_ready}</td>
        <td>${readyBtn}</td>
        <td id="notesTD">${response[i].notes}</td>
      </tr> `);
    $("#viewKoalas").append(entry);
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

  $.ajax({
    method: "POST",
    url: "/koalas",
    data: newKoala,
  })
    .then(function (response) {
      $("#nameIn").val("");
      $("#ageIn").val("");
      $("#genderIn").val("");
      $("#readyForTransferIn").val("");
      $("#notesIn").val("");
      getKoalas();
    })
    .catch(function (err) {
      console.log("Error", err);
    });
}

function updateTransferStatus() {
  console.log("button clicked");
  let id = $(this).closest("tr").data("id");
  console.log(id);
  $.ajax({
    method: "PUT",
    url: `koalas/${id}`,
  })
    .then(function (response) {
      getKoalas();
    })
    .catch(function (error) {
      console.log(error);
    });
}
