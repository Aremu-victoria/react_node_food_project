// import backgroundImage from '../assets/images/heroImg.png'
// import Africa from '../component/Africa';
// import Discount from '../component/Discount';
// import Footer from '../component/Footer';
// import HeadingTitle from '../component/HeadingTitle';
// import HeroContent from '../component/HeroContent';
// import HomeCard from '../component/HomeCard';
// import HomeNavBar from '../component/Navabar/HomeNavBar';
// import Subscribe from '../component/Subscribe';

// const Home = () => {
//   return (
//     <div className='relative'>
//     <div
//         className="bg-cover bg-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}>
//        <HomeNavBar />
//           <HeroContent heroTex='Order food from the best restaurants, local  favorites, and online vendors using the app or web.' Find_Your='Find Your' Fav='Favorite' Fod='Food'/>
//     </div>
//       <div>
//         <HeadingTitle headingTitle='Want to become a member?'/>
//             <HomeCard/>
//         <HeadingTitle headingTitle='Enjoy our best seller of the week'/>
//         <Africa />
//         <Discount />
//         <Subscribe />
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default Home

import React, { useRef, useEffect, useState } from "react";
import imaging from "../assets/images/ele.png"
const BabyCardGenerator = () => {
  const canvasRef = useRef(null);
  const [name, setName] = useState("");
  const [color, setColor] = useState("#009688");
  const [dob, setDob] = useState("");

  const animals = [
    imaging,
    imaging,
    imaging,
    imaging,
    imaging,
    imaging,
  ];

  const colorOptions = [
    { name: "Teal", value: "#009688" },
    { name: "Pink", value: "#E91E63" },
    { name: "Sky Blue", value: "#03A9F4" },
    { name: "Purple", value: "#9C27B0" },
    { name: "Orange", value: "#FF9800" },
    { name: "Green", value: "#4CAF50" },
  ];

  const randomizeAnimals = () => [...animals].sort(() => 0.10 - Math.random());

 const drawBalloon = (ctx, x, y, radius, color, letter) => {
  // Balloon body (oval)
  const gradient = ctx.createRadialGradient(x - radius / 3, y - radius / 3, radius / 6, x, y, radius);
  gradient.addColorStop(0, "#ffffffcc"); // light reflection
  gradient.addColorStop(0.4, color);
  gradient.addColorStop(1, "#00000040"); // shadow edge

  ctx.beginPath();
  ctx.ellipse(x, y, radius * 0.8, radius, 0, 0, 2 * Math.PI);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = "#3c3c3c40";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Balloon knot (small triangle)
  ctx.beginPath();
  ctx.moveTo(x - 5, y + radius - 2);
  ctx.lineTo(x + 5, y + radius - 2);
  ctx.lineTo(x, y + radius + 8);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();

  // String
  ctx.beginPath();
  ctx.moveTo(x, y + radius + 8);
  ctx.lineTo(x, y + radius + 40);
  ctx.strokeStyle = "#777";
  ctx.lineWidth = 1.5;
  ctx.setLineDash([2, 3]); // dashed look
  ctx.stroke();
  ctx.setLineDash([]);

  // Letter text
  ctx.fillStyle = "white";
  ctx.font = "bold 30px 'Comic Sans MS'";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "#00000040";
  ctx.shadowBlur = 3;
  ctx.fillText(letter, x, y);
  ctx.shadowBlur = 0; // reset shadow
};


  const drawAnimals = async (ctx, count) => {
  const chosenAnimals = randomizeAnimals().slice(0, count);
  const startX = 100;
  const y = 250;
  const gap = 120;

  const loaded = await Promise.all(
    chosenAnimals.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => resolve(img);
          img.src = src;
        })
    )
  );

  loaded.forEach((img, i) => {
    const x = startX + i * gap + 60; // small alignment fix with balloons
    ctx.drawImage(img, x - 40, y, 90, 90);
  });
};

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const drawCard = async (nameVal, colorVal, dobVal) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const babyName = nameVal || "Movic";
    const babyColor = colorVal || "#009688";
    const babyDob = dobVal || "2025-10-31";

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Balloons
    const firstWord = babyName.split(" ")[0];
    const letters = firstWord.split("");
    const spacing = canvas.width / (letters.length + 1);

    // Balloons aligned above animals, with varied heights
const baseY = 150;
const heightVariance = [0, -15, 10, -10, 5]; // random offsets for fun bounce
const startX = 160;
const gap = 120;

letters.forEach((letter, i) => {
  const x = startX + i * gap;
  const offsetY = baseY + (heightVariance[i % heightVariance.length] || 0);
  drawBalloon(ctx, x, offsetY, 45, babyColor, letter.toUpperCase());
});


    // 🐘 Animals count based on number of letters (max 5)
    const animalCount = Math.min(letters.length, 5);
    await drawAnimals(ctx, animalCount);

    // Name text
    ctx.font = "bold 28px Comic Sans MS";
    ctx.fillStyle = babyColor;
    ctx.textAlign = "center";
    ctx.fillText(babyName, canvas.width / 2, 380);

    // DOB text
    ctx.font = "20px Comic Sans MS";
    ctx.fillText(formatDate(babyDob), canvas.width / 2, 410);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "baby_card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  // 🧸 Auto redraw when inputs change
  useEffect(() => {
    drawCard(name, color, dob);
  }, [name, color, dob]);

  useEffect(() => {
    drawCard();
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        background: "#f5f5f5",
        textAlign: "center",
        padding: 20,
        minHeight: "100vh",
      }}
    >
      <h1>🎈 Baby Name Card Generator 🎈</h1>

      <div style={{ marginBottom: 15 }}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "8px 12px",
            fontSize: 16,
            borderRadius: 5,
            border: "1px solid #ccc",
            margin: 5,
          }}
        />

        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{
            padding: "8px 12px",
            fontSize: 16,
            borderRadius: 5,
            border: "1px solid #ccc",
            margin: 5,
          }}
        >
          {colorOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={{
            padding: "8px 12px",
            fontSize: 16,
            borderRadius: 5,
            border: "1px solid #ccc",
            margin: 5,
          }}
        />

        <button
          onClick={handleDownload}
          style={{
            padding: "8px 12px",
            fontSize: 16,
            borderRadius: 5,
            background: "#4caf50",
            color: "white",
            border: "none",
            cursor: "pointer",
            margin: 5,
          }}
        >
          Download
        </button>
      </div>

      <div className="justify-center mx-0 text-center items-center">
        <canvas
        ref={canvasRef}
        width={1000}
        height={500}
        style={{
          marginTop: 20,
          alignItems: "center",
          background: "white",
          borderRadius: 10,
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          border: "1px solid #ccc",
          padding: 10,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      />
      </div>
    </div>
  );
};

export default BabyCardGenerator;
