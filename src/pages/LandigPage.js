import React from "react";
import { Link } from "react-router-dom";
import { FaBitcoin } from "react-icons/fa";
import Entry from "../components/entry/entry";
export default function LandigPage() {
  return (
    <div className="w-full h-full clear bg-home ">
      <div className="h-28 flex justify-center cursor-pointer  max-auto  items-center mx-auto i m-auto ">
        <div className=" justify-between  items-center w-full  mt-20  m-4 flex">
          <div className="text-2xl ml-3 relative "> Atalayapp </div>
          <div className="flex text-lg  mt-4 font-medium  relative m-auto  mx-auto">
            <Link to="#section">
              <div className="hover:text-blue-700  mr-5"> Keşfet </div>
            </Link>
            <Link to="#section2">
              <div className="mr-5 event hover:text-blue-700">Güvenlik</div>
            </Link>
            <Link to="#section3">
              <div className=" mr-5 event hover:text-blue-700">Destek</div>
            </Link>
          </div>
        </div>
        <Link to="/login">
          <button className="text-xl w-16   h-16 align-end m-4 border-2 signup">
            Giriş yap
          </button>
        </Link>
      </div>
      <div className="relative flex i flex-col z w-full h-auto ">
        <div className="text-atalay text-center ">
          İSTEDİĞİNİ YAZ. ENTRY'ni NFT OLARAK ÜRET <br />
          EĞLEN ,POPÜLER OL...
        </div>
        <div className="entry_10 flex  justify-center  relative ">
          <Entry
            cardCss={" text-white "}
            titleClass={"title "}
            className={"entry m-4 slm code-123 amkCardı h-auto"}
            content={"At yalanı sikeyim inananı"}
            author={"Namık Kemal"}
            title={"Atalay "}
          />
        </div>
        <div className="entry_10 flex flex-row  justify-center relative right-12">
          <Entry
            cardCss={" text-white "}
            titleClass={"title "}
            className={"entry m-4 slm code-123 amkCardı  h-auto"}
            content={"Ne beyim ne efendiyim ben ulan ÇAKIRIM BEN ÇAKIR"}
            author={"SÜLEYMAN ÇAKIR"}
            title={"İSTANBULUN SEFİRİ"}
          />
          <Entry
            cardCss={" z-2 text-white"}
            titleClass={"title "}
            className={"entry m-4 amkCardı slm code-123  h-auto"}
            content={
              "Korkularını ufak ufak atıyorsun , umutlarınla tek başına kalınca herkesi yavaş yavaş tanıyorsun pastadaki mum sayısı çoğalınca"
            }
            author={"Atalay Hikmet "}
            title={"Durgun yorgun "}
          />
        </div>
      </div>
      <div
        className="a h-full flex flex-row justify-around m-auto card-one relative resp_home mt-16"
        id="#section2"
      >
        <div className="card_amk_cardını amkCardı z   bg-wihte shadow-md   rounded-md">
          <p className="text-black mt-5 ml-5 text-2xl   font-bold tracking-tight">
            {" "}
            Güvenli{" "}
          </p>
          <span className="w-24 mt-5">
            Tüm verileriniz sha256 şifreleme yöntemi ile şifreleniyor{" "}
          </span>
        </div>
        <div className="card_amk_cardını amkCardı z   bg-wihte shadow-md   rounded-md">
          <p className="text-black mt-5 e text-2xl font-semibold tracking-tight">
            {" "}
            {"Hayal gücünü kullan ! "}
          </p>
          <span className="w-24 mt-5">
            {"Şahsen fazla da abartma sikerim belanı"}{" "}
          </span>
        </div>
        <div className="card_amk_cardını amkCardı z    bg-wihte shadow-md    rounded-md">
          <p className="text-black mt-5 w-full flex flex-row text-2xl font-semibold tracking-tight">
            {" "}
            Web 3.0 <FaBitcoin className="ml-5 ata" />{" "}
          </p>
          <span className="w-24 mt-5">
            Web 3.0 kullanıyoruz , istersen MetaMask uygulaması ile giriş
            yapabilirsin .Oluşturduğun kartı nft olarak yaratabilirsin <br />{" "}
            {"(Beta testinde henüz aktif değil)"}
          </span>
        </div>
      </div>
    </div>
  );
}
