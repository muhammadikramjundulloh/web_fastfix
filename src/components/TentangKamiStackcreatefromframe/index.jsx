import React from "react";

import { Text } from "components";

const TentangKamiStackcreatefromframe = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[90px] my-auto rounded-[10px] shadow-bs w-[96%]"></div>
        <div className="absolute bg-gray-50 flex sm:flex-col flex-row gap-5 h-full inset-[0] items-center justify-start m-auto p-3 rounded-[10px] w-[425px] md:w-full">
          <div className="bg-blue_gray-800 h-24 rounded-[50%] w-24"></div>
          <div className="flex flex-col gap-0 items-start justify-start w-[249px]">
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
              size="txtMonaSansBold24Gray900"
            >
              {props?.username}
            </Text>
            <Text
              className="text-gray-600 text-xl w-auto"
              size="txtMonaSansRegular20Gray600"
            >
              {props?.userrole}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TentangKamiStackcreatefromframe.defaultProps = {
  username: "Adzhimatinur Azzahra",
  userrole: "Project Manager",
};

export default TentangKamiStackcreatefromframe;
