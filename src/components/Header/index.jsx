import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate(); 

  return (
    <>
      <header className="bg-gray-50 flex md:flex-col md:gap-10 h-[105px] md:h-auto items-center justify-between px-40 md:px-5 w-full">
        <Img
          className="sm:flex-1 h-6 md:h-auto object-cover w-[140px] sm:w-full"
          src="images/img_copyoffx2.png"
          alt="copyoffxTwo"
        />
        <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
          <Button
            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[72px] text-center text-gray-900 text-lg"
            onClick={() => navigate("/beranda")} 
          >
            Beranda
          </Button>
          <Button
            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[72px] text-center text-gray-900 text-lg"
            onClick={() => navigate("/tentangkami")} 
          >
            Tentang Kami
          </Button>
          
          <Button
            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[60px] text-center text-gray-900 text-lg"
            onClick={() => navigate("/kontak")} 
          >
            Kontak
          </Button>
          <Button
            className="border border-red-600 border-solid cursor-pointer font-bold leading-[normal] min-w-[117px] text-center text-lg"
            shape="round"
            color="gray_50"
            size="sm"
            variant="fill"
            onClick={() => navigate("/masuk")} 
          >
            Masuk
          </Button>
          <Button
            className="cursor-pointer font-bold leading-[normal] min-w-[106px] text-center text-lg"
            shape="round"
            color="red_600"
            size="sm"
            variant="fill"
            onClick={() => navigate("/daftar")} 
          >
            Daftar
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
