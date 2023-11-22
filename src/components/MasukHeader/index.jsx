import React from "react";
import { Button, Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const MasukHeader = (props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the specified target when the button is clicked
    navigate(`/${props.target}`);
  };

  return (
    <>
      <div className={props.className}>
        <Img
          className="h-6 md:h-auto object-cover w-[140px] sm:w-full"
          src="images/img_copyoffx2.png"
          alt="copyoffxTwo"
        />
        <div className="flex flex-row gap-6 items-center justify-center w-auto">
          <div className="flex flex-col items-center justify-center w-auto">
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtMonaSansRegular18Gray900"
            >
              {props?.navlinktext}
            </Text>
          </div>
          <Button
            className="!text-gray-50 cursor-pointer font-bold font-monasans leading-[normal] min-w-[106px] text-center text-lg"
            shape="round"
            color="red_600"
            size="xs"
            variant="fill"
            onClick={handleButtonClick}
          >
            {props?.daftarbuttontext}
          </Button>
        </div>
      </div>
    </>
  );
};

MasukHeader.defaultProps = {
  navlinktext: "Belum punya akun?",
  daftarbuttontext: "Daftar",
  target: "daftar", // Default target, change it based on your requirement
};

export default MasukHeader;
