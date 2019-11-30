let socket = new WebSocket("ws://95.216.142.123:8080");

function createCard(name, date, text) {
    return `
        <div class="feed-card">
        <div class="card-name">
        <img src="https://img.icons8.com/nolan/32/000000/bug.png">
        <span class="card-header">${name}</span>
        </div>
        <div class="card-date">${date}</div>
        <div class="line"></div>
        <div class="card-text">${text}</div>
        </div>`
    }

socket.onmessage = function (event) {
    let msg = JSON.parse(event.data);
    if(msg.type == "all"){
        msg.message.forEach(element => {
            let div = createCard(element.name, element.date, element.text);
            $("#feed-cards").append(div);
        });
    }
    else{
        let div = createCard(msg.message.name, msg.message.date, msg.message.text);
        $("#feed-cards").append(div);

    }
  }

$(document).ready(function() {
    $(".feed-input").on("input", function(){
        let username = $("#feed-username").val();
        let text = $("#feed-textarea").val();
        if(username === "" || text === ""){
            $("#feed-btn").attr("disabled", true)
        }
        else{
            $("#feed-btn").attr("disabled", false)
        }
    });

    $("#feed-btn").click(function(){
        console.log("click")
        let message = {
            name: $("#feed-username").val(),
            text: $("#feed-textarea").val()
        };
        socket.send(JSON.stringify(message));
    });


});



