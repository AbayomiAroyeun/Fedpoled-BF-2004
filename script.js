const logoPath = "image/logo.jpg";
const otherImages = [
  "image/adeola.jpg", "image/alfa.jpg", "image/deola.jpg",
  "image/fisayo.jpg", "image/iyaafe.jpg", "image/seyi.jpg",
  "image/yomi.jpg", "image/jibola.jpg", "image/ade.jpg", 
  "image/mope.jpg","bukky.jpg"
];

const birthdayMembers = [
  { name: "Adeola Sanni", day: 26, month: 4, image: "image/tayo.gif" },
  { name: "Adeniyi Olawoyin", day: 22, month: 9, image: "image/fatimah.gif" },
  { name: "Ajibola Elubeku", day: 20, month: 5, image: "image/jibola.gif" }, // Fixed
  { name: "Fisayo Adeokun", day: 9, month: 10, image: "image/femi.gif" },
  { name: "Olamide Ilori", day: 16, month: 3, image: "image/rotimi.gif" },
  { name: "Mopelola Fowowe", day: 29, month: 5, image: "image/ademola.gif" },
  { name: "Adebukola Johnson Adeoye", day: 28, month: 1, image: "image/tunde.gif" },
  { name: "Abayomi Aroyeun", day: 21, month: 5, image: "image/Abayomi.jpg" },
  { name: "Kazeem Kolawole Oseni", day: 8, month: 5, image: "image/kazeem.gif" },
  { name: "", day: 17, month: 7, image: "image/qudrat.gif" }
];

const memberNames = [
  "Segun Faramade Alex  ... Isekolowo",
  "Muhammed Kabir ..Oga mio",
  "Akinwole Wale Sofiiriyu ... Sofiriyu Alago memu",
  "KEMI.... Igi iwe",
  "Kazeem OSENI .. Aristotle",
  "Musa Najim...Musa Najim O",
  "Mojeed Buhari .... Mon kan",
  "Mama Tiwa ... Yeye Lufe",
  "Iyalode ... Broda Diipo ani mo n wuko",
  "Adebayo  - Bayo  .... Chiefooooo",
  "Rafiu Sulaiman... Hon. COUNCILOR",
  "Damilare Akinyemi  ....Golden Couple of our set",
  "Taiwo Adebayo.... Taye Ojukwu",
  "David.... You fight Lion",
  "Madam Mope... Mopensin",
  "Adebukola Johnson Adeoye... Bukky Dudu",
  "Peter Oloseh ... Olishe Baba",
  "Dele.... Daddy G.O",
  "Victoria... Vik vik",
  "Kareem Ismail ... Alfa Nooo",
  "Gbenjo Kazeem .... Kacy Jojo",
  "Leye .... Leye nio",
  "Madam Yetunde .... Sis Malt",
  "Idaya Omotoyosi - Aya Ayinde Marshaaa",
  "Muideen Adewumbi.... Indigoo",
  "Bidemi Opafele .... Omo Aladeniyi",
  "One Madam .... Iya Ibadan",
  "KEMI Fadiji.... Iyawo Dami ( Kem Kem)",
  "Abayomi Aroyeun .... Yomi Mighty",
  "Ajibola Elubeku (Nee Ojo) .... Jiblo",
  "Adeniyi Olawoyin   Neyo",
  "Toyin Obembe ... Obembe mama",
  "Kazali Abiola",
  "Madam Ikuyajesin .... ALHAJA Olohun",
  "Madam Rafat",
  "Fisayo Adeokun (Nee Olayinka)",
  "Teni Ade",
  "Yinka Salawu ... Yinkus man",
  "Bimbola ..... D big boy",
  "Sebolatan ... Ayo TUPAC",
  "Ibitowa Toyin .... Obembe Toyin",
  "Sanni Adeola .... Presidoooo!",
  "Ayo Oladejo",
  "Bolaji ..... BJ",
  "Femi Olooke ... Femoo Laalaa",
  "Yinka Ayefele .... Ayefele Baba oo !",
  "Olamide Ilori",
  "Funke .... (Shola Abiona Girlfriend )",
  "Olaide .... Mama jeje",
  "Yemi Scholar .... SCHOLASTICS  !!!",
  "Adebisi Francis - Baba Ibadan",
  "Iya Ibadan",
  "Mummy Heritage - Good woman",
  "Seyi Adeyanju - Ojuugo",
  "Olagunju Bolanle",
  "Eyinade Durojaiye",
  "Ajani Bolanle - Mama jeje",
  "Taiwo Sunday",
  "Mewambe Omolara",
  "Faleye Adebisi",
  "Dairo Adedoyin",
  "Yemi OLABIYI T",
  "Mummy Ore",
  "Shola Abiona...OSHOGBO",
  "Toyin Ibitowa....Actress"
];

const isTesting = false;
const testDate = new Date(2025, 4, 30); // May 30

let lastIndex = -1;

function getCurrentTime() {
  return isTesting ? testDate : new Date();
}

function getTodayBirthday() {
  const now = getCurrentTime();
  const day = now.getDate();
  const month = now.getMonth();
  return birthdayMembers.find(member => member.day === day && member.month === month);
}

function updateTopImage() {
  const logoImg = document.getElementById("logo-img");
  const now = getCurrentTime();
  const hour = now.getHours();

  if (hour < 12) {
    logoImg.src = logoPath;
  } else {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * otherImages.length);
    } while (randomIndex === lastIndex && otherImages.length > 1);
    lastIndex = randomIndex;
    logoImg.src = otherImages[randomIndex];
  }
}

function updateWelcomeSection() {
  const welcomeDiv = document.getElementById("Welcome");
  const birthday = getTodayBirthday();
  if (birthday) {
    welcomeDiv.style.animation = "none";
    welcomeDiv.style.backgroundImage = `url('${birthday.image}')`;
    welcomeDiv.innerHTML = `<h3>We celebrate you today,<br>${birthday.name.toUpperCase()}! <br> Igba Odun, Odun kan ni O. <br> Happy Birthday</h3>`;
  } else {
    welcomeDiv.style.animation = "slideshow 20s infinite";
    welcomeDiv.innerHTML = `<h2>Welcome Home !!!</h2>`;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  updateTopImage();
  updateWelcomeSection();

  setInterval(() => {
    const now = getCurrentTime();
    if (now.getHours() >= 16 && now.getHours() <= 23) {
      updateTopImage();
    }
    updateWelcomeSection();
  }, 5000);

  // Member toggle logic
  const showBtn = document.getElementById("show-members-btn");
  const memberList = document.getElementById("members-list");
  let isVisible = false;

  showBtn.addEventListener("click", () => {
    isVisible = !isVisible;
    if (isVisible) {
      memberList.style.display = "block";
      showBtn.textContent = "Hide the Members";

      const sortedNames = [...memberNames].sort((a, b) => a.localeCompare(b));
      memberList.innerHTML = "";
      sortedNames.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        memberList.appendChild(li);
      });
    } else {
      memberList.style.display = "none";
      showBtn.textContent = "See the Members";
    }
  });
});

