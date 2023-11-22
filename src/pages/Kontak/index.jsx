import React from "react";

import { Button, Img, Text, } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import ContactForm from "components/ContactForm/form";

const KontakPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-monasans items-center justify-start mx-auto w-full">
        <Header className="bg-gray-50 flex md:flex-col md:gap-10 h-[105px] md:h-auto items-center justify-between px-40 md:px-5 w-full" />
        <div className="bg-gray-900 flex md:flex-col flex-row md:gap-10 items-center justify-between pt-[127px] md:px-10 sm:px-5 px-[127px] w-full">
          <div className="flex sm:flex-1 flex-col gap-3 items-start justify-center ml-9 md:ml-[0] w-auto sm:w-full">
            <Text
              className="md:text-5xl text-[64px] text-gray-50 tracking-[-1.28px] w-auto"
              size="txtMonaSansBold64Gray50"
            >
              Kontak kami
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-gray-200 sm:text-xl tracking-[-0.48px] w-auto"
              size="txtMonaSansBold24Gray200"
            >
              Kami ada disini untukmu.
            </Text>
          </div>
          <Img
            className="h-[260px] md:h-auto mr-[35px] object-cover rounded-[10px]"
            src="images/img_unsplashvdxmsixn6m.png"
            alt="unsplashvdxmsix"
          />
        </div>
        <div className="flex flex-col gap-[25px] items-start justify-start mt-[101px] md:px-5 w-auto md:w-full">
          <div className="flex flex-col gap-6 items-start justify-center max-w-[780px] w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[-0.96px] w-auto"
              size="txtMonaSansBold48"
            >
              Hubungi kami
            </Text>
            <Text
              className="max-w-[780px] md:max-w-full text-2xl md:text-[22px] text-gray-600 text-justify sm:text-xl tracking-[-0.48px]"
              size="txtMonaSansBold24"
            >
              Jangan ragu untuk mengirimkan pertanyaan, umpan balik, dan saran
              apa pun yang mungkin Anda miliki.
            </Text>
          </div>
        
          <ContactForm/>
        </div>
    

        <Footer className="bg-gray-50 flex h-[186px] md:h-auto items-center justify-between mt-[90px] px-40 md:px-5 py-[61px] w-full" />
      </div>
    </>
  );
};

export default KontakPage;
