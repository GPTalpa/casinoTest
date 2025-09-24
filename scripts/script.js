const mockData = [
  {
    img: "caswino.svg",
    alt: "Caswino Casino Logo",
    name: "Caswino",
    rate: 5,
    bonusPercent: "600%",
    bonusMoney: "4800$",
    freeSpeens: 255,
    review: "caswino-casino-review",
    BOC: true,
    RC: true,
    MAC: false,
    BLC: true,
    PayId: true,
    CreditCards: true,
    Crypto: true,
    Neosurf: false,
  },
  {
    img: "neospin.svg",
    alt: "Neospin Casino Logo",
    name: "Neospin",
    rate: 5,
    bonusPercent: "100%",
    bonusMoney: "AU$6,000",
    freeSpeens: 100,
    review: "neospin-casino-review",
    BOC: true,
    RC: true,
    MAC: true,
    BLC: true,
    PayId: false,
    CreditCards: true,
    Crypto: true,
    Neosurf: false,
  },
  {
    img: "crownSlots.svg",
    alt: "CrownSlots Logo",
    name: "Crown Slots",
    rate: 4.9,
    bonusPercent: "400%",
    bonusMoney: "AU$4,000",
    freeSpeens: 250,
    review: "crownslots-review",
    BOC: true,
    RC: true,
    MAC: true,
    BLC: true,
    PayId: false,
    CreditCards: false,
    Crypto: true,
    Neosurf: false,
  },
  {
    img: "BDMbet.svg",
    alt: "BDM bet Logo",
    name: "BDM bet",
    rate: 4.8,
    bonusPercent: "",
    bonusMoney: "AU$4,000",
    freeSpeens: 150,
    review: "bdm-bet-review",
    BOC: true,
    RC: true,
    MAC: true,
    BLC: false,
    PayId: false,
    CreditCards: false,
    Crypto: false,
    Neosurf: false,
  },
  {
    img: "RichardCasino.svg",
    alt: "Richard Casino Logo",
    name: "Richard Casino",
    rate: 4.7,
    bonusPercent: "",
    bonusMoney: "AU$5,000",
    freeSpeens: 500,
    review: "richard-casino-review",
    BOC: true,
    RC: true,
    MAC: false,
    BLC: false,
    PayId: false,
    CreditCards: false,
    Crypto: true,
    Neosurf: false,
  },
  {
    img: "AxeCasino.svg",
    alt: "Axe Casino Logo",
    name: "Axe Casino",
    rate: 4.5,
    bonusPercent: "",
    bonusMoney: "AU$5,625",
    freeSpeens: 200,
    review: "axe-casino-review",
    BOC: true,
    RC: false,
    MAC: false,
    BLC: false,
    PayId: false,
    CreditCards: true,
    Crypto: false,
    Neosurf: true,
  },
  {
    img: "Oscarspin.svg",
    alt: "Oscarspin Logo",
    name: "Oscarspin",
    rate: 4.4,
    bonusPercent: "",
    bonusMoney: "AU$4,000",
    freeSpeens: 225,
    review: "oscarspin-review",
    BOC: true,
    RC: false,
    MAC: true,
    BLC: false,
    PayId: true,
    CreditCards: false,
    Crypto: true,
    Neosurf: true,
  },
  {
    img: "SkyCrown.svg",
    alt: "SkyCrown Logo",
    name: "SkyCrown",
    rate: 4.3,
    bonusPercent: "",
    bonusMoney: "AU$8,000",
    freeSpeens: 400,
    review: "skycrown-review",
    BOC: true,
    RC: false,
    MAC: false,
    BLC: false,
    PayId: true,
    CreditCards: true,
    Crypto: true,
    Neosurf: false,
  },
  {
    img: "Hugo.svg",
    alt: "Hugo casino Logo",
    name: "Hugo",
    rate: 4.2,
    bonusPercent: "225%",
    bonusMoney: "AU$1,000",
    freeSpeens: 275,
    review: "hugo-casino-review",
    BOC: true,
    RC: false,
    MAC: false,
    BLC: true,
    PayId: false,
    CreditCards: false,
    Crypto: false,
    Neosurf: false,
  },
  {
    img: "RockwinCasino.svg",
    alt: "Rockwin casino Logo",
    name: "Rockwin Casino",
    rate: 4,
    bonusPercent: "",
    bonusMoney: "AU$6,000",
    freeSpeens: 400,
    review: "rockwin-casino-review",
    BOC: true,
    RC: false,
    MAC: false,
    BLC: true,
    PayId: true,
    CreditCards: true,
    Crypto: false,
    Neosurf: true,
  },
];

const LOGOROUTE = "./img/main/casino_logos/";
const BASE = "https://pokies24.io/";

const MAINTITLE = {
  BOC: "Best Online Casinos",
  RC: "Recommended casinos",
  MAC: "Mobile apps casino",
  BLC: "Best live Casinos",
  PayId: "Best PayId Casinos",
  CreditCards: "Best Credit cards Casinos",
  Crypto: "Best Crypto Casinos",
  Neosurf: "Best Neosurf Casinos",
};

function createRatingElement(value) {
  const v = Math.max(
    0,
    Math.min(5, parseFloat(String(value).replace(",", ".")) || 0)
  );
  const count = 5;
  const percent = (v / count) * 100;
  console.log(percent);

  const container = document.createElement("div");
  container.className = "rating";
  container.setAttribute("aria-label", `Рейтинг ${v} из ${count}`);

  const base = document.createElement("div");
  base.className = "rating__base";

  const fill = document.createElement("div");
  fill.className = "rating__fill";
  // ширина заполнения в процентах
  fill.style.width = percent + "%";

  // SVG иконка сердца (используем currentColor)
  const heartSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.5 3.5 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5 18.5 5 20 6.5 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>`;

  for (let i = 0; i < count; i++) {
    const hb = document.createElement("span");
    hb.className = "heart";
    hb.innerHTML = heartSVG;
    base.appendChild(hb);

    const hf = document.createElement("span");
    hf.className = "heart";
    hf.innerHTML = heartSVG;
    fill.appendChild(hf);
  }

  // порядок: base (в потоке), затем fill (абсолютный слой поверх)
  container.appendChild(base);
  container.appendChild(fill);

  return container;
}

function filterByKeySimple(arr, key) {
  if (!Array.isArray(arr)) return [];
  if (!key || key === "all") return arr.slice();
  return arr.filter((item) => {
    console.log(item);
    console.log(item[key]);
    return Boolean(item && item[key]);
  });
}

function renderCasinos(arr) {
  const container = document.querySelector(".main_content");
  if (!container) return;
  container.replaceChildren();
  arr.forEach((elem) => {
    const card = document.createElement("div");
    card.className = "main_content_item";

    const title = document.createElement("div");
    title.className = "main_content_item_title";

    const logo = document.createElement("img");
    logo.src = LOGOROUTE + elem.img;
    logo.alt = elem.alt;

    const name = document.createElement("p");
    name.className = "casino_name";
    name.textContent = elem.name;

    const rateContainer = document.createElement("div");
    rateContainer.className = "rate_container"; // добавил класс для удобства стилей, если нужно

    const rateimages = document.createElement("div");
    rateimages.className = "casino_rate";

    // вставляем rating (сердечки)
    const ratingEl = createRatingElement(elem.rate);
    rateimages.appendChild(ratingEl);

    const ratetextContainer = document.createElement("span");
    const ratetext = document.createElement("p");
    ratetext.className = "rate_text";
    // показываем значение с 1 знаком после запятой (если дробное), иначе целое
    const formatted =
      Number(elem.rate) % 1 === 0
        ? String(elem.rate)
        : Number(elem.rate).toFixed(1);
    ratetext.textContent = formatted;
    const ratetextSeparator = document.createElement("p");
    ratetextSeparator.textContent = "/";
    ratetextSeparator.className = "rate_text_separator";
    const ratetextMax = document.createElement("p");
    ratetextMax.textContent = "5";
    ratetextMax.className = "rate_text_max";
    ratetextContainer.append(ratetext, ratetextSeparator, ratetextMax);

    const bonusesContainer = document.createElement("div");
    bonusesContainer.className = "main_content_item_bonuses";
    const bonusesPercent = document.createElement("p");
    bonusesPercent.textContent = `Welcome bonus: ${elem.bonusPercent} up to ${elem.bonusMoney}`;
    const bonusesFreeSpeens = document.createElement("p");
    bonusesFreeSpeens.textContent = `+ ${elem.freeSpeens} Free spins`;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "main_content_item_buttons";
    const buttonReview = document.createElement("a");
    buttonReview.href = BASE + elem.review;
    buttonReview.className = "btn btnReview";
    buttonReview.textContent = "Review";
    const buttonPN = document.createElement("a");
    buttonPN.href = "#";
    buttonPN.className = "btn btnPN";
    buttonPN.textContent = "Play Now";

    const rateWrapper = document.createElement("div");
    rateWrapper.className = "rateWrapper";
    rateWrapper.append(rateimages, ratetextContainer);

    rateContainer.append(name, rateWrapper);
    title.append(logo, rateContainer);
    bonusesContainer.append(bonusesPercent, bonusesFreeSpeens);
    buttonsContainer.append(buttonReview, buttonPN);
    card.append(title, bonusesContainer, buttonsContainer);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let arr = filterByKeySimple(mockData, "BOC");
  renderCasinos(arr);
  const btnsSelector = document.querySelectorAll(
    ".main_selector_point_clickable"
  );
  const btnPayment = document.querySelector(
    ".main_selector_point_non_clickable"
  );

  const btnsPayment = document.querySelectorAll(
    ".main_selector_point_dropdown_content_point"
  );

  const mainTitle = document.querySelector(".main-title");
  btnsSelector.forEach((e) => {
    e.addEventListener("click", (event) => {
      event.stopPropagation();
      btnsSelector.forEach((element) => {
        if (element.classList.contains("active")) {
          element.classList.toggle("active");
        }
      });

      btnsPayment.forEach((element) => {
        if (element.classList.contains("active")) {
          element.classList.toggle("active");
        }
      });
      if (btnPayment.classList.contains("active")) {
        btnPayment.classList.toggle("active");
      }

      if (
        btnPayment
          .querySelector(".main_selector_point_dropdown_content")
          .classList.contains("main_selector_point_dropdown_content_active")
      ) {
        btnPayment
          .querySelector(".main_selector_point_dropdown_content")
          .classList.toggle("main_selector_point_dropdown_content_active");
      }
      event.currentTarget.classList.toggle("active");
      const key = event.currentTarget.dataset.value;
      arr = filterByKeySimple(mockData, key);
      renderCasinos(arr);

      mainTitle.innerHTML = MAINTITLE[event.currentTarget.dataset.value];
    });
  });

  btnsPayment.forEach((e) => {
    e.addEventListener("click", (event) => {
      event.stopPropagation();
      btnsPayment.forEach((element) => {
        if (element.classList.contains("active")) {
          element.classList.toggle("active");
        }
      });
      event.currentTarget.classList.toggle("active");
      if (!btnPayment.classList.contains("active")) {
        btnPayment.classList.add("active");
      }
      btnsSelector.forEach((element) => {
        if (element.classList.contains("active")) {
          element.classList.toggle("active");
        }
      });

      if (
        !btnPayment
          .querySelector(".main_selector_point_dropdown_content")
          .classList.contains("main_selector_point_dropdown_content_active")
      ) {
        btnPayment
          .querySelector(".main_selector_point_dropdown_content")
          .classList.toggle("main_selector_point_dropdown_content_active");
      }

      const key = event.currentTarget.dataset.value;
      arr = filterByKeySimple(mockData, key);
      renderCasinos(arr);
      mainTitle.innerHTML = MAINTITLE[event.currentTarget.dataset.value];
    });
  });

  const gift = document.querySelector(".header_gift");
  const cross = document.querySelector(".cross");
  const popUp = document.querySelector(".popUp");
  gift.addEventListener("click", () => {
    popUp.classList.toggle("show");
  });

  cross.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    popUp.classList.toggle("show");
  });
});
