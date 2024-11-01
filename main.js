let spaceForm = document.querySelector(".formSpace");
let spaceLogin = document.querySelector(".login");
let spaceParol = document.querySelector(".parol");
let spaceEye = document.querySelector(".koz");
let btn = document.querySelector(".submit");
let errorMsg = document.querySelector(".error-msg"); // Xato xabar elementi

spaceEye.addEventListener("mousedown", (evt) => {
    evt.preventDefault();
    spaceParol.setAttribute("type", "text");
});

spaceEye.addEventListener("mouseup", (evt) => {
    evt.preventDefault();
    spaceParol.setAttribute("type", "password");
});

const students = [
    { ism: "Said", login: 2018, parol: 2024 ,coin:21,hp:1010,group:"front Backned"  },
    { ism: "Nigina", login: "minus", parol: "coin" ,coin:10,hp:100,group:"front 1.0"  },
    { ism: "shahruza", login: "chirigan", parol: "miyya" ,coin:1,hp:100,group:"front Html CSs"  },
    { ism: "shohjahon", login: 2010, parol: 2011,coin:31,hp:1000,group:"front dizayn"  },
    { ism: "Sunnatbek", login: "mars", parol: 2022 ,coin:321,hp:1000,group:"front 1.0" }
];

spaceForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let loginValue = spaceLogin.value.trim();
    let parolValue = spaceParol.value.trim();
    
    let topilganStudent = null;
    
    students.forEach((item) => {
        if (item.login == loginValue && item.parol == parolValue) {
            topilganStudent = item;
        }
    });
    
    if (topilganStudent) {
        errorMsg.style.display = "none"; // Xato xabarni yashirish
        localStorage.setItem("student" , JSON.stringify(topilganStudent));
        // Yangi sahifaga o'tish
        window.location.href = `./studen.html`; 
    } else {
        errorMsg.style.display = "block"; // Xato xabarni ko'rsatish
        errorMsg.textContent = "Login yoki parol xato!";
    }
    
    spaceLogin.value = "";
    spaceParol.value = "";
});

function toggleSwitchClass() {
    if (spaceLogin.value && spaceParol.value) {
        btn.style.backgroundColor = "orangered";
        btn.disabled = false;
    } else {
        btn.style.backgroundColor = "#f69e86";
        btn.disabled = true; // Tugmani nofaol qilish
    }
}
spaceLogin.addEventListener("input", toggleSwitchClass);
spaceParol.addEventListener("input", toggleSwitchClass);
