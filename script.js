// Translations object containing all text for both English and Bulgarian
const translations = {
    en: {
        // Index.html translations
        pageTitle: "IceMC - Your Frosty Minecraft Adventure",
        homeLink: "Home",
        rulesLink: "Rules",
        voteLink: "Vote",
        welcomeText: "Welcome to",
        headerDescription: "Your ultimate destination for a frosty Minecraft adventure!",
        joinServerTitle: "Join Our Server!",
        copyIpButton: "Copy IP",
        copiedMessage: "Copied!",
        serverStatusTitle: "Server Status",
        serverIs: "Server is",
        loadingStatus: "Loading...",
        playersText: "Players",
        statusErrorMessage: "Could not fetch server status. Please try again later.",
        featuresTitle: "Server Features",
        featureSurvivalTitle: "❄️ Icy Survival",
        featureSurvivalDesc: "Brave the frozen biomes, build your stronghold, and thrive in our unique survival world.",
        featureCreativeTitle: "🎨 Creative Frost",
        featureCreativeDesc: "Unleash your creativity in a dedicated world with unlimited resources and a snowy canvas.",
        featureMinigamesTitle: "🎲 Arctic Minigames",
        featureMinigamesDesc: "Compete in thrilling minigames and participate in frosty server events for cool rewards!",
        featureCommunityTitle: "🤝 Chilly Community",
        featureCommunityDesc: "Join a vibrant and welcoming community of Minecraft enthusiasts. Make new friends!",
        howToJoinTitle: "How to Join",
        step1: "Open Minecraft: Java Edition.",
        step2: "Click on 'Multiplayer'.",
        step3: "Click on 'Add Server'.",
        step4: "Enter \"IceMC\" as the Server Name.",
        step5: "Enter the IP address: play.icemc.online",
        step6: "Click 'Done' and then 'Join Server'!",
        copyright: "&copy; 2025 IceMC. All rights reserved.",
        footerTagline: "Made with ❤️ for the frosty Minecraft community.",

        // Vote.html translations
        votePageTitle: "IceMC Vote - Support Our Server!",
        supportText: "Support IceMC:",
        voteText: "Vote!",
        voteHeaderDescription: "Help us grow and reach more players by voting for our server!",
        chooseVotingSite: "Choose Your Voting Site",
        voteDescription: "Each vote helps boost our server's visibility and brings in new players. Thank you for your support!",
        voteMinecraftMp: "Vote on Minecraft-MP.com",
        voteMinecraftServersOrg: "Vote on minecraftservers.org",
        voteBestMinecraftServers: "Vote on Best Minecraft Servers",
        voteTopMcServers: "Vote on top-mc-servers.net",
        voteFrequency: "You can vote on each site once every 24 hours.",
        voteFooterThanks: "Thank you for supporting IceMC!"
    },
    bg: {
        // Index.html translations
        pageTitle: "IceMC - Вашето Мразовито Minecraft Приключение",
        homeLink: "Начало",
        rulesLink: "Правила",
        voteLink: "Гласувай",
        welcomeText: "Добре дошли в",
        headerDescription: "Вашата крайна дестинация за епично Minecraft приключение!",
        joinServerTitle: "Присъединете се към Нашия Сървър!",
        copyIpButton: "Копирай IP",
        copiedMessage: "Копирано!",
        serverStatusTitle: "Статус на Сървъра",
        serverIs: "Сървърът е",
        loadingStatus: "Зареждане...",
        playersText: "Играчи",
        statusErrorMessage: "Не може да се извлече статусът на сървъра. Моля, опитайте по-късно.",
        featuresTitle: "Функции на Сървъра",
        featureSurvivalTitle: "❄️ Ледено Оцеляване",
        featureSurvivalDesc: "Преодолейте замръзналите биоми, изградете вашата крепост и процъфтявайте в нашия уникален свят за оцеляване.",
        featureCreativeTitle: "🎨 Творчески Мраз",
        featureCreativeDesc: "Развихрете въображението си в специален свят с неограничени ресурси и снежно платно.",
        featureMinigamesTitle: "🎲 Арктически Мини-игри",
        featureMinigamesDesc: "Състезавайте се във вълнуващи мини-игри и участвайте в мразовити сървърни събития за страхотни награди!",
        featureCommunityTitle: "🤝 Студена Общност",
        featureCommunityDesc: "Присъединете се към жизнена и гостоприемна общност от ентусиасти на Minecraft. Намерете нови приятели!",
        howToJoinTitle: "Как да се Присъедините",
        step1: "Отворете Minecraft: Java Edition.",
        step2: "Кликнете на 'Multiplayer'.",
        step3: "Кликнете на 'Add Server'.",
        step4: "Въведете \"IceMC\" като Име на Сървъра.",
        step5: "Въведете IP адреса: play.icemc.online",
        step6: "Кликнете 'Done' и след това 'Join Server'!",
        copyright: "&copy; 2025 IceMC. Всички права запазени.",
        footerTagline: "Създадено с ❤️ за мразовитата Minecraft общност.",

        // Vote.html translations
        votePageTitle: "IceMC Гласуване - Подкрепете Нашия Сървър!",
        supportText: "Подкрепете IceMC:",
        voteText: "Гласувай!",
        voteHeaderDescription: "Помогнете ни да растем и да достигнем до повече играчи, като гласувате за нашия сървър!",
        chooseVotingSite: "Изберете Вашия Сайт за Гласуване",
        voteDescription: "Всеки глас помага за увеличаване на видимостта на нашия сървър и привлича нови играчи. Благодарим ви за подкрепата!",
        voteMinecraftMp: "Гласувайте в Minecraft-MP.com",
        voteMinecraftServersOrg: "Гласувайте в minecraftservers.org",
        voteBestMinecraftServers: "Гласувайте в Best Minecraft Servers",
        voteTopMcServers: "Гласувайте в top-mc-servers.net",
        voteFrequency: "Можете да гласувате на всеки сайт веднъж на всеки 24 часа.",
        voteFooterThanks: "Благодарим ви, че подкрепяте IceMC!"
    }
};

// Function to apply translations based on the selected language
function setLanguage(lang) {
    // Update text content for elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        // Determine which set of translations to use based on the current page
        // This is a simplified approach; a more robust solution might use a routing library
        let currentTranslations = translations[lang];

        // Special handling for the page title
        if (element.tagName === 'TITLE') {
            document.title = currentTranslations.pageTitle || element.textContent;
        } else if (currentTranslations && currentTranslations[key]) {
            element.textContent = currentTranslations[key];
        }
    });

    // Store the preferred language in local storage
    localStorage.setItem('preferredLang', lang);
}

// Copy IP functionality (remains the same)
document.getElementById('copyIpButton').addEventListener('click', function() {
    const serverIp = document.getElementById('serverIp').textContent;
    const copyMessage = document.getElementById('copyMessage');

    const tempInput = document.createElement('textarea');
    tempInput.value = serverIp;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    copyMessage.classList.remove('opacity-0');
    copyMessage.classList.add('opacity-100');
    setTimeout(() => {
        copyMessage.classList.remove('opacity-100');
        copyMessage.classList.add('opacity-0');
    }, 2000);
});

// Function to fetch and update server status (remains the same)
async function fetchServerStatus() {
    const serverIp = "play.icemc.online";
    const apiUrl = `https://api.mcsrvstat.us/3/${serverIp}`;

    const statusIndicator = document.getElementById('statusIndicator');
    const serverStatusText = document.getElementById('serverStatusText');
    const playerCount = document.getElementById('playerCount');
    const maxPlayers = document.getElementById('maxPlayers');
    const motdElement = document.getElementById('motd');
    const statusError = document.getElementById('statusError');

    serverStatusText.textContent = translations[localStorage.getItem('preferredLang') || 'en'].loadingStatus;
    serverStatusText.classList.remove('text-green-400', 'text-red-400');
    serverStatusText.classList.add('text-yellow-400');
    playerCount.textContent = '--';
    maxPlayers.textContent = '--';
    motdElement.textContent = '';
    statusIndicator.innerHTML = `
        <span class="ping-animation absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-5 w-5 bg-yellow-500"></span>
    `;
    statusError.classList.add('hidden');

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.online) {
            serverStatusText.textContent = translations[localStorage.getItem('preferredLang') || 'en'].serverIs + ' Online'; // Update status text
            serverStatusText.classList.remove('text-yellow-400', 'text-red-400');
            serverStatusText.classList.add('text-green-400');
            playerCount.textContent = data.players ? data.players.online : 'N/A';
            maxPlayers.textContent = data.players ? data.players.max : 'N/A';
            if (data.motd && data.motd.clean && data.motd.clean.length > 0) {
                motdElement.textContent = data.motd.clean.join(' | ');
            }
            statusIndicator.innerHTML = `
                <span class="ping-animation absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
            `;
        } else {
            serverStatusText.textContent = translations[localStorage.getItem('preferredLang') || 'en'].serverIs + ' Offline'; // Update status text
            serverStatusText.classList.remove('text-yellow-400', 'text-green-400');
            serverStatusText.classList.add('text-red-400');
            playerCount.textContent = '--';
            maxPlayers.textContent = '--';
            motdElement.textContent = translations[localStorage.getItem('preferredLang') || 'en'].statusErrorMessage; // Use translated error message
            statusIndicator.innerHTML = `
                <span class="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
            `;
        }
    } catch (error) {
        console.error("Error fetching server status:", error);
        serverStatusText.textContent = translations[localStorage.getItem('preferredLang') || 'en'].serverIs + ' Error'; // Update status text
        serverStatusText.classList.remove('text-yellow-400', 'text-green-400');
        serverStatusText.classList.add('text-red-400');
        playerCount.textContent = '--';
        maxPlayers.textContent = '--';
        motdElement.textContent = translations[localStorage.getItem('preferredLang') || 'en'].statusErrorMessage; // Use translated error message
        statusIndicator.innerHTML = `
            <span class="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
        `;
        statusError.classList.remove('hidden');
    }
}

// Event Listeners for flags
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-bg').addEventListener('click', () => setLanguage('bg'));

// Load preferred language and fetch status on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en'; // Default to English
    setLanguage(savedLang);
    fetchServerStatus(); // Fetch status after language is set
});

// Refresh status every 30 seconds
setInterval(fetchServerStatus, 30000);
