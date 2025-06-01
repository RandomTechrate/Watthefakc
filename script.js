// Translations object containing all text for both English and Bulgarian
const translations = {
    en: {
        // General translations (used across multiple pages)
        homeLink: "Home",
        rulesLink: "Rules",
        voteLink: "Vote",
        copyright: "&copy; 2025 IceMC. All rights reserved.",
        accountLink: "Login / Register", // New translation key for nav link

        // Index.html specific translations
        pageTitle: "IceMC - Your Frosty Minecraft Adventure",
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
        featureEconomyTitle: "💰 Player Economy", // New feature
        featureEconomyDesc: "Earn money, trade with other players, and build your fortune in our vibrant in-game economy.", // New feature
        featureCustomPluginsTitle: "🛠️ Custom Plugins", // New feature
        featureCustomPluginsDesc: "Enjoy unique gameplay mechanics and enhancements with our custom-developed plugins.", // New feature
        featureCommunityTitle: "🤝 Chilly Community",
        featureCommunityDesc: "Join a vibrant and welcoming community of Minecraft enthusiasts. Make new friends!",
        howToJoinTitle: "How to Join",
        step1: "Open Minecraft: Java Edition.",
        step2: "Click on 'Multiplayer'.",
        step3: "Click on 'Add Server'.",
        step4: "Enter \"IceMC\" as the Server Name.",
        step5: "Enter the IP address: play.icemc.online",
        step6: "Click 'Done' and then 'Join Server'!",
        footerTagline: "Made with ❤️ for the frosty Minecraft community.",
        accountTitle: "Account & Community", // New section title
        accountDescription: "Login or register to manage your account, track your stats, and connect with the IceMC community!", // New description
        usernameLabel: "Username:", // Login/Register form labels
        passwordLabel: "Password:",
        authErrorMessage: "Please fill in all fields.",
        loginButton: "Login",
        registerButton: "Register",

        // Rules.html specific translations
        rulesPageTitle: "IceMC Rules - Play Fair, Have Fun!",
        rulesText: "Server Rules",
        rulesHeaderDescription: "Ensuring a fair and fun experience for everyone!",
        generalRulesTitle: "General Rules",
        rule1: "<strong>Respect Others:</strong> Treat all players and staff with respect. Harassment, discrimination, or hate speech will not be tolerated.",
        rule2: "<strong>No Griefing or Stealing:</strong> Do not destroy or steal from other players' builds or chests. This applies to all game modes unless explicitly stated otherwise.",
        rule3: "<strong>No Spamming or Excessive Caps:</strong> Keep chat clean and readable. Avoid repetitive messages or using all capital letters.",
        rule4: "<strong>No Hacking, Cheating, or Exploiting:</strong> Any form of unfair advantage through unauthorized modifications, client hacks, or bug exploitation is strictly forbidden.",
        rule5: "<strong>No Advertising:</strong> Do not advertise other servers, websites, or products in chat or through builds.",
        rule6: "<strong>Keep it Family-Friendly:</strong> Maintain appropriate language and content. No NSFW or offensive material.",
        rule7: "<strong>Follow Staff Instructions:</strong> Server staff are here to ensure a positive environment. Their decisions are final.",
        rule8: "<strong>Have Fun:</strong> While rules are important, remember the main goal is to enjoy your time on IceMC!",
        survivalRulesTitle: "Survival Specific Rules",
        survivalRule1: "<strong>Claim Your Land:</strong> Use land claiming plugins to protect your builds. Unclaimed builds are vulnerable.",
        survivalRule2: "<strong>No Trapping:</strong> Do not create traps that intentionally kill or harm other players without their consent.",
        survivalRule3: "<strong>Resource Gathering:</strong> Be mindful of resource depletion. Avoid leaving floating trees or ugly holes.",
        rulesFooterTagline: "Play fair, build epic, and have fun!",

        // Vote.html specific translations
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
        // General translations (used across multiple pages)
        homeLink: "Начало",
        rulesLink: "Правила",
        voteLink: "Гласувай",
        copyright: "&copy; 2025 IceMC. Всички права запазени.",
        accountLink: "Вход / Регистрация", // New translation key for nav link

        // Index.html specific translations
        pageTitle: "IceMC - Вашето Мразовито Minecraft Приключение",
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
        featureEconomyTitle: "💰 Икономика на Играчите", // New feature
        featureEconomyDesc: "Печелете пари, търгувайте с други играчи и изградете своето богатство в нашата жизнена икономика в играта.", // New feature
        featureCustomPluginsTitle: "🛠️ Персонализирани Плъгини", // New feature
        featureCustomPluginsDesc: "Насладете се на уникални механики на играта и подобрения с нашите персонализирани плъгини.", // New feature
        featureCommunityTitle: "🤝 Студена Общност",
        featureCommunityDesc: "Присъединете се към жизнена и гостоприемна общност от ентусиасти на Minecraft. Намерете нови приятели!",
        howToJoinTitle: "Как да се Присъедините",
        step1: "Отворете Minecraft: Java Edition.",
        step2: "Кликнете на 'Multiplayer'.",
        step3: "Кликнете на 'Add Server'.",
        step4: "Въведете \"IceMC\" като Име на Сървъра.",
        step5: "Въведете IP адреса: play.icemc.online",
        step6: "Кликнете 'Done' и след това 'Join Server'!",
        footerTagline: "Създадено с ❤️ за мразовитата Minecraft общност.",
        accountTitle: "Акаунт и Общност", // New section title
        accountDescription: "Влезте или се регистрирайте, за да управлявате акаунта си, да проследявате статистиката си и да се свързвате с общността на IceMC!", // New description
        usernameLabel: "Потребителско име:", // Login/Register form labels
        passwordLabel: "Парола:",
        authErrorMessage: "Моля, попълнете всички полета.",
        loginButton: "Вход",
        registerButton: "Регистрация",

        // Rules.html specific translations
        rulesPageTitle: "IceMC Правила - Играйте Честно, Забавлявайте се!",
        rulesText: "Правила на Сървъра",
        rulesHeaderDescription: "Осигуряване на честно и забавно преживяване за всички!",
        generalRulesTitle: "Общи Правила",
        rule1: "<strong>Уважавайте другите:</strong> Отнасяйте се към всички играчи и персонал с уважение. Тормоз, дискриминация или език на омразата няма да бъдат толерирани.",
        rule2: "<strong>Без грийфинг или кражба:</strong> Не унищожавайте и не крадете от постройките или сандъците на други играчи. Това важи за всички режими на игра, освен ако изрично не е посочено друго.",
        rule3: "<strong>Без спам или прекомерни главни букви:</strong> Поддържайте чата чист и четим. Избягвайте повтарящи се съобщения или използването на само главни букви.",
        rule4: "<strong>Без хакове, чийтове или експлойти:</strong> Всяка форма на нечестно предимство чрез неоторизирани модификации, клиентски хакове или експлоатация на бъгове е строго забранена.",
        rule5: "<strong>Без реклама:</strong> Не рекламирайте други сървъри, уебсайтове или продукти в чата или чрез постройки.",
        rule6: "<strong>Поддържайте го подходящо за семейството:</strong> Поддържайте подходящ език и съдържание. Без неподходящи или обидни материали.",
        rule7: "<strong>Следвайте инструкциите на персонала:</strong> Персоналът на сървъра е тук, за да осигури положителна среда. Техните решения са окончателни.",
        rule8: "<strong>Забавлявайте се:</strong> Въпреки че правилата са важни, не забравяйте, че основната цел е да се насладите на времето си в IceMC!",
        survivalRulesTitle: "Правила за Оцеляване",
        survivalRule1: "<strong>Заявете земята си:</strong> Използвайте плъгини за заявяване на земя, за да защитите постройките си. Незаявените постройки са уязвими.",
        survivalRule2: "<strong>Без капани:</strong> Не създавайте капани, които умишлено убиват или нараняват други играчи без тяхното съгласие.",
        survivalRule3: "<strong>Събиране на ресурси:</strong> Внимавайте за изчерпването на ресурсите. Избягвайте да оставяте плаващи дървета или грозни дупки.",
        rulesFooterTagline: "Играйте честно, стройте епично и се забавлявайте!",

        // Vote.html specific translations
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
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const currentTranslations = translations[lang];

        if (currentTranslations && currentTranslations[key]) {
            if (element.tagName === 'TITLE') {
                document.title = currentTranslations[key];
            } else {
                // For strong tags within list items, ensure innerHTML is used
                if (element.tagName === 'STRONG') {
                    element.innerHTML = currentTranslations[key];
                } else {
                    element.textContent = currentTranslations[key];
                }
            }
        }
    });

    localStorage.setItem('preferredLang', lang);
}

// Copy IP functionality
document.getElementById('copyIpButton')?.addEventListener('click', function() {
    const serverIp = document.getElementById('serverIp')?.textContent;
    const copyMessage = document.getElementById('copyMessage');

    if (serverIp && copyMessage) {
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
    }
});

// Function to fetch and update server status
async function fetchServerStatus() {
    const serverIp = "play.icemc.online";
    const apiUrl = `https://api.mcsrvstat.us/3/${serverIp}`;

    const statusIndicator = document.getElementById('statusIndicator');
    const serverStatusText = document.getElementById('serverStatusText');
    const playerCount = document.getElementById('playerCount');
    const maxPlayers = document.getElementById('maxPlayers');
    const motdElement = document.getElementById('motd');
    const statusError = document.getElementById('statusError');

    if (!serverStatusText || !statusIndicator) {
        return;
    }

    const currentLang = localStorage.getItem('preferredLang') || 'en';
    serverStatusText.textContent = translations[currentLang].loadingStatus;
    serverStatusText.classList.remove('text-green-400', 'text-red-400');
    serverStatusText.classList.add('text-yellow-400');
    if (playerCount) playerCount.textContent = '--';
    if (maxPlayers) maxPlayers.textContent = '--';
    if (motdElement) motdElement.textContent = '';
    statusIndicator.innerHTML = `
        <span class="ping-animation absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-5 w-5 bg-yellow-500"></span>
    `;
    if (statusError) statusError.classList.add('hidden');

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.online) {
            serverStatusText.textContent = translations[currentLang].serverIs + ' Online';
            serverStatusText.classList.remove('text-yellow-400', 'text-red-400');
            serverStatusText.classList.add('text-green-400');
            if (playerCount) playerCount.textContent = data.players ? data.players.online : 'N/A';
            if (maxPlayers) maxPlayers.textContent = data.players ? data.players.max : 'N/A';
            if (motdElement && data.motd && data.motd.clean && data.motd.clean.length > 0) {
                motdElement.textContent = data.motd.clean.join(' | ');
            }
            statusIndicator.innerHTML = `
                <span class="ping-animation absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
            `;
        } else {
            serverStatusText.textContent = translations[currentLang].serverIs + ' Offline';
            serverStatusText.classList.remove('text-yellow-400', 'text-green-400');
            serverStatusText.classList.add('text-red-400');
            if (playerCount) playerCount.textContent = '--';
            if (maxPlayers) maxPlayers.textContent = '--';
            if (motdElement) motdElement.textContent = translations[currentLang].statusErrorMessage;
            statusIndicator.innerHTML = `
                <span class="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
            `;
        }
    } catch (error) {
        console.error("Error fetching server status:", error);
        serverStatusText.textContent = translations[currentLang].serverIs + ' Error';
        serverStatusText.classList.remove('text-yellow-400', 'text-green-400');
        serverStatusText.classList.add('text-red-400');
        if (playerCount) playerCount.textContent = '--';
        if (maxPlayers) maxPlayers.textContent = '--';
        if (motdElement) motdElement.textContent = translations[currentLang].statusErrorMessage;
        statusIndicator.innerHTML = `
            <span class="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
        `;
    }
}

// Function to handle form submission (Login/Register)
document.getElementById('authForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const authMessage = document.getElementById('authMessage');

    const username = usernameInput?.value.trim();
    const password = passwordInput?.value.trim();

    if (!username || !password) {
        if (authMessage) {
            authMessage.textContent = translations[localStorage.getItem('preferredLang') || 'en'].authErrorMessage;
            authMessage.classList.remove('hidden');
        }
        return;
    } else {
        if (authMessage) {
            authMessage.classList.add('hidden');
        }
    }

    // This is where you would integrate with a backend authentication system (e.g., Firebase, custom API)
    // For now, we'll just simulate a successful action.
    const isRegister = event.submitter?.id === 'registerButton';
    const action = isRegister ? 'Register' : 'Login';

    console.log(`${action} attempt for username: ${username}, password: ${password}`);

    // Simulate API call
    setTimeout(() => {
        if (authMessage) {
            authMessage.classList.remove('hidden', 'text-red-400');
            authMessage.classList.add('text-green-400');
            authMessage.textContent = `${action} successful for ${username}! (Simulated)`;
        }
        // Clear form fields
        if (usernameInput) usernameInput.value = '';
        if (passwordInput) passwordInput.value = '';
    }, 1000);
});


// Function to create and append stars
function createStars() {
    let starsContainer = document.querySelector('.stars');
    // If the stars container doesn't exist, create it and append to body
    if (!starsContainer) {
        starsContainer = document.createElement('div');
        starsContainer.className = 'stars';
        document.body.prepend(starsContainer); // Add as the first child to ensure it's behind other content
    }

    // Clear existing stars to prevent duplicates on re-calls if any
    starsContainer.innerHTML = '';

    const numberOfStars = 100; // Adjust as needed

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1; // Random size between 1px and 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 10}s`; // Random delay for staggered animation
        star.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration for varied speed
        starsContainer.appendChild(star);
    }
}


// Event Listeners for flags
// Using optional chaining (?) to prevent errors if elements don't exist on a specific page
document.getElementById('lang-en')?.addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-bg')?.addEventListener('click', () => setLanguage('bg'));

// Load preferred language and fetch status on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en'; // Default to English
    setLanguage(savedLang);

    // Only fetch server status if on the index.html page (where status elements exist)
    if (document.getElementById('serverStatusText')) {
        fetchServerStatus();
        setInterval(fetchServerStatus, 30000); // Refresh status every 30 seconds
    }
    createStars(); // Create stars on every page load for any HTML file
});
