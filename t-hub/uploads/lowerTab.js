var myDiv = document.createElement("div");
myDiv.innerHTML = `
    <style>
    .popup {
        display: none;
        position: fixed;
        bottom: 0;
        right: 15px;
        border: 3px solid #f1f1f1;
        z-index: 9;
    }

    /* Add styles to the form container */
    .container {
        width: 300px;
        padding: 10px;
        background-color: white;
    }

    /* Full-width textarea */
    .container textarea, pre{
        width: 270px;
        padding: 15px;
        margin: 5px 0 22px 0;
        border: none;
        background: #f1f1f1;
        resize: none;
        min-height: 200px;
    }

    /* Chat input area */
    .container input{
        width: 265px;
        padding: 15px;
        margin: 5px 0 22px 0;
        resize: none;
    }

    /* When the textarea gets focus, do something */
    .container textarea:focus{
        background-color: #ddd;
        outline: none;
    }

    /* Set a style for the submit/send button */
    .container .btn {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 16px 20px;
        border: none;
        cursor: pointer;
        margin-bottom: 10px;
        opacity: 0.8;
    }

    /* Add a red background color to the cancel button */
    .container .cancel {
        background-color: red;
    }

    /* Add some hover effects to buttons */
    .container .btn:hover,
    .open-button:hover {
        opacity: 1;
    }
    </style>

    <div class="popup" id="myFeedback">
        <form action="/feedback" class="container" method="post">
            <h1>Feedback</h1>
            <textarea placeholder="Type your Feedback here..." name="msg" required></textarea>
            <button type="submit" class="btn">Send</button>
            <button type="button" class="btn cancel" onclick="closeFeedback()">Close</button>
        </form>
    </div>

    <div class="popup" id="myChat">
        <div class="container">
            <h1>Chat Room</h1>
            <pre id="messages" placeholder="Type something to start conversation..." ></pre>
            <input type="text" id="messageBox" placeholder="Type your message here" onkeyup="validateInput(event)"/>
            <button class="btn" id="send" title="Send Message!" >Send Message</button>
            <button class="btn cancel" type="button" onclick="closeChat()">Close</button>
        </div>
    </div>

    <!-- <button onclick="openFeedback()">Feedback/Suggestions</button> -->
    <!-- <button onclick="openChat()">Chat Room</button> -->`;

    document.body.appendChild( myDiv );

//feedback
function openFeedback() {
    document.getElementById("myFeedback").style.display = "block";
    closeChat();
}

function closeFeedback() {
    document.getElementById("myFeedback").style.display = "none";
}

function openChat() {
    document.getElementById("myChat").style.display = "block";
    closeFeedback();
}

function closeChat() {
    document.getElementById("myChat").style.display = "none";
}

//websocket
(function() {
    const sendBtn = document.querySelector('#send');
    const messages = document.querySelector('#messages');
    const messageBox = document.querySelector('#messageBox');

    let ws;

    function showMessage(message) {
      messages.textContent += `\n\n${message}`;
      messages.scrollTop = messages.scrollHeight;
      messageBox.value = '';
    }

    function init() {
      if (ws) {
        ws.onerror = ws.onopen = ws.onclose = null;
        ws.close();
      }

      ws = new WebSocket('ws://localhost:8989');
      ws.onopen = () => {
        console.log('Connection opened!');
      }
      ws.onmessage = ({ data }) => showMessage(data);
      ws.onclose = function() {
        ws = null;
      }
    }

	
    sendBtn.onclick = function() {
      if (!ws) {
        showMessage("No WebSocket connection 0 :(");
        return ;
      }

      ws.send(messageBox.value);
      showMessage(messageBox.value);
    }
	
	
	messageBox.onkeyup = function() {
		if(event.keyCode  == 13) {
			if (!ws) {
				showMessage("No WebSocket connection 1 :(");
				return ;
			}

			ws.send(messageBox.value);
			showMessage(messageBox.value);
		}
    }

    init();
})();