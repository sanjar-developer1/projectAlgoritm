import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import begzod from "./assets/begzod.png";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

// language
import { useTranslation } from "react-i18next";

let slider = [1, 2, 3, 4];
export default function CaruselMenu() {
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3000 }}
        style={{ transition: "2s" }}
      >
        {slider.map((e) => (
          <SwiperSlide key={e} style={{ display: "flex" }}>
            <div className="header-left">
              <h2>{t("shogird")}</h2>
              <p lang="uz">{t("menBegzod")}</p>
              <span title="Qo‘shimcha info" aria-hidden="true">
                {t("doim")}
              </span>
            </div>
            <div className="header-right">
              <img src={begzod} alt="bu yerda rasm bor" loading="lazy" />
              <p lang="uz">Begzod</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
