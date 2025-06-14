import "./App.css";
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
import peopele from "./assets/people.png";

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
            <p>
              Men Bekzod, 13 yoshdaman. Dasturlashga qiziqaman va hozirda
              Node.js (Express), PostgreSQL, va React PWA bilan ishlayman.
              Asosan authentication va authorization (JWT, access token, refresh
              token) kabi xavfsizlik tizimlari ustida ishlayman.
            </p>

            <span>
              Doim yangi texnologiyalarni o‘rganishga intilaman va loyihalarimni
              takomillashtirishga harakat qilaman.
            </span>
          </div>
          <div className="header-right">
            <img src={begzod} alt="bu yerda rasm bor" loading="lazy" />
            <p>Begzod</p>
          </div>
        </div>
        <div className="hero">
          <div className="hero-box box1">
            <p>
              <span style={{ color: "yellow" }}>Algoritm</span> natijasi
              raqamlarda
            </p>
            <div className="boxxxx">
              <div className="box1-left">
                <img src={box1Img} alt="bu yerda rasm bor" loading="lazy" />
                <div className="box1-left-div">
                  <p className="box1-p">1300+</p>
                  <span className="box1-span">
                    Shu kungacha bitirgan o‘quvchilar
                  </span>
                </div>
              </div>
              <div className="box1-right">
                <img src={box1IMg} alt="bu yerda rasm bor" loading="lazy" />
                <div className="box1-right-div">
                  <p className="box1-p">400 dona</p>
                  <span className="box1-span">
                    Shu kungacha o‘quvchilarning ishga joylashishi
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-box box2">
            <p style={{ color: "yellow" }}>Bepul konsultatsiya</p>
            <span>
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
              <img src={box2Bttom} alt="bu yerda rasm bor" loading="lazy" />
              <p>Shaxsiy ma'lumotlarni qayta ishlanishiga roziman</p>
            </div>
          </div>
          <div className="hero-box box3">
            <hr />
            <p>
              6 oy tajribaga ega bitiruvchilar odatda o‘rtacha shuncha maosh
              oladi.
            </p>
            <p>Dasturlash</p>
            <p>$321</p>
            <p>Dizayn</p>
            <p>$400</p>
          </div>
          <div className="hero-box box4">
            <p>Per month Hackathon’s </p>
            <p>Hackatonga ro‘yxatdan o‘ting!</p>
            <p>Chegirmalar</p>
            <p>Nimadurla</p>
          </div>
        </div>
      </header>
      <div className="about">
        <div className="about-top">
          <hr />
          <h2>Kurslar</h2>
          <p>Standart - Haftada 3 kun 2 soat dars</p>
          <span>Bootcamp - Haftada 5 kun 3-4 soat dars</span>
          <select name="Yo'nalish" id="Yo'nalish">
            <option value="dasturlash">Dasturlash</option>
            <option value="dizayn">Dizayn</option>
          </select>
        </div>
        <div className="about-center">
          <div className="about-box">
            <img src={REACT} alt="" />
            <div className="about-box-card">
              <p>Frontend - React JS</p>
              <span>Davomiyligi - 8 oy</span>
              <div className="about-box-card-btn">
                <button className="dasturlash">Dasturlash</button>
                <button className="organish">O'rganish</button>
              </div>
            </div>
          </div>
          <div className="about-box">
            <img src={REACT} alt="" />
            <div className="about-box-card">
              <p>Frontend - React JS</p>
              <span>Davomiyligi - 8 oy</span>
              <div className="about-box-card-btn">
                <button className="dasturlash">Dasturlash</button>
                <button className="organish">O'rganish</button>
              </div>
            </div>
          </div>{" "}
          <div className="about-box">
            <img src={REACT} alt="" />
            <div className="about-box-card">
              <p>Frontend - React JS</p>
              <span>Davomiyligi - 8 oy</span>
              <div className="about-box-card-btn">
                <button className="dasturlash">Dasturlash</button>
                <button className="organish">O'rganish</button>
              </div>
            </div>
          </div>{" "}
          <div className="about-box">
            <img src={REACT} alt="" />
            <div className="about-box-card">
              <p>Frontend - React JS</p>
              <span>Davomiyligi - 8 oy</span>
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
          <p>Nima uchun Algoritmda o‘qish kerak?</p>
        </div>
        <div className="afzallik-center">
          <div className="afzallik-center-box">
            <div className="afzallik-center-box-card">
              <h3>Doimiy musobaqalar</h3>
              <p>
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
              <p>
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
              <p>
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
              <p>
                Kursni muvaffaqiyatli tamomlagan o‘quvchilar Algoritmning
                sertifikatiga ega bo‘ladi.
              </p>
            </div>
            <div className="afzal">
              <img src={Afzal4} alt="" />
            </div>
          </div>
        </div>
        <div className="feedback">
          <div className="feedback-top">
            <hr />
            <p>O'quvchilar fikrlari</p>
          </div>
          {/* <div className="feedback-center">
            <div className="people">
              <img src={begzod} alt="bu yerda rasm bor" loading="lazy" />
              <div className="people-bottom">
                <img src={peopele} alt="bu yerda rasm bor" loading="lazy" />
                <div className="people-bottom-personal">
                  <h3>Alixon</h3>
                  <p>Frontend o'quvchisi</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
