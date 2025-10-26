import React, { useState } from "react";
import { FaAward, FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    icon: <FaAward className="w-6 h-6 text-[#00bfa6]" />,
    title: "Data Science Certification",
    org: "ExcelR Raising Excellence",
    id: "Certificate ID: 19791/EXCELR/28052025",
    link: "https://media.licdn.com/dms/image/v2/D4D2DAQHggQ0Bxg0CTg/profile-treasury-image-shrink_8192_8192/B4DZi3kPvgGkAg-/0/1755426389960?e=1761980400&v=beta&t=3AktokMUR40HaWlwijRW3NO2-3XQ785T8wid4o0Vky8",
    img: "https://media.licdn.com/dms/image/v2/D4D2DAQHggQ0Bxg0CTg/profile-treasury-image-shrink_8192_8192/B4DZi3kPvgGkAg-/0/1755426389960?e=1761980400&v=beta&t=3AktokMUR40HaWlwijRW3NO2-3XQ785T8wid4o0Vky8",
  },
  {
    icon: <FaBriefcase className="w-6 h-6 text-[#00bfa6]" />,
    title: "Data Science Internship",
    org: "Ai Variant",
    id: "Certificate ID: AIV/24-25/Q3/07/17298",
    link: "https://media.licdn.com/dms/image/v2/D4D2DAQGPKJYflVWnug/profile-treasury-image-shrink_8192_8192/B4DZi3pLHoHwAk-/0/1755427681724?e=1761980400&v=beta&t=Fb_ZmO2IGOzvnjrU5HV7DAQJKKRFj0KZT0UG-hElUeQ",
    img: "https://media.licdn.com/dms/image/v2/D4D2DAQGPKJYflVWnug/profile-treasury-image-shrink_8192_8192/B4DZi3pLHoHwAk-/0/1755427681724?e=1761980400&v=beta&t=Fb_ZmO2IGOzvnjrU5HV7DAQJKKRFj0KZT0UG-hElUeQ",
  },
  {
    icon: <FaAward className="w-6 h-6 text-[#00bfa6]" />,
    title: "SQL - The Complete Introduction",
    org: "Udemy - Yassin Marco MBA",
    id: "Certificate ID: UC-d33f26bf-fc9c-4ec7-8f59-bd39c8b7c266",
    link: "https://www.udemy.com/certificate/UC-d33f26bf-fc9c-4ec7-8f59-bd39c8b7c266/",
    img: "https://udemy-certificate.s3.amazonaws.com/image/UC-d33f26bf-fc9c-4ec7-8f59-bd39c8b7c266.jpg",
  },
  {
    icon: <FaBriefcase className="w-6 h-6 text-[#00bfa6]" />,
    title: "Web Developer Internship",
    org: "Veritech Company",
    id: "Certificate ID: da738996-20ed-440a-b11b-df2171106084",
    link: "https://certificate.givemycertificate.com/c/da738996-20ed-440a-b11b-df2171106084",
    img: "https://media.licdn.com/dms/image/v2/D4D2DAQFVe2f-lzABDw/profile-treasury-image-shrink_800_800/B4DZofWOnAK0AY-/0/1761462512965?e=1762070400&v=beta&t=-hpqXFc1RbYyb83LKGHYmfl9GnG8z87CZzx5r9NbvoA",
  },
];

// Modal component for full-screen image
const Modal = ({ img, onClose }) => {
  if (!img) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-pointer"
      onClick={onClose}
    >
      <img
        src={img}
        alt="Certificate"
        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl animate-fadeIn"
      />
    </div>
  );
};

const Certifications = () => {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 py-24 -mt-20"
    >
      {/* Section Title */}
      <h2 className="relative text-4xl font-mono text-[#00bfa6] mb-12 inline-block pb-1">
        Certifications & Achievements
        <span className="absolute left-0 -bottom-1 w-24 h-1 bg-[#00bfa6] rounded-full animate-pulse"></span>
      </h2>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {certifications.map((c, i) => (
          <div
            key={i}
            className="bg-[#161b22] rounded-xl shadow-md border border-[#1e2025] p-5 flex flex-col md:flex-row items-start gap-5 transition transform hover:scale-105 hover:shadow-[#00bfa6]/50 hover:border-[#00bfa6]"
          >
            {/* Info Section */}
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                {c.icon}
                <h3 className="text-lg md:text-xl font-mono text-[#00bfa6]">
                  {c.title}
                </h3>
              </div>
              <p className="text-gray-400 font-mono">{c.org}</p>
              <p className="text-sm text-gray-500 font-mono">{c.id}</p>
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#00bfa6] font-mono text-sm hover:underline"
              >
                View Certificate <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>

            {/* Image Section */}
            <div
              className="flex-shrink-0 w-full md:w-48 h-32 md:h-40 overflow-hidden rounded-lg border border-gray-700 cursor-pointer group"
              onClick={() => openModal(c.img)}
            >
              <img
                src={c.img}
                alt={`${c.title} certificate`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full image */}
      <Modal img={modalImg} onClose={closeModal} />
    </section>
  );
};

export default Certifications;
