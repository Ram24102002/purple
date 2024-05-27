

const responses = {
  "hi": "Hello!",
  "call":"+91-7305790119",
  "mail":"ramachandran24102002@gmail.com",
  "linked in":"Ramachandran Asokan",
  "from ?":"chennai",
  "hello": "Hi",
  "age": "21",
  "education": "BCA",
  "i love you":"Love You to Baby ♥",
  "how are you": "I'm doing well, I think you too..",
  "what is your name": "Ram",
  "bye": "Goodbye! Have a great day!"
};

function sendMessage() {
  const userInput = document.getElementById("user-input").value.toLowerCase();
  const chatBox = document.getElementById("chat-box");
  const botResponse = responses[userInput] || "Sorry, I don't understand that.";
  
  

// click enter ==========================


  chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  chatBox.innerHTML += `<p><strong>Ram:</strong> ${botResponse}</p>`;
  
  // document.getElementById("user-input").value = "";
}



// Push Notification ==========================

const btn =document.getElementById("btn")

btn.addEventListener("click", () =>{
  Notification.requestPermission().then(perm => {
    if(perm ="granted")
    {
      new Notification("Hey ♥" ,{
        body: "you are soo cool"
      })
    }
  })
})
