// Copy IP functionality
document.getElementById('copyIpButton').addEventListener('click', function() {
    const serverIp = document.getElementById('serverIp').textContent;
    const copyMessage = document.getElementById('copyMessage');

    // Use document.execCommand('copy') for better cross-browser compatibility in iframes
    const tempInput = document.createElement('textarea');
    tempInput.value = serverIp;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Show success message
    copyMessage.classList.remove('opacity-0');
    copyMessage.classList.add('opacity-100');
    setTimeout(() => {
        copyMessage.classList.remove('opacity-100');
        copyMessage.classList.add('opacity-0');
    }, 2000); // Hide after 2 seconds
});

// Function to fetch and update server status
async function fetchServerStatus() {
    const serverIp = "play.icemc.online"; // Your server IP
    // Updated API URL for mcsrvstat.us
    const apiUrl = `https://api.mcsrvstat.us/3/${serverIp}`;

    const statusIndicator = document.getElementById('statusIndicator');
    const serverStatusText = document.getElementById('serverStatusText');
    const playerCount = document.getElementById('playerCount');
    const maxPlayers = document.getElementById('maxPlayers');
    const motdElement = document.getElementById('motd');
    const statusError = document.getElementById('statusError');

    // Set initial loading state
    serverStatusText.textContent = 'Loading...';
    serverStatusText.classList.remove('text-green-400', 'text-red-400');
    serverStatusText.classList.add('text-yellow-400');
    playerCount.textContent = '--';
    maxPlayers.textContent = '--';
    motdElement.textContent = ''; // Clear previous MOTD
    statusIndicator.innerHTML = `
        <span class="ping-animation absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-5 w-5 bg-yellow-500"></span>
    `;
    statusError.classList.add('hidden'); // Hide any previous error

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.online) {
            serverStatusText.textContent = 'Online';
            serverStatusText.classList.remove('text-yellow-400', 'text-red-400');
            serverStatusText.classList.add('text-green-400');
            playerCount.textContent = data.players ? data.players.online : 'N/A';
            maxPlayers.textContent = data.players ? data.players.max : 'N/A';
            if (data.motd && data.motd.clean && data.motd.clean.length > 0) {
                motdElement.textContent = data.motd.clean.join(' | '); // Join MOTD lines
            }
            statusIndicator.innerHTML = `
                <span class="ping-animation absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
            `;
        } else {
            serverStatusText.textContent = 'Offline';
            serverStatusText.classList.remove('text-yellow-400', 'text-green-400');
            serverStatusText.classList.add('text-red-400');
            playerCount.textContent = '--';
            maxPlayers.textContent = '--';
            motdElement.textContent = 'Server is currently unreachable.';
            statusIndicator.innerHTML = `
                <span class="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
            `;
        }
    } catch (error) {
        console.error("Error fetching server status:", error);
        serverStatusText.textContent = 'Error';
        serverStatusText.classList.remove('text-yellow-400', 'text-green-400');
        serverStatusText.classList.add('text-red-400');
        playerCount.textContent = '--';
        maxPlayers.textContent = '--';
        motdElement.textContent = 'Failed to load server status.';
        statusIndicator.innerHTML = `
            <span class="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
        `;
        statusError.classList.remove('hidden'); // Show error message
    }
}

// Fetch status on page load
document.addEventListener('DOMContentLoaded', fetchServerStatus);
// Refresh status every 30 seconds
setInterval(fetchServerStatus, 30000);
