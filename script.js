const translations = {
    en: null,
    es: null,
    pt: null,
};

async function loadTranslation(language) {
    if (!translations[language]) {
        const response = await fetch(`${language}.json`);
        translations[language] = await response.json();
    }
    return translations[language];
}

function applyTranslation(language) {
    loadTranslation(language).then((langData) => {
        document.getElementById("page-title").innerText = langData.title;
        document.getElementById("welcome-text").innerText = langData.welcome;
        document.getElementById("categories-text").innerText = langData.categories;
        document.getElementById("footer-text").innerText = langData.footer;
    });
}

document.getElementById("language-select").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    applyTranslation(selectedLanguage);
});

// Set default language
applyTranslation("en");
