function setLang(lang) {
  var htmlTag = document.getElementsByTagName("html")[0];
  htmlTag.setAttribute("lang", lang);
  if (lang === "en") {
    htmlTag.setAttribute("dir", "ltr");
  } else {
    htmlTag.setAttribute("dir", "rtl");
  }
}
