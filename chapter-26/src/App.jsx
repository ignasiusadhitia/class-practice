import React, { useEffect, useState } from "react";
import ArticleCard from "./components/ArticleCard";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";

const pressReleases = [
  [
    {
      title: "Sambut Hari Pelanggan Nasional 2023, Intip Inovasi",
      time: "6 October 2024",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2023/10/6/b883a8a5-66f9-4546-a6d5-e64c697f30a7.jpg",
    },
    {
      title: "Tokopedia Rekap Tren Belanja Online Kuartal III 2023:",
      time: "4 October 2024",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2023/10/4/7595bffd-ceca-45e4-be13-c73ac8be9312.jpg",
    },
    {
      title: "Tokopedia Luncurkan Fitur ‘Dipromosikan Affiliate’,",
      time: "13 September 2024",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2023/9/13/5f575be0-eedd-4372-9e4d-c0ae89dd88d1.jpg",
    },
  ],
  [
    {
      title: "Atasi Gejala ‘Remaja Jompo’, Simak 5 Tips Hidup Sehat ala",
      time: "13 September 2023",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2023/9/13/90b540b2-4439-438b-8858-72412184ae35.jpg",
    },
    {
      title: "Bisa Jadi Ide Jualan Online, Ini Kategori Produk yang Paling",
      time: "11 September 2023",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2023/9/11/56e1982e-524b-42a0-95dd-5253d7e535a4.jpg",
    },
    {
      title: "Kualitas Udara Tak Sehat? Tokopedia Bagi Cara Mengatasi",
      time: "11 September 2023",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2023/9/11/874a6fb9-760e-4db7-bb7f-fb0fb314885b.jpg",
    },
  ],
];

const behindTheScene = [
  [
    {
      title: "Mengenal Sosok Kartini Masa Kini: NakaBunda Tim Tokopedia",
      time: "8 November 2023",
      imgUrl:
        "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/04/NakaBunda-1-324x160.png",
    },
    {
      title: "Perayaan 1 Dekade Tokopedia: Berbagi Tawa Bersama Keluarga",
      time: "19 October 2023",
      imgUrl:
        "https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/09/IMG_0464-324x160.jpg",
    },
    {
      title: "Evoware: Produksi Gelas yang Bisa Dimakan untuk Mengurangi",
      time: "29 August 2023",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2023/8/29/e5ccdc10-fbb0-4158-9011-420702a793e6.jpg",
    },
  ],
  [
    {
      title: "Brand fesyen THENBLANK ciptakan peluang dalam negeri",
      time: "23 August 2023",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg",
    },
    {
      title: "Rabbit Hole perkenalkan pentingnya buku untuk",
      time: "31 July 2023",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2023/7/31/b1afcc36-5fd5-46b4-9ede-420e938a1b9f.jpg",
    },
    {
      title: "Ini Cara Coffeenatics Kenalkan Kopi Indonesia ke Seluruh",
      time: "3 July 2023",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2023/7/3/ba34120a-7bc2-4f39-b8b2-a0d968567593.jpg",
    },
  ],
];

const socialImpact = [
  [
    {
      title: "Beraksi untuk Sesama di Tahun ke-13 Tokopedia",
      time: "15 September 2022",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2022/9/15/e588a5b4-5d18-4af9-a1c0-c15f65c9498d.jpg",
    },
    {
      title: "Wujudkan Komitmen Jaga Kelestarian Lingkungan,",
      time: "24 August 2022",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2022/8/24/b8fad339-c804-4db0-8df4-e3bb906f7963.jpg",
    },
    {
      title: "Kontribusi Nakama untuk Lingkungan Lewat Tanam Pohon",
      time: "4 August 2022",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2022/8/4/9d5f5e0d-1e40-42b7-b0ed-d9bf6528f650.jpg",
    },
  ],
  [
    {
      title: "Nakama Berbagi Inspirasi kepada Generasi Muda melalui",
      time: "4 August 2022",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2022/4/8/890655e8-d1c7-4d27-8c0c-5195546d5fcf.jpg",
    },
    {
      title: "Menanamkan Jiwa Kepahlawanan melalui Kegiatan",
      time: "4 August 2022",
      imgUrl:
        "https://images.tokopedia.net/img/KRMmCm/2022/4/6/f1f1ff22-ddd1-407a-be8f-9ee108e5eb2e.jpg",
    },
    {
      title: "Nakama Tokopedia Berbagi Tips Persiapan Kuliah melalui",
      time: "8 March 2021",
      imgUrl:
        "https://images.tokopedia.net/blog-tokopedia-com/uploads/2021/03/Header-324x160.jpg",
    },
  ],
];

function App() {
  const [showButton, setShowButton] = useState(false);
  const [pressReleaseGroup, setPressReleaseGroup] = useState(0);
  const [behindTheSceneGroup, setBehindTheSceneGroup] = useState(0);
  const [socialImpactGroup, setSocialImpactGroup] = useState(0);

  const handleGroupNews = (setGroup, type) => {
    if (type === "prev") {
      setGroup((prevGroup) => prevGroup - 1);
    }
    if (type === "next") {
      setGroup((prevGroup) => prevGroup + 1);
    }
  };

  // Function to watch scroll position
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      // if scroll higher than screen height
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Function to scroll to the top of the page when button clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Scroll animation
    });
  };

  useEffect(() => {
    // Add event listener to the scroll
    window.addEventListener("scroll", handleScroll);
    // Clean up event listener when the component not used
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto px-6">
        <Section>
          <SectionHeader
            title="Siaran Pers"
            navArrayText={["Founder's Letter", "Milestone"]}
            bgActive
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-6">
            {pressReleases[pressReleaseGroup].map((item, index) => (
              <ArticleCard
                key={index}
                title={item.title}
                time={item.time}
                imgUrl={item.imgUrl}
                label="Siaran Pers"
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              icon={"<"}
              onClick={() => handleGroupNews(setPressReleaseGroup, "prev")}
              disabled={pressReleaseGroup === 0}
            />
            <Button
              icon={">"}
              onClick={() => handleGroupNews(setPressReleaseGroup, "next")}
              disabled={pressReleases.length - 1 === pressReleaseGroup}
            />
          </div>
        </Section>

        <Section>
          <SectionHeader title="Behind The Scene" bgActive />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-6">
            {behindTheScene[behindTheSceneGroup].map((item, index) => (
              <ArticleCard
                key={index}
                title={item.title}
                time={item.time}
                imgUrl={item.imgUrl}
                label="Behind The Scene"
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              icon={"<"}
              onClick={() => handleGroupNews(setBehindTheSceneGroup, "prev")}
              disabled={behindTheSceneGroup === 0}
            />
            <Button
              icon={">"}
              onClick={() => handleGroupNews(setBehindTheSceneGroup, "next")}
              disabled={behindTheScene.length - 1 === behindTheSceneGroup}
            />
          </div>
        </Section>

        <Section>
          <SectionHeader title="Social Impact" bgActive />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-6">
            {socialImpact[socialImpactGroup].map((item, index) => (
              <ArticleCard
                key={index}
                title={item.title}
                time={item.time}
                imgUrl={item.imgUrl}
                label="Social Impact"
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              icon={"<"}
              onClick={() => handleGroupNews(setSocialImpactGroup, "prev")}
              disabled={socialImpactGroup === 0}
            />
            <Button
              icon={">"}
              onClick={() => handleGroupNews(setSocialImpactGroup, "next")}
              disabled={socialImpact.length - 1 === socialImpactGroup}
            />
          </div>
        </Section>
      </div>
      <Footer />
      {showButton && (
        <Button
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
              />
            </svg>
          }
          className={`fixed bottom-2 right-2 bg-secondary-500 w-10 h-10 text-white-50 flex justify-center items-center transition-opacity duration-300 transform 
          ${
            showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          onClick={scrollToTop}
        />
      )}
    </>
  );
}

export default App;
