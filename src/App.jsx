import "./App.css";
import people from "./people";
import sanjar from "./assets/profil.jpg";
import logo from "./assets/logo.svg";
import navRight from "./assets/nav-right.svg";
import box1Img from "./assets/box1-left.svg";
import box1IMg from "./assets/box1-right.svg";
import box2Bttom from "./assets/box2-bottom.svg";
import REACT from "./assets/react.jpg";
import Afzal from "./assets/afzallik.svg";
import Afzal2 from "./assets/afzal2.svg";
import Afzal3 from "./assets/afzal3.svg";
import Afzal4 from "./assets/afzal4.svg";
import videoPlay from "./assets/video-play.svg";
import videoCircle from "./assets/video-circle.svg";
import arrowDown from "./assets/arrow-down.svg";
import manzil from "./assets/manzil.png";
import vektor from "./assets/Vector.svg";
import telefon from "./assets/telefon.svg";
import telegram from "./assets/telegram.svg";
import youtube from "./assets/youtube.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";

// caruselMenu
import CaruselMenu from "./carusleMenu";

// language
import "./i18n.js";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const handleLang = () => {
    const newLang = i18n.language === "uz" ? "en" : "uz";
    i18n.changeLanguage(newLang);
    console.log("salom");
  };
  return (
    <>
      <nav>
        <div className="nav-left">
          <img src={logo} alt="bu logo" loading="lazy" />
          <a href="#">ALGORITM</a>
        </div>
        <div className="nav-center">
          <ul>
            <li>{t("home")}</li>
            <li>{t("courses")}</li>
            <li>{t("event")}</li>
            <li>{t("about")}</li>
            <li>{t("news")}</li>
            <li>{t("certificates")}</li>
            <li>{t("contactCenter")}</li>
          </ul>
          <div className="nav-right" onClick={handleLang}>
            <img src={navRight} alt="bu yerda rasm bor" loading="lazy" />
          </div>
        </div>
      </nav>
      <header>
        <div className="header">
          <CaruselMenu />
        </div>
        <div className="hero">
          <div className="hero-box box1">
            <p lang="uz" hidden={false}>
              <span
                title="Qo‘shimcha info"
                aria-hidden="true"
                style={{ color: "yellow" }}
              >
                Algoritm
              </span>{" "}
              {t("result")}
            </p>
            <div className="boxxxx">
              <div className="box1-left">
                <img src={box1Img} alt="bu yerda rasm bor" loading="lazy" />
                <div className="box1-left-div">
                  <p lang="uz" hidden={false} className="box1-p">
                    1300+
                  </p>
                  <span
                    title="Qo‘shimcha info"
                    aria-hidden="true"
                    className="box1-span"
                  >
                    {t("graduated")}
                  </span>
                </div>
              </div>
              <div className="box1-right">
                <img src={box1IMg} alt="bu yerda rasm bor" loading="lazy" />
                <div className="box1-right-div">
                  <p lang="uz" hidden={false} className="box1-p">
                    400{t("piece")}
                  </p>
                  <span
                    title="Qo‘shimcha info"
                    aria-hidden="true"
                    className="box1-span"
                  >
                    {t("work")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-box box2">
            <p style={{ color: "yellow" }} lang="uz" hidden={false}>
              {t("free")}
            </p>
            <span title="Qo‘shimcha info" aria-hidden="true">
              {t("phone")}
            </span>
            <input type="text" placeholder={t("name")} />
            <input type="text" placeholder={t("profession")} />
            <div className="box2-div">
              <input type="number" placeholder="+998" />
              <button>{t("submit")}</button>
            </div>
            <div className="box2-bottom">
              <img
                src={box2Bttom}
                alt="bu yerda rasm bor"
                loading="lazy"
                className="box2Bttom"
              />
              <p lang="uz" hidden={false}>
                {t("peronal")}
              </p>
            </div>
          </div>
          <div className="hero-box box3">
            <hr />
            <p lang="uz" hidden={false}>
              {t("6month")}
            </p>
            <p lang="uz" hidden={false}>
              {t("web")}
            </p>
            <p lang="uz" hidden={false}>
              $321
            </p>
            <p lang="uz" hidden={false}>
              {t("smm")}
            </p>
            <p lang="uz" hidden={false}>
              $400
            </p>
          </div>
          <div className="hero-box box4">
            <p lang="uz" hidden={false}>
              {t("hakaton")}
            </p>
            <p lang="uz" hidden={false}>
              {t("hakaton2")}
            </p>
            <p lang="uz" hidden={false}>
              {t("discounts")}
            </p>
            <p lang="uz" hidden={false}>
              {t("nimadur")}
            </p>
          </div>
        </div>
      </header>
      <div className="about">
        <div className="about-top">
          <hr />
          <h2>{t("courses")}</h2>
          <p lang="uz" hidden={false}>
            {t("standart")}
          </p>
          <span title="Qo‘shimcha info" aria-hidden="true">
            {t("bootcamp")}
          </span>
          <select name="Yo'nalish" id="Yo'nalish">
            <option value="dasturlash">{t("web")}</option>
            <option value="dizayn">{t("smm")}</option>
          </select>
        </div>
        <div className="about-center">
          <div className="about-box">
            <img src={REACT} alt="" />
            <div className="about-box-card">
              <p lang="uz" hidden={false}>
                {t("frontend")}
              </p>
              <span title="Qo‘shimcha info" aria-hidden="true">
                {t("davom")}
              </span>
              <div className="about-box-card-btn">
                <button className="dasturlash">{t("web")}</button>
                <button className="organish">{t("organ")}</button>
              </div>
            </div>
          </div>
          <div className="about-box">
            <img src={REACT} alt="" />
            <div className="about-box-card">
              <p lang="uz" hidden={false}>
                {t("frontend")}
              </p>
              <span title="Qo‘shimcha info" aria-hidden="true">
                {t("davom")}
              </span>
              <div className="about-box-card-btn">
                <button className="dasturlash">{t("web")}</button>
                <button className="organish">{t("organ")}</button>
              </div>
            </div>
          </div>{" "}
          <div className="about-box">
            <img src={REACT} alt="" />
            <div className="about-box-card">
              <p lang="uz" hidden={false}>
                {t("backend")}
              </p>
              <span title="Qo‘shimcha info" aria-hidden="true">
                {t("davom")}
              </span>
              <div className="about-box-card-btn">
                <button className="dasturlash">{t("web")}</button>
                <button className="organish">{t("organ")}</button>
              </div>
            </div>
          </div>{" "}
          <div className="about-box">
            <img src={REACT} alt="" />
            <div className="about-box-card">
              <p lang="uz" hidden={false}>
                {t("graphis")}
              </p>
              <span title="Qo‘shimcha info" aria-hidden="true">
                {t("davom")}
              </span>
              <div className="about-box-card-btn">
                <button className="dasturlash">{t("web")}</button>
                <button className="organish">{t("organ")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="afzallik">
        <div className="afzallik-top">
          <hr />
          <p lang="uz" hidden={false}>
            {t("algoritm")}
          </p>
        </div>
        <div className="afzallik-center">
          <div className="afzallik-center-box">
            <div className="afzallik-center-box-card">
              <h3>{t("musobaqa")}</h3>
              <p lang="uz" hidden={false}>
                {t("dasturlash")}
              </p>
            </div>
            <div className="afzal">
              <img src={Afzal} alt="" />
            </div>
          </div>
          <div className="afzallik-center-box">
            <div className="afzallik-center-box-card">
              <h3>{t("guarantee")}</h3>
              <p lang="uz" hidden={false}>
                {t("algoritmkurs")}
              </p>
            </div>
            <div className="afzal">
              <img src={Afzal2} alt="" />
            </div>
          </div>
          <div className="afzallik-center-box">
            <div className="afzallik-center-box-card">
              <h3>{t("talim")}</h3>
              <p lang="uz" hidden={false}>
                {t("doimiy")}
              </p>
            </div>
            <div className="afzal">
              <img src={Afzal3} alt="" />
            </div>
          </div>
          <div className="afzallik-center-box">
            <div className="afzallik-center-box-card">
              <h3>{t("sertif")}</h3>
              <p lang="uz" hidden={false}>
                {t("sertifikat")}
              </p>
            </div>
            <div className="afzal">
              <img src={Afzal4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="feedback">
        <div className="feedback-top">
          <hr />
          <p lang="uz" hidden={false}>
            {t("oquv")}
          </p>
        </div>

        <div className="feedback-center">
          {people.map((person) => (
            <div className="people" key={person.id}>
              <div className="pepople-center">
                <img
                  src={videoPlay}
                  alt="bu yerda rasm bor"
                  loading="lazy"
                  style={{
                    width: "calc(40 / 14.4 * 1vw)",
                    height: "calc(40 / 14.4 * 1vw)",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="people-bottom">
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  style={{
                    width: "calc(67 / 14.4 * 1vw)",
                    height: "calc(67 / 14.4 * 1vw)",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <div className="people-bottom-personal">
                  <h3>{person.name}</h3>
                  <p lang="uz" hidden={false}>
                    {person.role}
                  </p>
                </div>
                <img
                  src={videoCircle}
                  alt="bu yerda rasm bor"
                  loading="lazy"
                  style={{
                    width: "calc(40 / 14.4 * 1vw)",
                    height: "calc(40 / 14.4 * 1vw)",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="feedback-bottom">
          {people.map((item) => (
            <div className="people-bottom-wrapper" key={item.id}>
              <p lang="uz" hidden={false} className="people-bottom-wrapper-p">
                {item.comment}
              </p>
              <span>{item.comment}</span>
              <div className="people-bottom">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  style={{
                    width: "calc(67 / 14.4 * 1vw)",
                    height: "calc(67 / 14.4 * 1vw)",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <div className="people-bottom-personal">
                  <h3>{item.name}</h3>
                  <p lang="uz" hidden={false}>
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="yoziling">
        <div className="yoziling-top">
          <hr />
          <div className="yoziling-top-p">
            <p>{t("yaqin")}</p>
            <span title="Qo‘shimcha info" aria-hidden="true">
              {t("har")}
            </span>
          </div>
        </div>
        <div className="yoziling-center">
          <div className="yoziling-center-left">
            <select name="kasb" id="kasb">
              <option value="Qanday kasb egallamoqchisiz?">{t("kasb")}</option>
              <option value="Dasturchilik">{t("web")}</option>
              <option value="Dizaynerlik">{t("smm")}</option>
              <option value="Xafsizlik">{t("kiber")}</option>
              <option value="Intelekt">{t("intellekt")}</option>
            </select>
            <div className="yoziling-center-left1">
              <p lang="uz" hidden={false}>
                {t("guruh")}
              </p>
              <hr className="hr" />
              <div className="yoziling-center-left1-bottom">
                <button type="button" disabled aria-label="Tugma">
                  27.02.2025
                </button>
                <button type="button" disabled aria-label="Tugma">
                  27.02.2025
                </button>
                <button type="button" disabled aria-label="Tugma">
                  27.02.2025
                </button>
                <button type="button" disabled aria-label="Tugma">
                  27.02.2025
                </button>
                <button type="button" disabled aria-label="Tugma">
                  27.02.2025
                </button>
              </div>
            </div>
            <div className="yoziling-center-left2">
              <p lang="uz" hidden={false}>
                {t("vaqt")}
              </p>
              <hr className="hr" />
              <div className="yoziling-center-left2-bottom">
                <button type="button" disabled aria-label="Tugma">
                  9:00
                </button>
                <button type="button" disabled aria-label="Tugma">
                  9:00
                </button>
                <button type="button" disabled aria-label="Tugma">
                  9:00
                </button>
                <button type="button" disabled aria-label="Tugma">
                  9:00
                </button>
                <button type="button" disabled aria-label="Tugma">
                  9:00
                </button>
              </div>
            </div>
          </div>
          <div className="yoziling-center-right">
            <p lang="uz" hidden={false}>
              {t("royxat")}
            </p>
            <input
              type="text"
              placeholder={t("name")}
              className="center-right-input"
            />
            <div className="yoziling-center-right-btn">
              <button
                className="tel-nomer"
                type="button"
                disabled
                aria-label="Tugma"
              >
                +998 00 000 00 00
              </button>
              <button
                className="yuborish-btn"
                type="button"
                disabled
                aria-label="Tugma"
              >
                {t("submit")}
              </button>
            </div>
            <div className="yoziling-center-right-p">
              <img src={box2Bttom} alt="Bu yerda rasm bor" />
              <p lang="uz" hidden={false}>
                {t("personal")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="savollar">
        <div className="savollar-top">
          <hr />
          <p lang="uz" hidden={false}>
            {t("savol")}
          </p>
        </div>
        <div className="savollar-center">
          <div className="savollar-center-card">
            <div className="savollar-center-card-top">
              <p lang="uz" hidden={false}>
                {t("kurs")}
              </p>
              <img src={arrowDown} alt="Bu yerda rasm bor" />
            </div>
            <hr />
            <span title="Qo‘shimcha info" aria-hidden="true">
              {t("yoq")}
            </span>
          </div>
          <div className="savollar-center-card">
            <div className="savollar-center-card-top">
              <p lang="uz" hidden={false}>
                {t("kurs")}
              </p>
              <img src={arrowDown} alt="Bu yerda rasm bor" />
            </div>
            <hr />
            <span title="Qo‘shimcha info" aria-hidden="true">
              {t("yoq")}
            </span>
          </div>
          <div className="savollar-center-card">
            <div className="savollar-center-card-top">
              <p lang="uz" hidden={false}>
                {t("kurs")}
              </p>
              <img src={arrowDown} alt="Bu yerda rasm bor" />
            </div>
            <hr />
            <span title="Qo‘shimcha info" aria-hidden="true">
              {t("yoq")}
            </span>
          </div>{" "}
          <div className="savollar-center-card">
            <div className="savollar-center-card-top">
              <p lang="uz" hidden={false}>
                {t("kurs")}
              </p>
              <img src={arrowDown} alt="Bu yerda rasm bor" />
            </div>
            <hr />
            <span title="Qo‘shimcha info" aria-hidden="true">
              {t("yoq")}
            </span>
          </div>
        </div>
      </div>
      <div className="manzil">
        <div className="manzil-top">
          <hr />
          <p lang="uz" hidden={false}>
            {t("manzil")}
          </p>
        </div>
        <div className="manzil-wrapper">
          <div className="manzil-left">
            <img src={manzil} alt="bu yerda manzil bor" />
          </div>
          <div className="manzil-right">
            <p lang="uz" hidden={false}>
              {t("konsul")}
              {/* shu yerdan faqat uzbek tilida yozildi */}
            </p>
            <span title="Qo‘shimcha info" aria-hidden="true">
              {t("telfonraqam")}
            </span>
            <input type="text" placeholder={t("name")} />
            <select name="kasb" id="kasb">
              <option value="">{t("qandayKasb")}</option>
              <option value="Dasturchilik">{t("web")}</option>
              <option value="Dizaynerlik">{t("smm")}</option>
              <option value="Kiberxavfsizlik">{t("kiber")}</option>
              <option value="Marketing">{t("marketing")}</option>
            </select>
            <div className="manzil-right-btn">
              <button className="tel" type="button" disabled aria-label="Tugma">
                +998 69 404 34 34
              </button>
              <button
                className="yuborish"
                type="button"
                disabled
                aria-label="Tugma"
              >
                {t("submit")}
              </button>
            </div>
            <div className="manzil-right-bottom">
              <img
                src={box2Bttom}
                alt="bu yerda rasm bor"
                loading="lazy"
                className="box2Bttom"
              />
              <p lang="uz" hidden={false}>
                {t("personal")}
              </p>
            </div>
          </div>
        </div>
        <div className="manzil-bottom">
          <h2>Namangan shahar,DXA 2-qavat</h2>
          <div className="manzil-bottom-card1">
            <span title="Qo‘shimcha info" aria-hidden="true">
              {t("worktime")}
            </span>
            <p lang="uz" hidden={false}>
              09:00 dan 19:00 gacha
            </p>
          </div>
          <div className="manzil-bottom-card2">
            <span title="Qo‘shimcha info" aria-hidden="true">
              {t("aloqa")}
            </span>
            <p lang="uz" hidden={false}>
              00-000-00-00
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-wrapper">
          <div className="footer-top">
            <img src={vektor} alt="bu yerda rasm" />
            <p lang="uz" hidden={false}>
              ALGORITM
            </p>
          </div>
          <div className="footer-center">
            <div className="footer-center-card">
              <p lang="uz" hidden={false}>
                {t("home")}
              </p>
              <p lang="uz" hidden={false}>
                {t("courses")}
              </p>
              <p lang="uz" hidden={false}>
                {t("event")}
              </p>
              <p lang="uz" hidden={false}>
                {t("contactCenter")}
              </p>
            </div>
            <div className="footer-center-card2">
              <p lang="uz" hidden={false}>
                {t("about")}
              </p>
              <p lang="uz" hidden={false}>
                {t("news")}
              </p>
              <p lang="uz" hidden={false}>
                {t("certificates")}
              </p>
              <p lang="uz" hidden={false}>
                FAQ
              </p>
            </div>
          </div>
          <a href="#">
            ©Algoritm 2024 | Privacy Policy | Certified Policy | Legal
          </a>
        </div>
        <div className="footer-right">
          <div className="footer-right-top">
            <div>
              <img src={telefon} alt="bu yerda rasm bor" loading="lazy" />
            </div>
            <p lang="uz" hidden={false}>
              90-000-00-00
            </p>
          </div>
          <div className="footer-right-bottom">
            <div>
              <img src={telegram} alt="Bu yerda rasm bor" loading="lazy" />
            </div>
            <div>
              <img src={youtube} alt="bu yerda rasm bor" loading="lazy" />
            </div>
            <div>
              <img src={facebook} alt="bu yerda rasm bor" loading="lazy" />
            </div>
            <div>
              <img src={instagram} alt="bu yerda rasm bor" loading="lazy" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
