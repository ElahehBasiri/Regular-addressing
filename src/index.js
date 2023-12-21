const englishCode = "en-US";
const spanishCode = "es-ES";
const iranianCode = "fa-IR";

function getAboutUsLink(language) {
  let aboutUsLink = "";

  if (language === englishCode) {
    aboutUsLink = "/about-us";
  } else if (language === spanishCode) {
    aboutUsLink = "/acerca-de";
  } else if (language === iranianCode) {
    aboutUsLink = "/درباره-ما";
  } else {
    aboutUsLink = "/about-us";
  }

  return aboutUsLink;
}

module.exports = getAboutUsLink;