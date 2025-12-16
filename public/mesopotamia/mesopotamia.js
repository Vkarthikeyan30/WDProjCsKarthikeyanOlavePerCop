// Ancient China Page JavaScript

// DOM Elements
const exploreBtn = document.getElementById('exploreBtn');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const chineseQuote = document.getElementById('chineseQuote');
const dynastyTags = document.querySelectorAll('.dynasty-tag');

// Ancient Chinese Quotes Array
const chineseQuotes = [
    {
        text: "He who possesses much silver may be happy; he who possesses much barley may be happy; but he who has nothing at all can sleep.",
        author: "Sumerian Proverb"
    },
    {
        text: "Humans are born, they live, then they die, this is the order that the gods have decreed.",
        author: "Epic of Gilgamesh"
    },
    {
        text: "Concerning the silver, why do you keep writing to me? The time is not favorable for silver.",
        author: "A Letter from A Businessman"
    }
];

// Dynasty Information
const dynastyInfo = {
    akk_emp: {
        name: "Akkadian Empire",
        period: "c. 2334-2154 BCE",
        info: "The world's first true empire, forged by Sargon of Akkad through military conquest."
    },
    bab_emp: {
        name: "Babylonian Empire",
            period: "c. 1894-539 BCE",
        info: "Renowned for the Code of Hammurabi and the grandeur of Babylon as a cultural center"
    },
    ass_emp: {
        name: "Assyrian Empire",
        period: "c. 2025-609 BCE",
        info: "A militarily formidable and administratively efficient empire known for its terror tactics."
    },
    neo_emp: {
        name: "Neo-Babylonian Empire",
        period: "c. 626-539 BCE",
        info: "The last Mesopotamian empire, famous for the Hanging Gardens and its conquest of Jerusalem."
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Explore Button Click
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
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
let lastRandomIndex = -1; // Initialize with an invalid index

function generateNewQuote() {
    let randomIndex;

    // Ensure the new random index is different from the last one
    do {
        randomIndex = Math.floor(Math.random() * chineseQuotes.length);
    } while (randomIndex === lastRandomIndex);

    lastRandomIndex = randomIndex; // Update the last random index
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
    dynasty: "Akkadian Empire",
    status: "Rising Official",
    gameEnded: false
};

// Game Scenarios Data
const gameScenarios = {
    "start": {
        title: "The King's Summons",
        description: "You are a rising official in the great city of Babylon. King Hammurabi has summoned you to the palace. The empire is growing, but tensions rise between rival cities, irrigation canals, and foreign threats along the Euphrates. The king seeks your counsel...",
        options: [
            {
                text: "Advise launching a military campaign against Larsa",
                nextScene: "military_campaign",
                statusChange: "Military Advisor"
            },
            {
                text: "Propose forming alliances through marriage and trade treaties",
                nextScene: "diplomatic_alliance",
                statusChange: "Diplomat"
            },
            {
                text: "Recommend improving the irrigation canals to stabilize food supply",
                nextScene: "canal_project",
                statusChange: "Chief Engineer"
            }
        ]
    },

    "military_campaign": {
        title: "War Against Larsa",
        description: "Hammurabi approves your war plan. The army marches south under General Zikiru. As you reach the outskirts of Larsa, the enemy forces prepare for battle. You must decide on a critical strategy...",
        options: [
            {
                text: "Launch a direct assault on Larsa's fortified walls",
                nextScene: "head_on_attack",
                statusChange: "Field Strategist"
            },
            {
                text: "Cut off Larsa's water supply by diverting the canal",
                nextScene: "canal_siege",
                statusChange: "Tactical Commander"
            },
            {
                text: "Bribe Larsa's mercenaries to abandon their posts",
                nextScene: "divide_and_conquer",
                statusChange: "Spymaster"
            }
        ]
    },

    "diplomatic_alliance": {
        title: "Alliance Negotiations",
        description: "You are sent to negotiate with the city-state Mari along the Euphrates. Its ruler, Zimri-Lim, receives you warmly, but tensions rise during talks when rumors of treachery emerge...",
        options: [
            {
                text: "Offer generous trade rights and gifts",
                nextScene: "generous_gifts",
                statusChange: "Chief Negotiator"
            },
            {
                text: "Threaten Mari with Babylon's expanding army",
                nextScene: "threat_response",
                statusChange: "Hardline Diplomat"
            },
            {
                text: "Propose shared irrigation projects to benefit both cities",
                nextScene: "shared_irrigation",
                statusChange: "Cultural Ambassador"
            }
        ]
    },

    "canal_project": {
        title: "Irrigation Crisis",
        description: "You oversee repairs of the massive canal network linking the Tigris and Euphrates. Thousands of laborers depend on your leadership. A crisis emerges when...",
        options: [
            {
                text: "Workers revolt due to exhausting labor demands",
                nextScene: "worker_rebellion",
                statusChange: "Construction Overseer"
            },
            {
                text: "A rival city sabotages the canal to weaken Babylon",
                nextScene: "sabotage_defense",
                statusChange: "Border Commander"
            },
            {
                text: "Court officials accuse you of stealing canal funds",
                nextScene: "corruption_accusation",
                statusChange: "Suspected Official"
            }
        ]
    },

    "head_on_attack": {
        title: "Assault on Larsa",
        description: "Your direct attack leads to brutal fighting at Larsa’s gates. The city falls, but Babylon suffers heavy losses. Victory is achieved, but at a painful cost.",
        ending: "tactical_victory",
        endingType: "mixed"
    },

    "canal_siege": {
        title: "Victory Through Strategy",
        description: "You divert Larsa's water canal. Thirst forces the defenders to surrender. The capture is swift, losses are minimal, and your strategy wins you great honor.",
        ending: "great_victory",
        endingType: "good"
    },

    "divide_and_conquer": {
        title: "Chaos and Consequence",
        description: "Your bribery plan causes confusion among Larsa’s troops, but soon a strong new commander unites them. They become more hostile and unpredictable than before.",
        ending: "backfire",
        endingType: "bad"
    },

    "generous_gifts": {
        title: "Alliance Secured",
        description: "Your gifts impress Zimri-Lim, and Mari signs a long-term peace treaty with Babylon. Trade thrives along the Euphrates, bringing wealth to both cities.",
        ending: "peaceful_alliance",
        endingType: "good"
    },

    "threat_response": {
        title: "Diplomatic Breakdown",
        description: "Your threats anger Mari’s rulers. They break off talks and ally with Babylon’s enemies. War becomes unavoidable. You return home disgraced.",
        ending: "failed_diplomacy",
        endingType: "bad"
    },

    "shared_irrigation": {
        title: "Water for All",
        description: "The idea of shared canals is welcomed. Both cities cooperate in maintaining water routes, reducing border tensions and improving agriculture.",
        ending: "cultural_success",
        endingType: "mixed"
    },

    "worker_rebellion": {
        title: "Order Restored",
        description: "You crush the rebellion. The canal is completed, but your harsh rule earns you the hatred of many workers. The project succeeds, but your name is stained.",
        ending: "harsh_success",
        endingType: "mixed"
    },

    "sabotage_defense": {
        title: "Protector of the Waterways",
        description: "You catch the saboteurs and defend the canal system. Babylon praises your vigilance, and the restored canals strengthen the empire’s food supply.",
        ending: "defensive_victory",
        endingType: "good"
    },

    "corruption_accusation": {
        title: "Political Downfall",
        description: "False accusations overwhelm you. Despite your competence, rivals remove you from your position. Babylon continues the canal work without you.",
        ending: "political_downfall",
        endingType: "bad"
    }
};

// Game Endings
const gameEndings = {
    "great_victory": {
        title: "Triumph for Babylon",
        description: "Your canal-based siege strategy secures a swift victory over Larsa. Babylon expands its power with minimal losses. Hammurabi rewards you with land and high office.",
        historicalContext: {
            title: "Historical Context: Babylon vs. Larsa",
            text: "Hammurabi famously defeated rival cities like Larsa through strategic use of irrigation canals. Controlling water flow was a powerful military tool in Mesopotamia, where cities depended on river systems for survival."
        }
    },
    "tactical_victory": {
        title: "Victory at Great Cost",
        description: "Larsa falls, but the casualties are severe. Though you claim victory, critics argue the price was too high. Your reputation is respected but questioned.",
        historicalContext: {
            title: "Historical Context: Mesopotamian Warfare",
            text: "Siege warfare in Mesopotamia was brutal and costly. Cities had strong walls, and direct assaults often resulted in heavy losses. Many kings preferred indirect tactics, including controlling canals or forming alliances."
        }
    },
    "backfire": {
        title: "Unintended Chaos",
        description: "Your plan to bribe Larsa's troops backfires. A new leader unifies them more fiercely, escalating conflict. You are blamed for worsening tensions.",
        historicalContext: {
            title: "Historical Context: Shifting Alliances",
            text: "Rival Mesopotamian city-states often used bribery and internal manipulation, but such tactics sometimes strengthened enemies instead. Larsa and other cities frequently reorganized under new strong rulers."
        }
    },
    "peaceful_alliance": {
        title: "Blessings of Peace",
        description: "Your diplomacy forges a long period of peace and profitable trade. Goods flow freely along the Euphrates, and Babylon prospers.",
        historicalContext: {
            title: "Historical Context: Diplomacy in Mesopotamia",
            text: "Cities like Mari and Babylon maintained alliances through trade, marriages, and diplomatic gifts. Mari’s palace archives reveal extensive diplomatic correspondence between rulers."
        }
    },
    "failed_diplomacy": {
        title: "Disgrace and Conflict",
        description: "Your threats cause negotiations to collapse. Mari joins Babylon’s foes, and your failure contributes to spreading war.",
        historicalContext: {
            title: "Historical Context: Diplomatic Tensions",
            text: "Mesopotamian diplomacy was delicate; threats often backfired. Tablets from Mari describe how aggressive envoys could destabilize relations and provoke wars."
        }
    },
    "cultural_success": {
        title: "Shared Prosperity",
        description: "Your shared irrigation plan eases tensions and stabilizes agriculture. Cooperation improves both cities' livelihoods, though rivalry never fully disappears.",
        historicalContext: {
            title: "Historical Context: Irrigation Cooperation",
            text: "Irrigation was the lifeblood of Mesopotamia. Cities sometimes cooperated to maintain canals, though disputes over water could also spark wars. The Code of Hammurabi includes many laws about canal maintenance."
        }
    },
    "harsh_success": {
        title: "Canals Saved, Legacy Damaged",
        description: "The canal is repaired, and agriculture flourishes. Still, stories of your brutality spread. You succeed, but at a moral cost.",
        historicalContext: {
            title: "Historical Context: Labor in Mesopotamia",
            text: "Canal construction often relied on corvée labor—forced work demands on citizens. Rebellions were not uncommon, especially in times of drought or famine."
        }
    },
    "defensive_victory": {
        title: "Guardian of the Rivers",
        description: "You successfully protect the canals, restoring order and earning renown as a defender of Babylon’s prosperity.",
        historicalContext: {
            title: "Historical Context: Canal Sabotage",
            text: "Cities would sometimes sabotage rivals’ canals to destroy crops. Babylon’s kings strictly guarded irrigation systems, knowing they were crucial to survival."
        }
    },
    "political_downfall": {
        title: "Lost to Court Intrigue",
        description: "False accusations end your career. Though talented, you fall victim to Babylon’s political rivalries. You live quietly, writing complaints on clay tablets.",
        historicalContext: {
            title: "Historical Context: Court Politics",
            text: "Mesopotamian courts could be ruthless. Officials were often removed through accusations, sometimes based on omens or rivalries. Many texts describe political purges and power struggles."
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
    gameState.dynasty = "Akkadian Empire";
    gameState.status = "Rising Official";
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