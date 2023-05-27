$("#search").click(function(e) {
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

const editFunction = (idx) => {


}

$(".addNote").click(function() {

    // savedTexts[i] = $("#txt").val();    
   

    if($("#txt").val() != '') {

        let allNotesHtml = "";
        savedTexts.push($("#txt").val());
        for(let i = 0; i < savedTexts.length; i++) {
            allNotesHtml += `<div class="savedNotes"> <textarea class='savedText' disabled> ${savedTexts[i]} </textarea> <div> <button class='edit btn' ${onClick= () => editFunction(i)} >Edit</button> <button class='delete btn'>Delete</button> </div> </div>`
            $("#txt").val("");
        }

        const notesWrapper = document.getElementById("notesContainer");
        console.log(allNotesHtml);
        notesWrapper.innerHTML = allNotesHtml;

    }
    
})

















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