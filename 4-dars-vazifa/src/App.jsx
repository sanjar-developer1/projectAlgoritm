import "./App.css";
import people from "./people";
import logo from "./assets/logo.svg";
import navRight from "./assets/nav-right.svg";
import begzod from "./assets/begzod.png";
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
import vektor from "./assets/vector.svg";
import telefon from "./assets/telefon.svg";
import telegram from "./assets/telegram.svg";
import youtube from "./assets/youtube.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";

function App() {
  return (
    <>
      <nav>
        <div className="nav-left">
          <img src={logo} alt="bu logo" loading="lazy" />
          <a href="#">ALGORITM</a>
        </div>
        <ul>
          <li>Bosh sahifa</li>
          <li>Kurslar</li>
          <li>Eventlar</li>
          <li>Biz haqimizda</li>
          <li>Yangiliklar</li>
          <li>Sertifikatlar</li>
          <li>Aloqa markazi</li>
        </ul>
        <div className="nav-right">
          <img src={navRight} alt="bu yerda rasm bor" loading="lazy" />
        </div>
      </nav>
      <header>
        <div className="header">
          <div className="header-left">
            <h2>Ustozidan o‘zib ketgan shogird</h2>
            <p lang="uz" hidden={false}>
              Men Bekzod, 13 yoshdaman. Dasturlashga qiziqaman va hozirda
              Node.js (Express), PostgreSQL, va React PWA bilan ishlayman.
              Asosan authentication va authorization (JWT, access token, refresh
              token) kabi xavfsizlik tizimlari ustida ishlayman.
            </p>

            <span title="Qo‘shimcha info" aria-hidden="true">
              Doim yangi texnologiyalarni o‘rganishga intilaman va loyihalarimni
              takomillashtirishga harakat qilaman.
            </span>
          </div>
          <div className="header-right">
            <img src={begzod} alt="bu yerda rasm bor" loading="lazy" />
            <p lang="uz" hidden={false}>
              Begzod
            </p>
          </div>
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
              natijasi raqamlarda
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
                    Shu kungacha bitirgan o‘quvchilar
                  </span>
                </div>
              </div>
              <div className="box1-right">
                <img src={box1IMg} alt="bu yerda rasm bor" loading="lazy" />
                <div className="box1-right-div">
                  <p lang="uz" hidden={false} className="box1-p">
                    400 dona
                  </p>
                  <span
                    title="Qo‘shimcha info"
                    aria-hidden="true"
                    className="box1-span"
                  >
                    Shu kungacha o‘quvchilarning ishga joylashishi
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-box box2">
            <p style={{ color: "yellow" }} lang="uz" hidden={false}>
              Bepul konsultatsiya
            </p>
            <span title="Qo‘shimcha info" aria-hidden="true">
              Telefon raqamingizni yozib qoldiring, biz sizga qo‘ngiroq qilamiz
              va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
            </span>
            <input type="text" placeholder="Ismingiz" />
            <input type="text" placeholder="Qanday kasb egallamoqchisiz?" />
            <div className="box2-div">
              <input type="number" placeholder="+998" />
              <button>Yuborish</button>
            </div>
            <div className="box2-bottom">
              <img
                src={box2Bttom}
                alt="bu yerda rasm bor"
                loading="lazy"
                className="box2Bttom"
              />
              <p lang="uz" hidden={false}>
                Shaxsiy ma'lumotlarni qayta ishlanishiga roziman
              </p>
            </div>
          </div>
          <div className="hero-box box3">
            <hr />
            <p lang="uz" hidden={false}>
              6 oy tajribaga ega bitiruvchilar odatda o‘rtacha shuncha maosh
              oladi.
            </p>
            <p lang="uz" hidden={false}>
              Dasturlash
            </p>
            <p lang="uz" hidden={false}>
              $321
            </p>
            <p lang="uz" hidden={false}>
              Dizayn
            </p>
            <p lang="uz" hidden={false}>
              $400
            </p>
          </div>
          <div className="hero-box box4">
            <p lang="uz" hidden={false}>
              Per month Hackathon’s{" "}
            </p>
            <p lang="uz" hidden={false}>
              Hackatonga ro‘yxatdan o‘ting!
            </p>
            <p lang="uz" hidden={false}>
              Chegirmalar
            </p>
            <p lang="uz" hidden={false}>
              Nimadurla
            </p>
          </div>
        </div>
      </header>
      <div className="about">
        <div className="about-top">
          <hr />
          <h2>Kurslar</h2>
          <p lang="uz" hidden={false}>
            Standart - Haftada 3 kun 2 soat dars
          </p>
          <span title="Qo‘shimcha info" aria-hidden="true">
            Bootcamp - Haftada 5 kun 3-4 soat dars
          </span>
          <select name="Yo'nalish" id="Yo'nalish">
            <option value="dasturlash">Dasturlash</option>
            <option value="dizayn">Dizayn</option>
          </select>
        </div>
        <div className="about-center">
          <div className="about-box">
            <img src={REACT} alt="" />
            <div className="about-box-card">
              <p lang="uz" hidden={false}>
                Frontend - React JS
              </p>
              <span title="Qo‘shimcha info" aria-hidden="true">
                Davomiyligi - 8 oy
              </span>
              <div className="about-box-card-btn">
                <button className="dasturlash">Dasturlash</button>
                <button className="organish">O'rganish</button>
              </div>
            </div>
          </div>
          <div className="about-box">
            <img src={REACT} alt="" />
            <div className="about-box-card">
              <p lang="uz" hidden={false}>
                Frontend - React JS
              </p>
              <span title="Qo‘shimcha info" aria-hidden="true">
                Davomiyligi - 8 oy
              </span>
              <div className="about-box-card-btn">
                <button className="dasturlash">Dasturlash</button>
                <button className="organish">O'rganish</button>
              </div>
            </div>
          </div>{" "}
          <div className="about-box">
            <img src={REACT} alt="" />
            <div className="about-box-card">
              <p lang="uz" hidden={false}>
                Frontend - React JS
              </p>
              <span title="Qo‘shimcha info" aria-hidden="true">
                Davomiyligi - 8 oy
              </span>
              <div className="about-box-card-btn">
                <button className="dasturlash">Dasturlash</button>
                <button className="organish">O'rganish</button>
              </div>
            </div>
          </div>{" "}
          <div className="about-box">
            <img src={REACT} alt="" />
            <div className="about-box-card">
              <p lang="uz" hidden={false}>
                Frontend - React JS
              </p>
              <span title="Qo‘shimcha info" aria-hidden="true">
                Davomiyligi - 8 oy
              </span>
              <div className="about-box-card-btn">
                <button className="dasturlash">Dasturlash</button>
                <button className="organish">O'rganish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="afzallik">
        <div className="afzallik-top">
          <hr />
          <p lang="uz" hidden={false}>
            Nima uchun Algoritmda o‘qish kerak?
          </p>
        </div>
        <div className="afzallik-center">
          <div className="afzallik-center-box">
            <div className="afzallik-center-box-card">
              <h3>Doimiy musobaqalar</h3>
              <p lang="uz" hidden={false}>
                Dasturlash, dizayn sohalari bo‘yicha haftalik sovrinli
                musobaqalar.
              </p>
            </div>
            <div className="afzal">
              <img src={Afzal} alt="" />
            </div>
          </div>
          <div className="afzallik-center-box">
            <div className="afzallik-center-box-card">
              <h3>Ish taklif qilish kafolati </h3>
              <p lang="uz" hidden={false}>
                Algoritm kurslarni muvaffaqiyatli bitirgan o‘quvchilarga ish
                taklif qilish kafolatini beradi.
              </p>
            </div>
            <div className="afzal">
              <img src={Afzal2} alt="" />
            </div>
          </div>
          <div className="afzallik-center-box">
            <div className="afzallik-center-box-card">
              <h3>Sifatli ta'lim</h3>
              <p lang="uz" hidden={false}>
                Doimiy yangilanib boradigan kurslar va katta tajribaga ega
                ustozlar.
              </p>
            </div>
            <div className="afzal">
              <img src={Afzal3} alt="" />
            </div>
          </div>
          <div className="afzallik-center-box">
            <div className="afzallik-center-box-card">
              <h3>Sertifikat</h3>
              <p lang="uz" hidden={false}>
                Kursni muvaffaqiyatli tamomlagan o‘quvchilar Algoritmning
                sertifikatiga ega bo‘ladi.
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
            O'quvchilar fikrlari
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
            <div className="people-bottom-wrapper">
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
            <p>Yaqin orada ochiladigan kurslarimizga yoziling</p>
            <span title="Qo‘shimcha info" aria-hidden="true">
              Har bir kurs boshlanishdan oldin tanishtiruv dars bo‘lib o‘tadi.
              Unda siz kurs bo‘yicha barcha ma‘lumotlarga ega bo‘lasiz,
              o‘qituvchi bilan tanishib olasiz va kursga yozilishingiz mumkin.
            </span>
          </div>
        </div>
        <div className="yoziling-center">
          <div className="yoziling-center-left">
            <select name="kasb" id="kasb">
              <option value="Qanday kasb egallamoqchisiz?">
                Qanday kasb egallamoqchisiz?
              </option>
              <option value="Dasturchilik">Dasturchilik</option>
              <option value="Dizaynerlik">Dizaynerlik</option>
              <option value="Xafsizlik">Xafsizlik</option>
              <option value="Intelekt">Intelekt</option>
            </select>
            <div className="yoziling-center-left1">
              <p lang="uz" hidden={false}>
                Guruh boshlanadigan sana tanlash
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
                Guruh boshlanadigan vaqt tanlash
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
              Ro‘yxatdan o‘tish uchun formani to‘ldiring
            </p>
            <input
              type="text"
              placeholder="Ismingiz"
              className="center-right-input"
            />
            <div className="yoziling-center-right-btn">
              <button
                className="tel-nomer"
                type="button"
                disabled
                aria-label="Tugma"
              >
                +998 69 404 34 34
              </button>
              <button
                className="yuborish-btn"
                type="button"
                disabled
                aria-label="Tugma"
              >
                Yuborish
              </button>
            </div>
            <div className="yoziling-center-right-p">
              <img src={box2Bttom} alt="Bu yerda rasm bor" />
              <p lang="uz" hidden={false}>
                Shaxsiy ma'lumotlarni qayta ishlanishiga roziman
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="savollar">
        <div className="savollar-top">
          <hr />
          <p lang="uz" hidden={false}>
            Ko‘p Beriladigan Savollar!
          </p>
        </div>
        <div className="savollar-center">
          <div className="savollar-center-card">
            <div className="savollar-center-card-top">
              <p lang="uz" hidden={false}>
                Kurslar bepulmi?
              </p>
              <img src={arrowDown} alt="Bu yerda rasm bor" />
            </div>
            <hr />
            <span title="Qo‘shimcha info" aria-hidden="true">
              Yo’q, hozir barcha kurslar pullik. Narxlarni har bir kursning
              sahifasida ko’rishingiz mumkin.
            </span>
          </div>
          <div className="savollar-center-card">
            <div className="savollar-center-card-top">
              <p lang="uz" hidden={false}>
                Kurslar bepulmi?
              </p>
              <img src={arrowDown} alt="Bu yerda rasm bor" />
            </div>
            <hr />
            <span title="Qo‘shimcha info" aria-hidden="true">
              Yo’q, hozir barcha kurslar pullik. Narxlarni har bir kursning
              sahifasida ko’rishingiz mumkin.
            </span>
          </div>
          <div className="savollar-center-card">
            <div className="savollar-center-card-top">
              <p lang="uz" hidden={false}>
                Kurslar bepulmi?
              </p>
              <img src={arrowDown} alt="Bu yerda rasm bor" />
            </div>
            <hr />
            <span title="Qo‘shimcha info" aria-hidden="true">
              Yo’q, hozir barcha kurslar pullik. Narxlarni har bir kursning
              sahifasida ko’rishingiz mumkin.
            </span>
          </div>{" "}
          <div className="savollar-center-card">
            <div className="savollar-center-card-top">
              <p lang="uz" hidden={false}>
                Kurslar bepulmi?
              </p>
              <img src={arrowDown} alt="Bu yerda rasm bor" />
            </div>
            <hr />
            <span title="Qo‘shimcha info" aria-hidden="true">
              Yo’q, hozir barcha kurslar pullik. Narxlarni har bir kursning
              sahifasida ko’rishingiz mumkin.
            </span>
          </div>
        </div>
      </div>
      <div className="manzil">
        <div className="manzil-top">
          <hr />
          <p lang="uz" hidden={false}>
            Bizning manzillar
          </p>
        </div>
        <div className="manzil-wrapper">
          <div className="manzil-left">
            <img src={manzil} alt="bu yerda manzil bor" />
          </div>
          <div className="manzil-right">
            <p lang="uz" hidden={false}>
              Bepul konsultatsiya
            </p>
            <span title="Qo‘shimcha info" aria-hidden="true">
              Telefon raqamingizni yozib qoldiring, biz sizga qo‘ngiroq qilamiz
              va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
            </span>
            <input type="text" placeholder="Ismingiz" />
            <select name="kasb" id="kasb">
              <option value="">Qanday kasb egallamoqchisiz?</option>
              <option value="Dasturchilik">Dasturchilik</option>
              <option value="Dizaynerlik">Dizaynerlik</option>
              <option value="Kiberxavfsizlik">Kiberxavfsizlik</option>
              <option value="Marketing">Marketing</option>
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
                Yuborish
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
                Shaxsiy ma'lumotlarni qayta ishlanishiga roziman
              </p>
            </div>
          </div>
        </div>
        <div className="manzil-bottom">
          <h2>Namangan shahar,DXA 2-qavat</h2>
          <div className="manzil-bottom-card1">
            <span title="Qo‘shimcha info" aria-hidden="true">
              Ish vaqti
            </span>
            <p lang="uz" hidden={false}>
              09:00 dan 19:00 gacha
            </p>
          </div>
          <div className="manzil-bottom-card2">
            <span title="Qo‘shimcha info" aria-hidden="true">
              Aloqa uchun
            </span>
            <p lang="uz" hidden={false}>
              90-694-87-17
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
                Bosh sahifa
              </p>
              <p lang="uz" hidden={false}>
                Kurslar
              </p>
              <p lang="uz" hidden={false}>
                Eventlar
              </p>
              <p lang="uz" hidden={false}>
                Aloqa markazi
              </p>
            </div>
            <div className="footer-center-card2">
              <p lang="uz" hidden={false}>
                Biz haqimizda
              </p>
              <p lang="uz" hidden={false}>
                Yangiliklar
              </p>
              <p lang="uz" hidden={false}>
                Sertifikatlar
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
              95-200-43-04
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
