// Ancient China Page JavaScript

// DOM Elements
const exploreBtn = document.getElementById('exploreBtn');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const chineseQuote = document.getElementById('chineseQuote');
const dynastyTags = document.querySelectorAll('.dynasty-tag');

// Ancient Chinese Quotes Array
const chineseQuotes = [
    {
        text: "The tongue is the sword of a man; speech is stronger than all fighting.",
        author: "Ptahhotep, Vizier during Fifth Dynasty"
    },
    {
        text: "Man perishes; his corpse turns to dust; all his relatives pass away. But writings make him remembered in the mouth of the reader.",
        author: "Inscription from a Middle Kingdom scribe's statue"
    },
    {
        text: "To know the truth and not to speak it is to waste the gift of speech.",
        author: "Ancient Egyptian Proverb"
    }
];

// Dynasty Information
const dynastyInfo = {
    edp: {
        name: "Early Dynastic Period",
        period: "c. 3100-2686 BCE",
        info: "Unification of Egypt. Founding of Memphis. Establishment of divine kinghip and the first hieroglyphs."
    },
    ok: {
        name: "Old Kingdom",
        period: "c. 2686-2181 BCE",
        info: "The Great Sphinx and Giza pyramids were built. Strong central authority."
    },
    mk: {
        name: "Middle Kingdom",
        period: "c. 2055-1650 BCE",
        info: "Reunification and Nubian ecpansion. There were advancements in literature."
    },
    nk: {
        name: "New Kingdom",
        period: "c. 1660-1069 BCE",
        info: "Imperial golden age. Saw the peak of temple construction."
    },
    lp: {
        name: "Late Period",
        period: "c. 664-332 BCE",
        info: "Saite Renassance. Persian conquests occured. Saw the last native dynasties. Traditional arts were revived."
    },
    pp: {
        name: "Ptolemaic",
        period: "c. 332-30 BCE",
        info: "Greek and Macedonian rule. Alexandria was founded. This was the time of Cleopatra VII"
    },
};

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
    dynasty: "New Kingdom",
    status: "Young Official",
    gameEnded: false
};

// Game Scenarios Data
const gameScenarios = {
    "start": {
        title: "The Pharaoh’s Summons",
        description: "You are a young official serving in the court of Pharaoh Hatshepsut during the New Kingdom. As you enter the audience chamber, priests whisper, scribes rush around, and the Pharaoh looks troubled. The annual flooding of the Nile has been unusually low, threatening Egypt’s agriculture. The Pharaoh seeks your counsel...",
        options: [
            {
                text: "Recommend constructing new irrigation canals",
                nextScene: "irrigation_project",
                statusChange: "Royal Engineer"
            },
            {
                text: "Propose sending an expedition to Punt for resources",
                nextScene: "punt_expedition",
                statusChange: "Expedition Leader"
            },
            {
                text: "Suggest increasing temple offerings to appease the gods",
                nextScene: "temple_offerings",
                statusChange: "High Priest’s Aide"
            }
        ]
    },
    "irrigation_project": {
        title: "The Irrigation Project",
        description: "The Pharaoh approves your ambitious plan. Thousands of workers are mobilized along the Nile. As the work begins, a major dilemma arises...",
        options: [
            {
                text: "Divert a larger section of the Nile, risking damage to nearby villages",
                nextScene: "large_diversion",
                statusChange: "Master Engineer"
            },
            {
                text: "Build smaller channels that take longer but avoid displacement",
                nextScene: "small_channels",
                statusChange: "Careful Planner"
            },
            {
                text: "Recruit Nubian laborers to speed up construction",
                nextScene: "nubian_labor",
                statusChange: "Labor Overseer"
            }
        ]
    },
    "punt_expedition": {
        title: "Expedition to Punt",
        description: "You set sail down the Red Sea toward the fabled Land of Punt. After weeks of travel, storms, and sickness, your crew grows restless. A crisis emerges...",
        options: [
            {
                text: "Trade generously with the local rulers of Punt",
                nextScene: "generous_trade",
                statusChange: "Chief Trader"
            },
            {
                text: "Demand tribute using Egypt’s military power",
                nextScene: "military_pressure",
                statusChange: "Forceful Envoy"
            },
            {
                text: "Focus on collecting rare plants and myrrh rather than large trade deals",
                nextScene: "rare_collection",
                statusChange: "Naturalist"
            }
        ]
    },
    "temple_offerings": {
        title: "Appeasing the Gods",
        description: "You oversee ceremonies in Karnak. Priests chant to Amun-Ra as crowds gather. During the preparations for a large festival, complications arise...",
        options: [
            {
                text: "Use more grain for offerings despite Egypt’s shortage",
                nextScene: "lavish_offerings",
                statusChange: "Devoted Servant"
            },
            {
                text: "Reduce the offerings to preserve food reserves",
                nextScene: "reduced_offerings",
                statusChange: "Practical Priest"
            },
            {
                text: "Redirect offerings toward rituals honoring Hapi, god of the Nile",
                nextScene: "hapi_rituals",
                statusChange: "Ritual Specialist"
            }
        ]
    },
    "large_diversion": {
        title: "Great Canal Completed",
        description: "Your bold diversion succeeds in channeling more water. However, several villages suffer flooding and displacement. While crops flourish, resentment grows among the locals.",
        ending: "controversial_success",
        endingType: "mixed"
    },
    "small_channels": {
        title: "Steady Progress",
        description: "Your careful construction avoids harming any village. The smaller channels take longer, but the farming season improves steadily. You are praised for your wisdom and restraint.",
        ending: "engineering_success",
        endingType: "good"
    },
    "nubian_labor": {
        title: "Unrest Among Workers",
        description: "Recruiting Nubians speeds progress, but tensions arise between Egyptian and Nubian laborers. A violent clash erupts, delaying the project and staining your reputation.",
        ending: "labor_conflict",
        endingType: "bad"
    },
    "generous_trade": {
        title: "Treasures of Punt",
        description: "Your generosity impresses the rulers of Punt. They offer gold, myrrh, and exotic animals. The Pharaoh celebrates you, and Egypt enjoys renewed prosperity.",
        ending: "punt_success",
        endingType: "good"
    },
    "military_pressure": {
        title: "Diplomatic Breakdown",
        description: "Your threats anger the rulers of Punt. They refuse cooperation and your ships return home nearly empty. You face criticism for damaging Egypt’s long-standing relationship with Punt.",
        ending: "failed_expedition",
        endingType: "bad"
    },
    "rare_collection": {
        title: "Botanical Wonders",
        description: "You gather rare plants and myrrh crucial for temple rituals. While not a grand success, your findings support religious ceremonies and please the priests.",
        ending: "modest_success",
        endingType: "mixed"
    },
    "lavish_offerings": {
        title: "Praise of the Gods",
        description: "Your lavish offerings impress the priesthood. However, using vital grain during a low Nile year worsens famine conditions. Many blame you for shortages.",
        ending: "spiritual_success_costly",
        endingType: "mixed"
    },
    "reduced_offerings": {
        title: "Balanced Decision",
        description: "Reducing offerings preserves Egypt’s food supply. Some priests accuse you of disrespect, but most people praise your practical thinking.",
        ending: "practical_success",
        endingType: "good"
    },
    "hapi_rituals": {
        title: "Blessing of the Nile",
        description: "Your specialized rituals to Hapi are well-received. When the Nile floods slightly better the next year, many attribute it to your actions—whether rightly or not.",
        ending: "ritual_success",
        endingType: "mixed"
    }
};

// Game Endings
const gameEndings = {
    "engineering_success": {
        title: "Water for Egypt!",
        description: "Your irrigation channels restore farmland, ensuring food for thousands. Pharaoh rewards you with land and a golden collar, honoring your wisdom.",
        historicalContext: {
            title: "Historical Context: Irrigation and the Nile",
            text: "Ancient Egyptian agriculture relied heavily on the annual flooding of the Nile. When floods were low, Egyptians built canals, basins, and shaduf systems to distribute water. Skilled engineers played crucial roles in maintaining Egypt’s food supply."
        }
    },
    "controversial_success": {
        title: "A Price Paid in Water and Lives",
        description: "Although your project restores farmland, displaced families resent your methods. You receive mixed praise—admired for success, criticized for cruelty.",
        historicalContext: {
            title: "Historical Context: Canal Construction",
            text: "Large irrigation projects sometimes displaced villages or required forced labor. Egyptian officials were often judged not only by results but by how justly they treated workers and locals."
        }
    },
    "labor_conflict": {
        title: "Conflict on the Nile",
        description: "Your decision sparks worker rivalries. Productivity slows, and you are reassigned to a minor administrative post, far from the Pharaoh’s trust.",
        historicalContext: {
            title: "Historical Context: Nubian Laborers",
            text: "Egypt relied on diverse labor forces, including Nubians. While relations were often cooperative, tensions existed, especially when resources were scarce."
        }
    },
    "punt_success": {
        title: "Treasures of the Red Sea",
        description: "Your diplomatic skill brings exotic wealth to Egypt. Pharaoh Hatshepsut immortalizes your success on her temple walls at Deir el-Bahri.",
        historicalContext: {
            title: "Historical Context: Expedition to Punt",
            text: "Hatshepsut’s expedition to Punt is one of Egypt’s most famous foreign ventures. Reliefs depict gifts like myrrh trees, incense, gold, and exotic animals. The relationship between Egypt and Punt was usually peaceful and trade-based."
        }
    },
    "failed_expedition": {
        title: "Empty Ships, Heavy Consequences",
        description: "Your aggression collapses negotiations. Egypt loses valuable trade resources, and you return in disgrace.",
        historicalContext: {
            title: "Historical Context: Diplomacy and Trade",
            text: "Egyptian expeditions depended on diplomacy and ritualized gift-giving. Attempts to force tribute from Punt were rare and likely to backfire, as Punt was a respected trade partner."
        }
    },
    "modest_success": {
        title: "Gifts for the Gods",
        description: "Your botanical discoveries enhance temple rituals but fail to solve Egypt’s resource crisis. A modest contribution—but valued nonetheless.",
        historicalContext: {
            title: "Historical Context: Myrrh and Incense",
            text: "Myrrh, incense, and aromatic plants were essential in Egyptian religious ceremonies. Hatshepsut famously brought living myrrh trees from Punt to plant in temple gardens."
        }
    },
    "spiritual_success_costly": {
        title: "The Gods Are Pleased, the People Are Hungry",
        description: "Your lavish offerings impress the priesthood but worsen famine. You are remembered as pious—but not wise.",
        historicalContext: {
            title: "Historical Context: Temple Offerings",
            text: "Temples required large offerings of grain, incense, and animals. In times of scarcity, excessive offerings could strain Egypt’s food reserves, causing public resentment."
        }
    },
    "practical_success": {
        title: "Wisdom Over Ritual",
        description: "You maintain food supplies and prevent starvation. Though some priests grumble, the Pharaoh praises your foresight.",
        historicalContext: {
            title: "Historical Context: Famine Management",
            text: "Egyptian officials often had to balance religious obligations with practical necessities. Preserving grain was crucial during low Nile years, and successful officials were praised for protecting the people."
        }
    },
    "ritual_success": {
        title: "Blessed by Hapi",
        description: "Your rituals are credited for improving the Nile flood. Whether divine favor or luck, your name is remembered with respect.",
        historicalContext: {
            title: "Historical Context: Worship of Hapi",
            text: "Hapi, god of the Nile, was central to Egyptian life. Rituals and offerings to Hapi were believed to influence the river’s flooding, which determined Egypt’s agricultural success."
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
    gameState.dynasty = "New Kingdom";
    gameState.status = "Young Official";
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