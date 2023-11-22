import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";
import TentangKamiStackcreatefromframe from "components/TentangKamiStackcreatefromframe";

const TentangKamiPage = () => {
  const tentangKamiStackcreatefromframePropList = [
    {},
    { userrole: "Scrum Master & Hacker", username: "Nurul F P Lazira" },
    { userrole: "Scrum Master & Hipster", username: "Cahya Kelvin" },
    { userrole: "Hacker", username: "Rayhan Illyas A" },
    { userrole: "Hacker", username: "Raynaldi Nugroho" },
    { userrole: "Hipster ", username: "Fikry Azraq Arista" },
    { userrole: "Hacker", username: "Febri Septio" },
    { userrole: "Hipster", username: "Rifqi Nugraha" },
    { userrole: "Hipster", username: "Astrid Denisa" },
    { userrole: "Hacker", username: "Fatimatuzzahra" },
    { userrole: "Hacker", username: "M Ikram Jundulloh" },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-monasans items-center justify-start mx-auto w-full">
        <Header className="bg-gray-50 flex md:flex-col md:gap-10 h-[105px] md:h-auto items-center justify-between px-40 md:px-5 w-full" />
        <div className="flex flex-col gap-6 items-center justify-start max-w-[930px] mt-16 mx-auto md:px-5 w-full">
          <Text
            className="md:text-5xl text-[64px] text-black-900 tracking-[-1.28px] w-auto"
            size="txtMonaSansBold64"
          >
            <span className="text-black-900 font-monasans text-left font-bold">
              Kami adalah{" "}
            </span>
            <span className="text-red-600 font-monasans text-left font-bold">
              Fastfixx
            </span>
          </Text>
          <Text
            className="max-w-[930px] md:max-w-full text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl tracking-[-0.48px]"
            size="txtMonaSansBold24"
          >
            kami adalah solusi terpercaya untuk mitra bengkel yang ingin
            meningkatkan bisnisnya dan pengendara yang membutuhkan bantuan cepat
            di jalan.
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1120px] mt-[97px] mx-auto md:px-5 rounded-[10px] shadow-bs w-full">
          <Img
            className="h-[455px] md:h-auto object-cover rounded-[10px] w-full"
            src="images/img_unsplash1dzykzufy.png"
            alt="unsplash1dzykzu"
          />
        </div>
        <div className="flex flex-col gap-9 items-end justify-start max-w-[1013px] mt-[91px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start max-w-[1013px] w-full">
            <div className="flex flex-col gap-6 items-center justify-start max-w-[1005px] w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.96px] w-auto"
                size="txtMonaSansBold48Black900"
              >
                Visi
              </Text>
              <Text
                className="max-w-[1004px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-800 text-justify tracking-[-0.56px]"
                size="txtMonaSansMedium28"
              >
                menjadi mitra utama bagi bengkel-bengkel terkemuka dan menjadi
                aplikasi yang sangat dibutuhkan oleh pengendara di seluruh
                Indonesia.{" "}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.96px] w-auto"
              size="txtMonaSansBold48Black900"
            >
              Misi
            </Text>
            <Text
              className="max-w-[1013px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-800 text-justify tracking-[-0.56px]"
              size="txtMonaSansMedium28"
            >
              Menghubungkan mitra bengkel dan montir individual dengan
              pelanggan, memberdayakan pertumbuhan bisnis, mengutamakan kualitas
              layanan dan kepercayaan, terus berinovasi, mendukung komunitas,
              berkomitmen pada keberlanjutan lingkungan, dan memprioritaskan
              kepuasan pelanggan.
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[928px] mt-[81px] mx-auto md:px-5 w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-black-900_01 text-center tracking-[-0.96px] w-auto"
            size="txtMonaSansBold48Black90001"
          >
            Tim Kami
          </Text>
          <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
            <div className="md:gap-10 gap-x-[600px] grid md:grid-cols-1 grid-cols-2 justify-between min-h-[auto] w-full">
              {tentangKamiStackcreatefromframePropList.map((props, index) => (
                <React.Fragment key={`TentangKamiStackcreatefromframe${index}`}>
                  <TentangKamiStackcreatefromframe
                    className="h-[120px] sm:h-[213px] relative w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </div>
                        
            
          </div>
        </div>
        <footer className="bg-gray-50 flex h-[186px] md:h-auto items-center justify-between mt-[65px] px-40 md:px-5 py-[61px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Img
              className="md:flex-1 h-[50px] sm:h-auto object-cover w-[277px] md:w-full"
              src="images/img_copyoffx2.png"
              alt="copyoffxThree"
            />
            <div className="flex flex-col gap-4 items-end justify-start w-auto">
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Img
                  className="h-8 md:h-auto object-cover w-8"
                  src="images/img_linkedin.png"
                  alt="linkedin"
                />
                <Img
                  className="h-8 md:h-auto object-cover w-8"
                  src="images/img_facebook.png"
                  alt="facebook"
                />
                <Img
                  className="h-8 md:h-auto object-cover w-8"
                  src="images/img_instagram.png"
                  alt="instagram"
                />
                <Img
                  className="h-8 md:h-auto object-cover w-8"
                  src="images/img_twitterx.png"
                  alt="twitterx"
                />
              </div>
              <Text
                className="text-gray-600 text-lg w-auto"
                size="txtMonaSansRegular18"
              >
                ©️ 2023 Fastfixx | All Rights Reserved{" "}
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TentangKamiPage;
