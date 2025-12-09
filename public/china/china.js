// Ancient China Page JavaScript

// DOM Elements
const exploreBtn = document.getElementById('exploreBtn');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const chineseQuote = document.getElementById('chineseQuote');
const dynastyTags = document.querySelectorAll('.dynasty-tag');

// Ancient Chinese Quotes Array
const chineseQuotes = [
    {
        text: "The journey of a thousand miles begins with a single step.",
        author: "Lao Tzu, Tao Te Ching"
    },
    {
        text: "When the wind of change blows, some build walls, others build windmills.",
        author: "Chinese Proverb"
    },
    {
        text: "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.",
        author: "Chinese Proverb"
    },
    {
        text: "A gem cannot be polished without friction, nor a man perfected without trials.",
        author: "Chinese Proverb"
    },
    {
        text: "The wise man adapts himself to circumstances, as water shapes itself to the vessel that contains it.",
        author: "Chinese Proverb"
    },
    {
        text: "Learning is a treasure that will follow its owner everywhere.",
        author: "Chinese Proverb"
    },
    {
        text: "To know what is right and not to do it is the worst cowardice.",
        author: "Confucius"
    },
    {
        text: "The superior man is modest in his speech but exceeds in his actions.",
        author: "Confucius"
    }
];

// Dynasty Information
const dynastyInfo = {
    xia: {
        name: "Xia Dynasty",
        period: "c. 2070-1600 BCE",
        info: "Considered China's first dynasty, though its existence is semi-legendary. Known for flood control projects and early bronze work."
    },
    shang: {
        name: "Shang Dynasty",
        period: "c. 1600-1046 BCE",
        info: "First historically confirmed dynasty. Developed oracle bone script, advanced bronze casting, and ancestor worship."
    },
    zhou: {
        name: "Zhou Dynasty",
        period: "1046-256 BCE",
        info: "Longest-lasting dynasty. Developed the Mandate of Heaven concept and saw the birth of Confucianism and Daoism."
    },
    qin: {
        name: "Qin Dynasty",
        period: "221-206 BCE",
        info: "First to unify China under a single emperor. Standardized writing, currency, and measurements. Began the Great Wall."
    },
    han: {
        name: "Han Dynasty",
        period: "206 BCE-220 CE",
        info: "Golden age of Chinese civilization. Established the Silk Road, expanded territory, and made Confucianism the state philosophy."
    },
    tang: {
        name: "Tang Dynasty",
        period: "618-907 CE",
        info: "Considered a high point in Chinese civilization. Known for poetry, painting, and cultural flourishing. Buddhism became prominent."
    },
    song: {
        name: "Song Dynasty",
        period: "960-1279 CE",
        info: "Period of economic prosperity and technological innovation. Invented movable type printing, paper money, and the compass."
    }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Explore Button Click
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            alert("Exploring the glorious dynasties of Ancient China! From the legendary Xia to the culturally rich Song Dynasty, each contributed uniquely to Chinese civilization.");
            
            // Animate the button
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    // New Quote Button
    if (newQuoteBtn) {
        newQuoteBtn.addEventListener('click', generateNewQuote);
    }
    
    // Dynasty Tags Click
    dynastyTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const dynasty = this.getAttribute('data-dynasty');
            showDynastyInfo(dynasty);
        });
    });
    
    // Initialize with a random quote
    generateNewQuote();
});

// Generate a new random Chinese quote
function generateNewQuote() {
    const randomIndex = Math.floor(Math.random() * chineseQuotes.length);
    const randomQuote = chineseQuotes[randomIndex];
    
    chineseQuote.textContent = `"${randomQuote.text}"`;
    document.querySelector('.quote-author').textContent = `— ${randomQuote.author}`;
    
    // Animate the quote change
    chineseQuote.style.opacity = '0';
    setTimeout(() => {
        chineseQuote.style.opacity = '1';
        chineseQuote.style.transition = 'opacity 0.5s ease';
    }, 10);
}

// Show dynasty information when tag is clicked
function showDynastyInfo(dynasty) {
    if (dynastyInfo[dynasty]) {
        const info = dynastyInfo[dynasty];
        alert(`${info.name} (${info.period})\n\n${info.info}`);
    }
}

// Add hover effect to governance items
const governanceItems = document.querySelectorAll('.governance-item');
governanceItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Add animation to traditions list items
const traditionItems = document.querySelectorAll('.traditions-list li');
traditionItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(255, 213, 79, 0.1)';
        this.style.paddingLeft = '10px';
        this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
        this.style.paddingLeft = '0';
    });
});

// Choose Your Destiny Game JavaScript

// Game State
const gameState = {
    currentScene: "start",
    choicesMade: 0,
    dynasty: "Han",
    status: "Scholar",
    gameEnded: false
};

// Game Scenarios Data
const gameScenarios = {
    "start": {
        title: "The Emperor's Summons",
        description: "You are a scholar in the Han Dynasty court. The Emperor has summoned you for an important assignment. As you enter the throne room, you notice tension in the air. The Emperor explains that northern barbarians (Xiongnu) are threatening the Silk Road trade routes. He gives you a choice...",
        options: [
            {
                text: "Propose a military campaign to defeat the Xiongnu",
                nextScene: "military_campaign",
                statusChange: "Military Advisor"
            },
            {
                text: "Suggest diplomatic marriage alliance (heqin policy)",
                nextScene: "diplomatic_alliance",
                statusChange: "Diplomat"
            },
            {
                text: "Advocate for building fortifications along the border",
                nextScene: "fortifications",
                statusChange: "Architect Engineer"
            }
        ]
    },
    "military_campaign": {
        title: "The Military Campaign",
        description: "The Emperor approves your plan for a military campaign against the Xiongnu. General Wei Qing is put in charge. After months of preparation, the army heads north. During the campaign, you face a critical decision...",
        options: [
            {
                text: "Attack the Xiongnu head-on with full force",
                nextScene: "head_on_attack",
                statusChange: "Field Strategist"
            },
            {
                text: "Use a flanking strategy to surround the enemy",
                nextScene: "flanking_strategy",
                statusChange: "Tactical Commander"
            },
            {
                text: "Bribe Xiongnu tribes to turn against each other",
                nextScene: "divide_and_conquer",
                statusChange: "Spymaster"
            }
        ]
    },
    "diplomatic_alliance": {
        title: "Diplomatic Mission",
        description: "You are sent as an envoy to the Xiongnu with a princess for marriage alliance. The Shanyu (Xiongnu leader) receives you but seems skeptical. During negotiations, an incident occurs...",
        options: [
            {
                text: "Offer additional gifts and trade privileges",
                nextScene: "generous_gifts",
                statusChange: "Chief Negotiator"
            },
            {
                text: "Threaten with Han military might",
                nextScene: "threat_response",
                statusChange: "Hardline Diplomat"
            },
            {
                text: "Propose cultural exchange and education programs",
                nextScene: "cultural_exchange",
                statusChange: "Cultural Ambassador"
            }
        ]
    },
    "fortifications": {
        title: "Building the Great Wall",
        description: "You are put in charge of extending fortifications along the northern border. Thousands of conscripted workers are under your command. A crisis emerges when...",
        options: [
            {
                text: "Workers rebel due to harsh conditions",
                nextScene: "worker_rebellion",
                statusChange: "Construction Overseer"
            },
            {
                text: "Xiongnu raids threaten the construction sites",
                nextScene: "raid_defense",
                statusChange: "Border Commander"
            },
            {
                text: "Imperial inspectors accuse you of corruption",
                nextScene: "corruption_accusation",
                statusChange: "Suspected Official"
            }
        ]
    },
    "head_on_attack": {
        title: "Decisive Battle",
        description: "Your direct attack leads to a massive battle at Mobei. The Han army suffers heavy casualties but achieves a strategic victory. However, the cost is enormous...",
        ending: "tactical_victory",
        endingType: "mixed"
    },
    "flanking_strategy": {
        title: "Brilliant Maneuver",
        description: "Your flanking strategy succeeds brilliantly. The Xiongnu are caught off guard and suffer a major defeat. The Han army captures thousands of horses and prisoners. You are celebrated as a hero.",
        ending: "great_victory",
        endingType: "good"
    },
    "divide_and_conquer": {
        title: "Internal Strife",
        description: "Your bribery scheme works initially, causing conflict among Xiongnu tribes. However, the new united Xiongnu leadership under a charismatic leader emerges stronger and more hostile than before.",
        ending: "backfire",
        endingType: "bad"
    },
    "generous_gifts": {
        title: "Successful Alliance",
        description: "Your generous gifts impress the Shanyu. The marriage alliance proceeds, bringing 20 years of peace along the northern border. Trade flourishes on the Silk Road.",
        ending: "peaceful_alliance",
        endingType: "good"
    },
    "threat_response": {
        title: "Diplomatic Disaster",
        description: "Your threats anger the Shanyu. He rejects the alliance and increases raids along the border. You return in disgrace, and the Emperor orders military action.",
        ending: "failed_diplomacy",
        endingType: "bad"
    },
    "cultural_exchange": {
        title: "Cultural Bridge",
        description: "The cultural exchange program is accepted. Xiongnu nobles send their sons to study in Chang'an. While not eliminating conflict entirely, it reduces hostilities significantly.",
        ending: "cultural_success",
        endingType: "mixed"
    },
    "worker_rebellion": {
        title: "Rebellion Suppressed",
        description: "You suppress the rebellion harshly, executing the leaders. The wall construction continues but your reputation suffers. The completed wall section is strong but built on suffering.",
        ending: "harsh_success",
        endingType: "mixed"
    },
    "raid_defense": {
        title: "Heroic Defense",
        description: "You successfully defend the construction sites, defeating multiple Xiongnu raids. The completed wall section becomes a model for future constructions. You are promoted.",
        ending: "defensive_victory",
        endingType: "good"
    },
    "corruption_accusation": {
        title: "Court Intrigue",
        description: "The corruption accusations, though false, lead to your dismissal. Rival officials take over the project. The wall construction continues without you.",
        ending: "political_downfall",
        endingType: "bad"
    }
};

// Game Endings
const gameEndings = {
    "great_victory": {
        title: "Glory to the Han Empire!",
        description: "Your brilliant military strategy secures a decisive victory against the Xiongnu. The northern borders are secure for a generation. The Emperor rewards you with land, titles, and honor for your family. Your name is recorded in the imperial histories as a great commander.",
        historicalContext: {
            title: "Historical Context: Han-Xiongnu Wars",
            text: "The Han Dynasty (206 BCE-220 CE) indeed fought prolonged wars against the Xiongnu confederation. Emperor Wu (r. 141-87 BCE) launched major campaigns using strategies similar to these options. The most successful Han generals, like Wei Qing and Huo Qubing, used flanking maneuvers to achieve decisive victories around 119 BCE. These victories temporarily secured the Silk Road but drained Han resources. Source: Records of the Grand Historian by Sima Qian."
        }
    },
    "tactical_victory": {
        title: "Costly Triumph",
        description: "You achieve victory but at tremendous cost. Thousands of Han soldiers perish, and the treasury is nearly emptied. While the Xiongnu are pushed back temporarily, resentment grows. You receive moderate rewards but face criticism for the heavy losses.",
        historicalContext: {
            title: "Historical Context: The Cost of War",
            text: "Han campaigns against the Xiongnu were indeed extremely costly in both lives and resources. The Mobei campaign of 119 BCE, while successful, nearly bankrupted the Han treasury and caused widespread suffering. Emperor Wu's aggressive expansionist policies eventually led to economic strain and peasant rebellions. Source: Book of Han (Han Shu)."
        }
    },
    "backfire": {
        title: "Unintended Consequences",
        description: "Your scheme to divide the Xiongnu backfires spectacularly. A new, more unified and hostile Xiongnu confederation emerges under strong leadership. Border raids increase, and you are blamed for the worsened situation. You are demoted to a minor provincial post.",
        historicalContext: {
            title: "Historical Context: Xiongnu Consolidation",
            text: "The Han Dynasty did attempt to use divide-and-conquer tactics against the Xiongnu, with mixed results. Sometimes these efforts backfired when particularly capable Xiongnu leaders like Modu Chanyu (r. 209-174 BCE) unified tribes more effectively. The heqin (marriage alliance) policy was often more successful than direct confrontation. Source: Cambridge History of China, Volume 1."
        }
    },
    "peaceful_alliance": {
        title: "Architect of Peace",
        description: "Your diplomatic skills secure two decades of peace along the northern border. The Silk Road flourishes, bringing wealth and exotic goods to Chang'an. You are celebrated as a master diplomat and appointed to the highest councils of state.",
        historicalContext: {
            title: "Historical Context: Heqin Policy",
            text: "The heqin ('harmonious kinship') policy of marriage alliances was actually used by early Han emperors toward the Xiongnu. While it brought temporary peace, it was expensive (requiring annual gifts) and seen as humiliating by some Han officials. Emperor Wu eventually abandoned this policy in favor of military campaigns. Source: Records of the Grand Historian."
        }
    },
    "failed_diplomacy": {
        title: "Disgrace and War",
        description: "Your failed diplomacy leads to renewed war. The Emperor, angry at the wasted opportunity, sends you to a remote post. Major military campaigns are launched, costing thousands of lives and draining the treasury.",
        historicalContext: {
            title: "Historical Context: Diplomatic Failures",
            text: "Han diplomats did face dangerous missions to the Xiongnu. The most famous, Su Wu, was captured and held for 19 years. Failed diplomacy often led to immediate military retaliation. The Xiongnu saw threats as weakness and typically responded with increased aggression. Source: Book of Han."
        }
    },
    "cultural_success": {
        title: "Bridge Between Cultures",
        description: "Your cultural exchange program creates lasting connections between Han and Xiongnu elites. While border skirmishes continue, large-scale war is avoided for years. You establish a school for foreign nobles in Chang'an and write influential texts on border relations.",
        historicalContext: {
            title: "Historical Context: Cultural Exchange",
            text: "Some Xiongnu nobles did adopt Han customs and send their sons to be educated in Chang'an. This sinicization process was a long-term strategy that eventually contributed to the decline of Xiongnu power. However, cultural assimilation worked both ways - some Han border residents adopted Xiongnu customs too. Source: The Xiongnu by R. de Crespigny."
        }
    },
    "harsh_success": {
        title: "The Wall Stands, Your Reputation Falls",
        description: "The wall section is completed and proves effective against raids. However, stories of your harsh treatment of workers spread. Confucian scholars criticize your methods. While technically successful, your career advances no further.",
        historicalContext: {
            title: "Historical Context: Great Wall Construction",
            text: "The Great Wall was built through conscripted labor under harsh conditions. Historical records mention worker rebellions and high mortality rates. While effective militarily, the human cost was tremendous. Later dynasties continued and expanded the wall using similar methods. Source: The Great Wall of China by Arthur Waldron."
        }
    },
    "defensive_victory": {
        title: "Defender of the Frontier",
        description: "Your successful defenses make you a hero along the border. The completed wall section becomes legendary for its strength. You are promoted to regional commander and continue to serve with distinction for decades.",
        historicalContext: {
            title: "Historical Context: Border Defense",
            text: "Han frontier commanders who successfully defended against Xiongnu raids were indeed celebrated and promoted. The wall was not a continuous barrier but a system of fortifications, watchtowers, and garrison towns. Successful commanders often came from border regions themselves. Source: Ancient China and Its Enemies by Nicola Di Cosmo."
        }
    },
    "political_downfall": {
        title: "Victim of Court Politics",
        description: "Despite your competence, political enemies undermine you with false accusations. You are removed from your post. The wall construction continues under others. You retire to your estate, writing bitter poetry about court intrigues.",
        historicalContext: {
            title: "Historical Context: Court Intrigue",
            text: "Han court politics were notoriously treacherous. Officials frequently fell victim to accusations, whether true or false. The historian Sima Qian himself was castrated for defending a disgraced general. Survival in the Han court required political skill as much as competence. Source: Records of the Grand Historian."
        }
    }
};

// DOM Elements for Game
const gameTextEl = document.getElementById('gameText');
const gameTitleEl = document.getElementById('gameTitle');
const gameDescriptionEl = document.getElementById('gameDescription');
const gameOptionsEl = document.getElementById('gameOptions');
const gameEndingEl = document.getElementById('gameEnding');
const endingTitleEl = document.getElementById('endingTitle');
const endingDescriptionEl = document.getElementById('endingDescription');
const historicalContextEl = document.getElementById('historicalContext');
const restartBtn = document.getElementById('restartBtn');

// Game Stats Elements
const currentDynastyEl = document.getElementById('currentDynasty');
const currentStatusEl = document.getElementById('currentStatus');
const choiceCountEl = document.getElementById('choiceCount');

// Initialize Game
function initGame() {
    gameState.currentScene = "start";
    gameState.choicesMade = 0;
    gameState.dynasty = "Han";
    gameState.status = "Scholar";
    gameState.gameEnded = false;
    
    updateGameStats();
    loadScene("start");
    
    // Show game text, hide ending
    document.querySelector('.game-ending').classList.add('hidden');
    document.querySelector('.game-options').classList.remove('hidden');
}

// Load a game scene
function loadScene(sceneId) {
    const scene = gameScenarios[sceneId];
    
    if (!scene) {
        console.error("Scene not found:", sceneId);
        return;
    }
    
    gameTitleEl.textContent = scene.title;
    gameDescriptionEl.textContent = scene.description;
    
    // If this scene has an ending
    if (scene.ending) {
        showEnding(scene.ending, scene.endingType);
        return;
    }
    
    // Clear previous options
    gameOptionsEl.innerHTML = '';
    
    // Create new options
    scene.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = `${index + 1}. ${option.text}`;
        optionBtn.addEventListener('click', () => chooseOption(option));
        gameOptionsEl.appendChild(optionBtn);
    });
}

// Handle player choice
function chooseOption(option) {
    gameState.choicesMade++;
    
    if (option.statusChange) {
        gameState.status = option.statusChange;
    }
    
    updateGameStats();
    
    // Add visual feedback
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.style.pointerEvents = 'none';
        btn.style.opacity = '0.7';
    });
    
    // Load next scene after a brief delay
    setTimeout(() => {
        loadScene(option.nextScene);
    }, 800);
}

// Show ending
function showEnding(endingId, endingType) {
    const ending = gameEndings[endingId];
    
    if (!ending) {
        console.error("Ending not found:", endingId);
        return;
    }
    
    // Update ending display
    endingTitleEl.textContent = ending.title;
    endingDescriptionEl.textContent = ending.description;
    
    // Update historical context
    historicalContextEl.innerHTML = `
        <h4>${ending.historicalContext.title}</h4>
        <p>${ending.historicalContext.text}</p>
    `;
    
    // Show ending, hide options
    gameEndingEl.classList.remove('hidden');
    gameOptionsEl.classList.add('hidden');
    
    // Change background color based on ending type
    const endingColor = endingType === 'good' ? 'rgba(76, 175, 80, 0.1)' : 
                      endingType === 'bad' ? 'rgba(244, 67, 54, 0.1)' : 
                      'rgba(255, 193, 7, 0.1)';
    
    gameEndingEl.style.backgroundColor = endingColor;
    gameState.gameEnded = true;
}

// Update game stats display
function updateGameStats() {
    currentDynastyEl.textContent = gameState.dynasty;
    currentStatusEl.textContent = gameState.status;
    choiceCountEl.textContent = gameState.choicesMade;
}

// Event Listeners for Game
document.addEventListener('DOMContentLoaded', function() {
    // Initialize game if game section exists
    if (document.getElementById('destinyGame')) {
        initGame();
        
        // Restart button
        if (restartBtn) {
            restartBtn.addEventListener('click', initGame);
        }
        
        // Add game to navigation instructions
        const exploreBtn = document.querySelector('.explore-btn');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', function() {
                // Scroll to game section
                document.getElementById('destinyGame').scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Highlight game section briefly
                const gameSection = document.getElementById('destinyGame');
                gameSection.style.boxShadow = '0 0 0 5px #FFD54F';
                setTimeout(() => {
                    gameSection.style.boxShadow = '';
                }, 1500);
            });
        }
    }
});

// Add animation to option selection
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('option-btn')) {
        // Add click effect
        e.target.style.transform = 'scale(0.98)';
        e.target.style.backgroundColor = '#5D4037';
        
        // Reset other buttons
        const allButtons = document.querySelectorAll('.option-btn');
        allButtons.forEach(btn => {
            if (btn !== e.target) {
                btn.style.opacity = '0.5';
            }
        });
    }
});