/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        bgBlack: "#030304",
        orange: "#E46E00",
        lightOrange: "#F9A825",
      },
      backgroundImage: {
        logoBg:
          "linear-gradient(180deg, #F5E4BB 50.51%, rgba(255, 166, 0, 0) 151.89%)",
        gold: "linear-gradient(135.12deg, #F8D754 24.95%, #FFF5CF 193.21%)",
        contactUsImg: "url('./assests/images/contactUsImg.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kaisei: ["Kaisei Decol", "sans-serif"],
        inter: ["Inter", "Poppins", "sans-serif"],
      },
      colors: {
        lightGrey: "#ADADAD",
        darkGrey: "#9F9F9F",
        desc: "rgba(0, 0, 0, 0.6)",
      },
      borderColor: {
        lightGreen: "rgba(63, 130, 119, 0.1)",
      },
      boxShadow: {
        card: "-7px 7px 29px 1px rgba(0, 0, 0, 0.17)",
      },
    },
  },
  plugins: [],
};