$("#search").click(function (e) {
  e.preventDefault();
  $("#searchText").blur();
  // console.log(e);
  // console.log(this);
  // console.log("Hii");
});

// $(".addNote").click(function() {
//     var note = $("#txt").val();

//     // if($("#txt").val() === null) {
//     //        console.log("Hiii");
//     //    }

//     if($("#txt").val() != '') {
//         $(".addNote").after("<div class='savedNotes'> <textarea class='savedText' disabled>" + note + "</textarea> <div> <button class='edit btn'>Edit</button> <button class='delete btn'>Delete</button> </div> </div>");
//         $("#txt").val("");
//     }

// })

// $(document).keypress(function(e) {
//     var isTxtFocused = $("#txt").is(':focus');

//     if(e.keyCode === 13 && !isTxtFocused) {               // Enter Key's keyCode is 13
//         var note = $("#txt").val();

//         if($("#txt").val() != '') {
//             $(".addNote").after("<div class='savedNotes'> <textarea class='savedText' disabled>" + note + "</textarea> <div> <button class='edit btn'>Edit</button> <button class='delete btn'>Delete</button> </div> </div>");
//             $("#txt").val("");
//         }
//     }
// })

const savedTexts = [];

function xyz(textarea) {
  console.log(textarea.value);
}

function editFunction(i) {
  const textarea = document.getElementById("textarea-" + i);
  textarea.disabled = false;
  textarea.focus();

  textarea.addEventListener("focusout", function () {
    const updatedTextValue = $("#textarea-" + i).val();
    textarea.disabled = true;
    savedTexts[i] = updatedTextValue;
    // textarea.innerText = updatedTextValue;

    xyz(textarea);
  });
}

$(".addNote").click(function () {
  if ($("#txt").val()) {
    let allNotesHtml = "";

    savedTexts.push($("#txt").val());
    console.log(savedTexts);
    for (let i = 0; i < savedTexts.length; i++) {
      allNotesHtml += `<div class="savedNotes"> <textarea class='savedText' id="textarea-${i}" disabled> ${savedTexts[i]} </textarea> <div> <button class='edit btn' onclick="editFunction(${i})"  >Edit</button> <button class="delete btn">Delete</button> </div> </div>`;
      $("#txt").val("");
    }

    console.log("HERE IS THE FOR LOOP");

    const notesWrapper = document.getElementById("notesContainer");

    notesWrapper.innerHTML = allNotesHtml;
  }
});

// $(document).keypress(function(e) {
//     var isTxtFocused = $("#txt").is(':focus');

//     if(e.keyCode === 13 && !isTxtFocused) {               // Enter Key's keyCode is 13
//         savedTexts[i] = $("#txt").val();

//         if($("#txt").val() != '') {
//             $(".addNote").after("<div class='savedNotes'> <textarea class='savedText' disabled>" + savedTexts[i] + "</textarea> <div> <button class='edit btn'>Edit</button> <button class='delete btn'>Delete</button> </div> </div>");
//             $("#txt").val("");
//             i++;
//         }
//     }
// })

// e.preventDefult():
// $("#txt").val();
