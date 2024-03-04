// // import fetch from "node-fetch"; // npm install node-fetch
// const fetch = import("node-fetch");
// // import Location from "../models/Location";
// const LOCATION_URL = process.env.API_URL;

// export const trackLocation = async (req, res) => {
//   var requestOptions = {
//     method: "GET",
//   };

//   fetch(
//     "https://api.geoapify.com/v1/ipinfo?&apiKey=ea1c5f6e8d574611aff18046a8cab774",
//     requestOptions
//   )
//     .then((response) => response.json())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
//   // const response = await req(LOCATION_URL);
//   // const data = await response.json();
//   // console.log(data);
//   // response.render("dashboard", data);
//   // Logic to track user's location and store it in the database
// };

import fetch from "node-fetch";

export const trackLocation = async (req, res) => {
  try {
    const response = await fetch(
      "https://api.geoapify.com/v1/ipinfo?&apiKey=ea1c5f6e8d574611aff18046a8cab774"
    );

    const data = await response.json();
    res.render("dashboard.ejs", { data });
    // res.json(data); // Send the data to the frontend
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
