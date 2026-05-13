var search_type_btn = document.querySelectorAll(".search_type_btn");

search_type_btn.forEach((search_btn) => {
  search_btn.addEventListener("click", () => {
    search_type_btn.forEach((btn) => {
      btn.classList.remove("active");
    });
    search_btn.classList.add("active");
  });
});



{/* <button class="login" onclick="loginFunction()">Login</button> */}


function loginFunction() {
    alert("Loginpage par bhej rahe hain...");
    window.location.href = "/login"; // Page redirect karne ke liye
}
// const submitBtn = document.getElementById("submitBtn");
// const userName = document.getElementById("userName");
// const companyEmail = document.getElementById("companyEmail");

// // Click event listener lagana
// submitBtn.addEventListener("click", function () {
//   // Values ko get karna
//   const nameValue = userName.value.trim();
//   const emailValue = companyEmail.value.trim();

//   // Validation: Check karna ki fields khali to nahi hain
//   if (nameValue === "" || emailValue === "") {
//     alert("Please fill in all fields!");
//   } else {
//     // Yahan aap apna submit logic likh sakte hain
//     console.log("Name:", nameValue);
//     console.log("Email:", emailValue);

//     alert("Form submitted successfully!");

//     // Form clear karne ke liye (optional)
//     userName.value = "";
//     companyEmail.value = "";
// }
// });

document.addEventListener('DOMContentLoaded',()=>{



  var tabsbtn = document.querySelectorAll(".featured_properties_menu_list li button");
  var tabs = document.querySelectorAll(".featured_tab");


  tabsbtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      tabsbtn.forEach((btn)=>{btn.classList.remove("active")});
      tabs.forEach((tab)=>{tab.classList.remove("active")});

      var targetId = btn.getAttribute("data-tab");
      var targetTab = document.getElementById(targetId);

      if(targetTab){
        targetTab.classList.add("active");
      }
      // document.getElementById(tabsbtn.dataset.tab).classList.add("active");
      // tabsbtn.classList.add("active");
    })
  });
});




const properties = {
    villa: {
        title: "Luxury Villa",
        location: "Mumbai",
        price: "₹2.5 Crore",
        image: "IMAGE/villa.jpg"
    },

    apartment: {
        title: "Modern Apartment",
        location: "Delhi",
        price: "₹85 Lakh",
        image: "IMAGE/apartment.jpg"
    },

    plots: {
        title: "Residential Plot",
        location: "Patna",
        price: "₹35 Lakh",
        image: "IMAGE/plot.jpg"
    },

    office: {
        title: "Commercial Office",
        location: "Bangalore",
        price: "₹1.2 Crore",
        image: "IMAGE/office.jpg"
    }
};

const searchBtn = document.querySelector(".search-container button");
const searchInput = document.querySelector(".search-container input");

/* DETAILS BOX CREATE */
const detailsBox = document.createElement("div");
detailsBox.classList.add("property-details");
document.body.appendChild(detailsBox);

/* SEARCH BUTTON CLICK */
searchBtn.addEventListener("click", () => {

    const value = searchInput.value.toLowerCase().trim();

    if(properties[value]){

        const property = properties[value];

        detailsBox.innerHTML = `
            <img src="${property.image}">
            <h2>${property.title}</h2>
            <p><b>Location:</b> ${property.location}</p>
            <p><b>Price:</b> ${property.price}</p>
        `;

        detailsBox.style.display = "block";
    }
    else{
        detailsBox.innerHTML = `
            <h2>No Property Found</h2>
        `;

        detailsBox.style.display = "block";
    }
});

/* CLICK ANYWHERE TO CLOSE */
document.addEventListener("click", (e) => {

    if(!detailsBox.contains(e.target) &&
       !searchBtn.contains(e.target) &&
       !searchInput.contains(e.target)){

        detailsBox.style.display = "none";
    }
});


// Swiper starts
var swiper = new Swiper(".citiesSwiper", {
spaceBetween: 30,
slidesPerView: 1,
loop:true,
autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
breakpoints: {
    640: {
    slidesPerView: 2,
    spaceBetween: 20,
    },
    768: {
    slidesPerView: 4,
    spaceBetween: 20,
    },
    1024: {
    slidesPerView: 5,
    spaceBetween: 30,
    },
},
});
// Swiper ends








document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LoginPAGE LOGIC ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        console.log("LoginPage Detected");
        
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginForm.querySelector('input[type="email"]').value;
            alert("LoginSuccessful for: " + email);
        });
    }

    // --- 2. SIGNUP PAGE LOGIC ---
    const signupForm = document.getElementById('registerForm');
    if (signupForm) {
        console.log("Signup Page Detected");
        
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = signupForm.querySelector('input[type="text"]').value;
            alert("Welcome " + name + "! Your account is being created.");
            window.location.href = "login.html"; // Signup ke baad Loginpar bhej dega
        });
    }

    // --- 3. COMMON FUNCTIONS (Dono page ke liye) ---
    // Password toggle function jo dono pages par kaam karegi
    window.togglePassword = function(inputId) {
        const input = document.getElementById(inputId);
        if (input) {
            input.type = input.type === "password" ? "text" : "password";
            // Icon change karne ka logic bhi yahan add kar sakte hain
        }
    };
});


// --- 4. FORGOT PASSWORD LOGIC ---
const forgotForm = document.getElementById('forgotForm');

if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPass = document.getElementById('newPass').value;
        const confirmPass = document.getElementById('confirmPass').value;

        if (newPass === confirmPass) {
            alert("Password Reset Successful! Redirecting to Login...");
            window.location.href = "login.html";
        } else {
            alert("Passwords do not match. Please check again.");
        }
    });
}



// --- REQUEST A QUOTE LOGIC ---
const quoteForm = document.getElementById('quoteForm');

if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('userName').value;
        
        // Form submit hone ka visual confirmation
        alert(`Thank you, ${name}! Your request has been received. Our team will contact you soon.`);
        
        // Form reset karna taaki refresh ki zaroorat na pade
        quoteForm.reset();
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('alertBtn');
    
    if(btn) {
        btn.addEventListener('click', function() {
            alert("Admin System Active! Saari properties up-to-date hain.");
        });
    }

    // Aap yahan charts ya table filtering ka code bhi likh sakte hain
    console.log("Admin Dashboard JS Loaded.");
});



// JavaScript Code (script.js)

// =========================
// OPEN / CLOSE CHAT
// =========================

function toggleChat(){

    let chat = document.getElementById("chatContainer");

    if(chat.style.display === "block"){

        chat.style.display = "none";
    }

    else{

        chat.style.display = "block";
    }
}

// =========================
// SEND MESSAGE
// =========================

function sendMessage(){

    let input = document.getElementById("userInput");

    let message = input.value.trim();

    if(message === ""){

        return;
    }

    let chatBody = document.getElementById("chatBody");

    // USER MESSAGE
    let userDiv = document.createElement("div");

    userDiv.className = "user-message";

    userDiv.innerText = message;

    chatBody.appendChild(userDiv);

    // BOT REPLY
    let botReply = "Please search using apartment, villa, rent or plot.";

    if(message.toLowerCase().includes("villa")){

        botReply =
        "Luxury Villas available starting from ₹80 Lakhs.";
    }

    else if(message.toLowerCase().includes("2bhk")){

        botReply =
        "2BHK Apartments available from ₹35 Lakhs.";
    }

    else if(message.toLowerCase().includes("rent")){

        botReply =
        "Rental properties available from ₹10,000/month.";
    }

    else if(message.toLowerCase().includes("plot")){

        botReply =
        "Residential plots available in prime locations.";
    }

    // BOT MESSAGE DELAY
    setTimeout(() => {

        let botDiv = document.createElement("div");

        botDiv.className = "bot-message";

        botDiv.innerText = botReply;

        chatBody.appendChild(botDiv);

        // AUTO SCROLL
        chatBody.scrollTop = chatBody.scrollHeight;

    }, 500);

    // CLEAR INPUT
    input.value = "";

    // AUTO SCROLL
    chatBody.scrollTop = chatBody.scrollHeight;
}











// --- 5. HERO SEARCH FORM LOGIC ---

// Search Type (Rent or Sale) ko store karne ke liye variable
let searchType = 'rent'; 

// Tabs toggle karne ka function
const searchTabs = document.querySelectorAll('.search_type_btn');

searchTabs.forEach(btn => {
    btn.addEventListener('click', function() {
        // Purane active class ko hatana
        searchTabs.forEach(t => t.classList.remove('active'));
        // Naye tab ko active karna
        this.classList.add('active');
        
        // Type update karna (Rent ya Sale)
        searchType = this.innerText.toLowerCase().includes('rent') ? 'rent' : 'sale';
        console.log("Search mode changed to: " + searchType);
    });
});

// Form submission handle karna
const propertySearchForm = document.querySelector('.search-form');

if (propertySearchForm) {
    propertySearchForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Page reload rokne ke liye

        // Form se data nikalna
        const keyword = document.getElementById('keyword').value;
        const propertyType = document.getElementById('propertytype').value;
        const location = document.getElementById('Location').value;

        // User ko dikhane ke liye alert (Aap isse backend par bhej sakte hain)
        if(keyword === "" && location === "") {
            alert("Please enter a keyword or location to search.");
        } else {
            console.log( `Searching for: ${searchType} | Keyword: ${keyword} | Type: ${propertyType} | City: ${location}`);
            alert(`Finding ${searchType} properties in ${location}...`);
            
            // Yahan aap results page par redirect kar sakte hain:
            // window.location.href = `results.html?type=${searchType}&key=${keyword}&loc=${location}``;
        }
    });
}




document.addEventListener('DOMContentLoaded', () => {
    const filterBtn = document.querySelector('.apply-filter-btn');
    
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            const category = document.getElementById('catSelect').value;
            console.log("Filtering properties for: " + category);
            alert("Results updated for: " + category);
        });
    }
});




function changeImage(src) {
    document.getElementById('mainImg').src = src;
}

document.querySelector('.contact-btn').addEventListener('click', () => {
    alert("Owner's contact details will be sent to your email!");
});



// Home page ke 'Add New Property' button ke liye JS
document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.querySelector('.add-btn');

    if (addBtn) {
        addBtn.addEventListener('click', function(e) {
            // Click hone par console mein message (Debugging ke liye)
            console.log("Navigating to Add Property page...");

            // Button par thoda sa effect dene ke liye
            this.style.transform = "scale(0.95)";
            
            // 100ms baad wapas normal size mein laane ke liye
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 100);
        });
    }
});





// add-property starts here
// DOM load hone ka wait karein
document.addEventListener('DOMContentLoaded', function() {
    
    // Form ko select karein (ID ke zariye)
    const propertyForm = document.getElementById('propertyForm');
    const messageDiv = document.getElementById('message');

    if (propertyForm) {
        propertyForm.addEventListener('submit', function(event) {
            
            // Input values nikaalein
            const pName = document.getElementById('p_name').value;
            const pPrice = document.getElementById('p_price').value;
            const pLoc = document.getElementById('p_loc').value;

            // 1. Validation logic: Check karein ki Price negative na ho
            if (pPrice <= 0) {
                event.preventDefault(); // Form ko submit hone se rok dega
                messageDiv.innerHTML = "❌ Price must be greater than 0!";
                messageDiv.style.color = "red";
                messageDiv.style.marginTop = "10px";
                messageDiv.style.textAlign = "center";
                return;
            }

            // 2. Agar sab sahi hai
            console.log("Success! Sending data for:", pName);
            messageDiv.innerHTML = "✅ Property Listed Successfully!";
            messageDiv.style.color = "#28a745";
            messageDiv.style.marginTop = "10px";
            messageDiv.style.textAlign = "center";
            
            // Note: Flask ke saath use karte waqt ye page redirect ho jayega 
            // isliye message browser console mein ya redirect hone se pehle dikhega.
        });
    }
});
// add-property ends here
// aboutus starts here
document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('.text-content');
    const images = document.querySelector('.image-gallery');

    // Simple fade-in effect
    text.style.opacity = '0';
    text.style.transform = 'translateX(-50px)';
    images.style.opacity = '0';
    images.style.transform = 'translateX(50px)';

    setTimeout(() => {
        text.style.transition = 'all 1s ease';
        text.style.opacity = '1';
        text.style.transform = 'translateX(0)';

        images.style.transition = 'all 1s ease';
        images.style.opacity = '1';
        images.style.transform = 'translateX(0)';
    }, 300);
});


// aboutus endss here


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});

// contactus
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            console.log("Form is being submitted...");
            // Aap yahan loading spinner bhi add kar sakte hain
        });
    }
});




function showContact() {
    alert("Agent details will be sent to your email!");
    // Aap yahan ek popup modal bhi dikha sakte hain
}

// Image par click karne par zoom effect ka logic yahan likh sakte hain





// dashboard
// SEARCH FILTER

const searchInput = document.querySelector(".search-box input");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        let filter = searchInput.value.toLowerCase();

        let rows = document.querySelectorAll("tbody tr");

        rows.forEach(row => {

            let text = row.innerText.toLowerCase();

            if(text.includes(filter)){

                row.style.display = "";

            }else{

                row.style.display = "none";
            }

        });

    });

}

// DELETE CONFIRMATION

const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(button => {

    button.addEventListener("click", function(){

        let confirmDelete = confirm(
            "Are you sure you want to delete this property?"
        );

        if(confirmDelete){

            alert("Property Deleted");

        }

    });

});



// user-dashboard


const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    let filter =
    searchInput.value.toLowerCase();

    let cards =
    document.querySelectorAll(".property-cards");

    cards.forEach(card => {

        let text =
        card.innerText.toLowerCase();

        if(text.includes(filter)){

            card.style.display = "block";

        }else{

            card.style.display = "none";
        }

    });

});

// SAVE BUTTON

const saveButtons =
document.querySelectorAll(".save-btn");

saveButtons.forEach(button => {

    button.addEventListener("click", function(){

        alert("Property Saved");

    });

});





// function toggleMenu(){

//     let menu =
//     document.getElementById("dropdownMenu");

//     if(menu.style.display === "block"){

//         menu.style.display = "none";

//     }else{

//         menu.style.display = "block";
//     }

// }




/* OPEN CHATBOX */

function openChat(){

    document
    .getElementById("chatbox")

    .classList.toggle("show-chat");

}

/* AUTO MESSAGE */

window.onload = function(){

    let chatbox =
    document.getElementById("chatbox");

    let chatBody =
    document.getElementById("chatBody");

    chatbox.classList.add("show-chat");

    let botDiv =
    document.createElement("div");

    botDiv.className =
    "bot-message";

    botDiv.innerText =
    "👋 Hello! How can I help you?";

    chatBody.appendChild(botDiv);

}

/* SEND MESSAGE */

function sendMessage(){

    let input =
    document.getElementById("userInput");

    let message =
    input.value;

    if(message == "") return;

    let chatBody =
    document.getElementById("chatBody");

    /* USER MESSAGE */

    let userDiv =
    document.createElement("div");

    userDiv.className =
    "user-message";

    userDiv.innerText =
    message;

    chatBody.appendChild(userDiv);

    /* SEND TO PYTHON */

    fetch('/chat',{

        method:'POST',

        headers:{
            'Content-Type':'application/json'
        },

        body:JSON.stringify({

            message:message

        })

    })

    .then(response =>
    response.json())

    .then(data => {

        let botDiv =
        document.createElement("div");

        botDiv.className =
        "bot-message";

        botDiv.innerText =
        data.reply;

        chatBody.appendChild(botDiv);

    });

    input.value = "";

}





// Chat window kholne/band karne ke liye
function toggleChat() {
    const window = document.getElementById('chat-window');
    window.classList.toggle('hidden-box');
}

// Message bhejne ka function
function sendMessage() {
    const input = document.getElementById('user-input');
    const logs = document.getElementById('chat-logs');
    
    if (input.value.trim() === "") return;

    // 1. User ka message dikhao
    logs.innerHTML += <div class="msg user-msg">${input.value}</div>;
    
    const userQuery = input.value;
    input.value = ""; // Input clear karo

    // 2. Robot ka reply (Dummy logic)
    setTimeout(() => {
        logs.innerHTML += <div class="msg bot-msg">Thinking...</div>;
        logs.scrollTop = logs.scrollHeight;

        setTimeout(() => {
            // Yahan aap AI API connect kar sakte hain
            const lastMsg = logs.querySelector('.bot-msg:last-child');
            lastMsg.innerText = "I'm still learning! You asked: " + userQuery;
            logs.scrollTop = logs.scrollHeight;
        }, 1000);
    }, 500);
}

// Enter key se send karne ke liye
document.getElementById('user-input')?.addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});

document.getElementById('send-btn')?.addEventListener("click", sendMessage);

// Auto-Greet on Refresh
window.onload = () => {
    setTimeout(() => {
        toggleChat(); // Apne aap chat box khulega
        const logs = document.getElementById('chat-logs');
        logs.innerHTML += <div class="msg bot-msg">Hi! How can I help you today? 👋</div>;
    }, 1500);
};