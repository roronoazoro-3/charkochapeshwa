const text = {
    en: {
        home: "Home",
        about: "About",
        gallery: "Gallery",
        social: "Social Work",
        donate: "Donate",
        contact: "Contact",
        heroTitle: "॥ Shri Ganeshaya Namah ॥",
        heroSubtitle: "Charkopcha Peshwa ",
        aboutTitle: "About the Mandal",
        aboutText: "Charkopcha Peshwa Ganpati Mandal is dedicated to devotion and social service.",
        yearTitle: "This Year’s Ganpati",
        theme: "Theme",
        height: "Idol Height",
        artist: "Artist",
        aarti: "Aarti Time",
        galleryTitle: "Ganpati Gallery",
        socialTitle: "Social Work",
        donateTitle: "Donate for Seva",
        donateText: "Your support helps our mandal activities.",
        contactTitle: "Contact Us"
    },
    mr: {
        home: "मुख्यपृष्ठ",
        about: "मंडळाविषयी",
        gallery: "गॅलरी",
        social: "सामाजिक कार्य",
        donate: "देणगी",
        contact: "संपर्क",
        heroTitle: "॥ श्री गणेशाय नमः ॥",
        heroSubtitle: "चारकोपचा पेशवा ",
        aboutTitle: "मंडळाविषयी",
        aboutText: "चारकोपचा पेशवा गणपती मंडळ भक्ती व सामाजिक कार्यासाठी समर्पित आहे.",
        yearTitle: "या वर्षीचा गणपती",
        theme: "थीम",
        height: "मूर्ती उंची",
        artist: "शिल्पकार",
        aarti: "आरती वेळ",
        galleryTitle: "गणपती गॅलरी",
        socialTitle: "सामाजिक उपक्रम",
        donateTitle: "सेवेसाठी देणगी",
        donateText: "आपली देणगी मंडळाच्या कार्यासाठी उपयोगी ठरेल.",
        contactTitle: "संपर्क"
    }
};

function setLang(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        el.innerText = text[lang][el.dataset.key];
    });
}

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}