// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const cardTopBG: React.CSSProperties = {
  backgroundImage: 'url("/images/mesh-bg.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const personImg: React.CSSProperties = {
  backgroundImage: 'url("/images/person-img.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const overlay: React.CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(19, 19, 19, 0.00) 0%, #131313 100%)",
};

interface confidentFutureCards {
  dataArray: { icon: string; title: string; subtitle: string }[];
}

const ConfidentFutureCards: React.FC<confidentFutureCards> = ({
  dataArray,
}) => {
  return (
    <>
      {dataArray.map((item, index) => (
        <div
          key={index}
          className="card md:max-lg:w-[65%] p-8 flex flex-col-reverse items-center rounded-lg w-full border border-[#FFFFFF0A] bg-[#131313]"
        >
          <div
            style={cardTopBG}
            className="top overflow-hidden w-full h-60 lg:h-96 relative py-8 flex flex-col items-center justify-center gap-2"
          >
            <div
              style={overlay}
              className="layer w-full h-full absolute top-8"
            ></div>

            <Image src={item.icon} alt="" width={120} height={120} />
          </div>

          <div className="bottom w-full flex flex-col items-start gap-4">
            <span className="SFMedium text-2xl xl:text-4xl">{item.title}</span>
            <span className="SFRegular text-[#BDBDBD] xl:text-xl">{item.subtitle}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ConfidentFutureCards;
