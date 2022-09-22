import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Entry from "../components/entry/entry";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LandigPage() {
  return (
    <div className="w-full h-full bg-home  ">
      <div className="w-full flex justify-center cursor-pointer  max-auto responsive_mobile_navbar animate__fadeIn animate__delay__9 animate__animated  items-center mx-auto  m-auto ">
        <div className=" justify-between navbarResponsive items-center w-full  mt-20  m-4 flex">
          <div className="text-2xl ml-3 relative "> Atalay.app </div>
          <div className="flex text-lg   mt-4 font-medium  relative m-auto  mx-auto">
            <a href="#section">
              <div className=" mr-5"> Keşfet </div>
            </a>
            <a href="#section2">
              <div className="mr-5 event">Güvenlik</div>
            </a>
            <Link to="#section3">
              <div className=" mr-5 event">Destek</div>
            </Link>
          </div>
        </div>

        <Link to="/login">
          <div className="w-36 rounded-lg p-2 font-bold hover:bg-red align-end m-4  relative">
            <button
              type="button"
              class="text-white hover:text-gray-900  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Giriş yap
            </button>
          </div>
        </Link>
      </div>
      <div></div>
      <div className="relative flex i flex-col animate__fadeIn animate__delay__9  animate__animated z w-full h-auto ">
        <div className="entry_101 relative t text-center h-52 ">
          {" "}
          <div className="landig-topHeader select-none amkCardı text-atalay  ">
            <span>
              İSTEDİĞİNİ YAZ. ENTRY'ni NFT OLARAK ÜRET <br />
              EĞLEN ,POPÜLER OL...
            </span>
          </div>
          <p
            className="flex relative mt-4 w-auto m-auto  atly p-3 
          justify-center flex-wrap"
          >
            {" "}
            ÖYLE BİR ENTRY YOLLAKİ , O ENTRY'Nİ NFT OLARAK SAHİPLEN VE YENİ
            NESİL DÜNYA DA KENDİNE AİT BİR SÖZ OLSUN
            <br />
          </p>
        </div>
        <div
          className="entry_10 flex md:top-16 t atalay-entry select-none justify-center animate__fadeIn  relative "
          id="section"
        >
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
        className="a h-full flex flex-row justify-around m-auto m card-one relative resp_home mt-16"
        id="#section2"
      >
        <div className="card_amk_cardını amkCardı z   bg-wihte shadow-md   rounded-md">
          <p className="text-black mt-5  text-2xl   font-bold tracking-tight">
            {" "}
            Güvenli{" "}
          </p>
          <span className="w-52 mt-5">
            Tüm verileriniz sha256 şifreleme yöntemi ile şifreleniyor{" "}
          </span>
        </div>
        <div
          className="card_amk_cardını amkCardı z   bg-wihte shadow-md   rounded-md"
          id="section2"
        >
          <p className="text-black mt-5 e text-2xl card-title font-bold tracking-tight">
            {" "}
            {"Hayal gücünü kullan ! "}
          </p>
          <span className="w-52 mt-5">
            {"Şahsen fazla da abartma sikerim belanı"}{" "}
          </span>
        </div>
        <div
          className="card_amk_cardını amkCardı z  flex-col flex-wrap  bg-wihte shadow-md    rounded-md"
          id="section2 section"
        >
          <p className="text-black mt-5 w-full card-title  text-2xl font-bold tracking-tight">
            {" "}
            Web 3.0 🚀{" "}
          </p>
          <span className="w-52 flex flex-wrap flex-row asa  mt-5">
            Web 3.0 kullanıyoruz , istersen MetaMask uygulaması ile giriş
            yapabilirsin .Oluşturduğun kartı nft olarak yaratabilirsin <br />{" "}
            {"(Beta testinde henüz aktif değil)"}
          </span>
        </div>
      </div>
      <footer className="w-full relative shadow-md "></footer>
    </div>
  );
}
