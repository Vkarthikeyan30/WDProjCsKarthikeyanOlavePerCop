// ==================== GAME DATA FOR ALL CIVILIZATIONS ====================
const civData = {
    china: {
        name: "China",
        gameState: {
            currentScene: "start",
            choicesMade: 0,
            dynasty: "Han",
            status: "Scholar",
            gameEnded: false
        },
        gameScenarios: {
            "start": {
                title: "The Emperor's Summons",
                description: "You are a scholar in the Han Dynasty court. The Emperor has summoned you for an important assignment. As you enter the throne room, you notice tension in the air. The Emperor explains that northern barbarians (Xiongnu) are threatening the Silk Road trade routes. He gives you a choice...",
                options: [
                    { text: "Propose a military campaign to defeat the Xiongnu", nextScene: "military_campaign", statusChange: "Military Advisor" },
                    { text: "Suggest diplomatic marriage alliance (heqin policy)", nextScene: "diplomatic_alliance", statusChange: "Diplomat" },
                    { text: "Advocate for building fortifications along the border", nextScene: "fortifications", statusChange: "Architect Engineer" }
                ]
            },
            "military_campaign": {
                title: "The Military Campaign",
                description: "The Emperor approves your plan for a military campaign against the Xiongnu. General Wei Qing is put in charge. After months of preparation, the army heads north. During the campaign, you face a critical decision...",
                options: [
                    { text: "Attack the Xiongnu head-on with full force", nextScene: "head_on_attack", statusChange: "Field Strategist" },
                    { text: "Use a flanking strategy to surround the enemy", nextScene: "flanking_strategy", statusChange: "Tactical Commander" },
                    { text: "Bribe Xiongnu tribes to turn against each other", nextScene: "divide_and_conquer", statusChange: "Spymaster" }
                ]
            },
            "diplomatic_alliance": {
                title: "Diplomatic Mission",
                description: "You are sent as an envoy to the Xiongnu with a princess for marriage alliance. The Shanyu (Xiongnu leader) receives you but seems skeptical. During negotiations, an incident occurs...",
                options: [
                    { text: "Offer additional gifts and trade privileges", nextScene: "generous_gifts", statusChange: "Chief Negotiator" },
                    { text: "Threaten with Han military might", nextScene: "threat_response", statusChange: "Hardline Diplomat" },
                    { text: "Propose cultural exchange and education programs", nextScene: "cultural_exchange", statusChange: "Cultural Ambassador" }
                ]
            },
            "fortifications": {
                title: "Building the Great Wall",
                description: "You are put in charge of extending fortifications along the northern border. Thousands of conscripted workers are under your command. A crisis emerges when...",
                options: [
                    { text: "Workers rebel due to harsh conditions", nextScene: "worker_rebellion", statusChange: "Construction Overseer" },
                    { text: "Xiongnu raids threaten the construction sites", nextScene: "raid_defense", statusChange: "Border Commander" },
                    { text: "Imperial inspectors accuse you of corruption", nextScene: "corruption_accusation", statusChange: "Suspected Official" }
                ]
            },
            "head_on_attack": { title: "Decisive Battle", description: "Your direct attack leads to a massive battle at Mobei. The Han army suffers heavy casualties but achieves a strategic victory. However, the cost is enormous...", ending: "tactical_victory", endingType: "mixed" },
            "flanking_strategy": { title: "Brilliant Maneuver", description: "Your flanking strategy succeeds brilliantly. The Xiongnu are caught off guard and suffer a major defeat. The Han army captures thousands of horses and prisoners. You are celebrated as a hero.", ending: "great_victory", endingType: "good" },
            "divide_and_conquer": { title: "Internal Strife", description: "Your bribery scheme works initially, causing conflict among Xiongnu tribes. However, the new united Xiongnu leadership under a charismatic leader emerges stronger and more hostile than before.", ending: "backfire", endingType: "bad" },
            "generous_gifts": { title: "Successful Alliance", description: "Your generous gifts impress the Shanyu. The marriage alliance proceeds, bringing 20 years of peace along the northern border. Trade flourishes on the Silk Road.", ending: "peaceful_alliance", endingType: "good" },
            "threat_response": { title: "Diplomatic Disaster", description: "Your threats anger the Shanyu. He rejects the alliance and increases raids along the border. You return in disgrace, and the Emperor orders military action.", ending: "failed_diplomacy", endingType: "bad" },
            "cultural_exchange": { title: "Cultural Bridge", description: "The cultural exchange program is accepted. Xiongnu nobles send their sons to study in Chang'an. While not eliminating conflict entirely, it reduces hostilities significantly.", ending: "cultural_success", endingType: "mixed" },
            "worker_rebellion": { title: "Rebellion Suppressed", description: "You suppress the rebellion harshly, executing the leaders. The wall construction continues but your reputation suffers. The completed wall section is strong but built on suffering.", ending: "harsh_success", endingType: "mixed" },
            "raid_defense": { title: "Heroic Defense", description: "You successfully defend the construction sites, defeating multiple Xiongnu raids. The completed wall section becomes a model for future constructions. You are promoted.", ending: "defensive_victory", endingType: "good" },
            "corruption_accusation": { title: "Court Intrigue", description: "The corruption accusations, though false, lead to your dismissal. Rival officials take over the project. The wall construction continues without you.", ending: "political_downfall", endingType: "bad" }
        },
        gameEndings: {
            "great_victory": {
                title: "Glory to the Han Empire!",
                description: "Your brilliant military strategy secures a decisive victory against the Xiongnu. The northern borders are secure for a generation. The Emperor rewards you with land, titles, and honor for your family. Your name is recorded in the imperial histories as a great commander.",
                historicalContext: { title: "Historical Context: Han-Xiongnu Wars", text: "The Han Dynasty (206 BCE-220 CE) indeed fought prolonged wars against the Xiongnu confederation. Emperor Wu (r. 141-87 BCE) launched major campaigns using strategies similar to these options. The most successful Han generals, like Wei Qing and Huo Qubing, used flanking maneuvers to achieve decisive victories around 119 BCE. These victories temporarily secured the Silk Road but drained Han resources." }
            },
            "tactical_victory": {
                title: "Costly Triumph",
                description: "You achieve victory but at tremendous cost. Thousands of Han soldiers perish, and the treasury is nearly emptied. While the Xiongnu are pushed back temporarily, resentment grows. You receive moderate rewards but face criticism for the heavy losses.",
                historicalContext: { title: "Historical Context: The Cost of War", text: "Han campaigns against the Xiongnu were indeed extremely costly in both lives and resources. The Mobei campaign of 119 BCE, while successful, nearly bankrupted the Han treasury and caused widespread suffering. Emperor Wu's aggressive expansionist policies eventually led to economic strain and peasant rebellions." }
            },
            "backfire": {
                title: "Unintended Consequences",
                description: "Your scheme to divide the Xiongnu backfires spectacularly. A new, more unified and hostile Xiongnu confederation emerges under strong leadership. Border raids increase, and you are blamed for the worsened situation. You are demoted to a minor provincial post.",
                historicalContext: { title: "Historical Context: Xiongnu Consolidation", text: "The Han Dynasty did attempt to use divide-and-conquer tactics against the Xiongnu, with mixed results. Sometimes these efforts backfired when particularly capable Xiongnu leaders like Modu Chanyu (r. 209-174 BCE) unified tribes more effectively. The heqin (marriage alliance) policy was often more successful than direct confrontation." }
            },
            "peaceful_alliance": {
                title: "Architect of Peace",
                description: "Your diplomatic skills secure two decades of peace along the northern border. The Silk Road flourishes, bringing wealth and exotic goods to Chang'an. You are celebrated as a master diplomat and appointed to the highest councils of state.",
                historicalContext: { title: "Historical Context: Heqin Policy", text: "The heqin ('harmonious kinship') policy of marriage alliances was actually used by early Han emperors toward the Xiongnu. While it brought temporary peace, it was expensive (requiring annual gifts) and seen as humiliating by some Han officials. Emperor Wu eventually abandoned this policy in favor of military campaigns." }
            },
            "failed_diplomacy": {
                title: "Disgrace and War",
                description: "Your failed diplomacy leads to renewed war. The Emperor, angry at the wasted opportunity, sends you to a remote post. Major military campaigns are launched, costing thousands of lives and draining the treasury.",
                historicalContext: { title: "Historical Context: Diplomatic Failures", text: "Han diplomats did face dangerous missions to the Xiongnu. The most famous, Su Wu, was captured and held for 19 years. Failed diplomacy often led to immediate military retaliation. The Xiongnu saw threats as weakness and typically responded with increased aggression." }
            },
            "cultural_success": {
                title: "Bridge Between Cultures",
                description: "Your cultural exchange program creates lasting connections between Han and Xiongnu elites. While border skirmishes continue, large-scale war is avoided for years. You establish a school for foreign nobles in Chang'an and write influential texts on border relations.",
                historicalContext: { title: "Historical Context: Cultural Exchange", text: "Some Xiongnu nobles did adopt Han customs and send their sons to be educated in Chang'an. This sinicization process was a long-term strategy that eventually contributed to the decline of Xiongnu power. However, cultural assimilation worked both ways - some Han border residents adopted Xiongnu customs too." }
            },
            "harsh_success": {
                title: "The Wall Stands, Your Reputation Falls",
                description: "The wall section is completed and proves effective against raids. However, stories of your harsh treatment of workers spread. Confucian scholars criticize your methods. While technically successful, your career advances no further.",
                historicalContext: { title: "Historical Context: Great Wall Construction", text: "The Great Wall was built through conscripted labor under harsh conditions. Historical records mention worker rebellions and high mortality rates. While effective militarily, the human cost was tremendous. Later dynasties continued and expanded the wall using similar methods." }
            },
            "defensive_victory": {
                title: "Defender of the Frontier",
                description: "Your successful defenses make you a hero along the border. The completed wall section becomes legendary for its strength. You are promoted to regional commander and continue to serve with distinction for decades.",
                historicalContext: { title: "Historical Context: Border Defense", text: "Han frontier commanders who successfully defended against Xiongnu raids were indeed celebrated and promoted. The wall was not a continuous barrier but a system of fortifications, watchtowers, and garrison towns. Successful commanders often came from border regions themselves." }
            },
            "political_downfall": {
                title: "Victim of Court Politics",
                description: "Despite your competence, political enemies undermine you with false accusations. You are removed from your post. The wall construction continues under others. You retire to your estate, writing bitter poetry about court intrigues.",
                historicalContext: { title: "Historical Context: Court Intrigue", text: "Han court politics were notoriously treacherous. Officials frequently fell victim to accusations, whether true or false. The historian Sima Qian himself was castrated for defending a disgraced general. Survival in the Han court required political skill as much as competence." }
            }
        }
    },
    egypt: {
        name: "Egypt",
        gameState: {
            currentScene: "start",
            choicesMade: 0,
            dynasty: "New Kingdom",
            status: "Young Official",
            gameEnded: false
        },
        gameScenarios: {
            "start": {
                title: "The Pharaoh’s Summons",
                description: "You are a young official serving in the court of Pharaoh Hatshepsut during the New Kingdom. As you enter the audience chamber, priests whisper, scribes rush around, and the Pharaoh looks troubled. The annual flooding of the Nile has been unusually low, threatening Egypt’s agriculture. The Pharaoh seeks your counsel...",
                options: [
                    { text: "Recommend constructing new irrigation canals", nextScene: "irrigation_project", statusChange: "Royal Engineer" },
                    { text: "Propose sending an expedition to Punt for resources", nextScene: "punt_expedition", statusChange: "Expedition Leader" },
                    { text: "Suggest increasing temple offerings to appease the gods", nextScene: "temple_offerings", statusChange: "High Priest’s Aide" }
                ]
            },
            "irrigation_project": {
                title: "The Irrigation Project",
                description: "The Pharaoh approves your ambitious plan. Thousands of workers are mobilized along the Nile. As the work begins, a major dilemma arises...",
                options: [
                    { text: "Divert a larger section of the Nile, risking damage to nearby villages", nextScene: "large_diversion", statusChange: "Master Engineer" },
                    { text: "Build smaller channels that take longer but avoid displacement", nextScene: "small_channels", statusChange: "Careful Planner" },
                    { text: "Recruit Nubian laborers to speed up construction", nextScene: "nubian_labor", statusChange: "Labor Overseer" }
                ]
            },
            "punt_expedition": {
                title: "Expedition to Punt",
                description: "You set sail down the Red Sea toward the fabled Land of Punt. After weeks of travel, storms, and sickness, your crew grows restless. A crisis emerges...",
                options: [
                    { text: "Trade generously with the local rulers of Punt", nextScene: "generous_trade", statusChange: "Chief Trader" },
                    { text: "Demand tribute using Egypt’s military power", nextScene: "military_pressure", statusChange: "Forceful Envoy" },
                    { text: "Focus on collecting rare plants and myrrh rather than large trade deals", nextScene: "rare_collection", statusChange: "Naturalist" }
                ]
            },
            "temple_offerings": {
                title: "Appeasing the Gods",
                description: "You oversee ceremonies in Karnak. Priests chant to Amun-Ra as crowds gather. During the preparations for a large festival, complications arise...",
                options: [
                    { text: "Use more grain for offerings despite Egypt’s shortage", nextScene: "lavish_offerings", statusChange: "Devoted Servant" },
                    { text: "Reduce the offerings to preserve food reserves", nextScene: "reduced_offerings", statusChange: "Practical Priest" },
                    { text: "Redirect offerings toward rituals honoring Hapi, god of the Nile", nextScene: "hapi_rituals", statusChange: "Ritual Specialist" }
                ]
            },
            "large_diversion": { title: "Great Canal Completed", description: "Your bold diversion succeeds in channeling more water. However, several villages suffer flooding and displacement. While crops flourish, resentment grows among the locals.", ending: "controversial_success", endingType: "mixed" },
            "small_channels": { title: "Steady Progress", description: "Your careful construction avoids harming any village. The smaller channels take longer, but the farming season improves steadily. You are praised for your wisdom and restraint.", ending: "engineering_success", endingType: "good" },
            "nubian_labor": { title: "Unrest Among Workers", description: "Recruiting Nubians speeds progress, but tensions arise between Egyptian and Nubian laborers. A violent clash erupts, delaying the project and staining your reputation.", ending: "labor_conflict", endingType: "bad" },
            "generous_trade": { title: "Treasures of Punt", description: "Your generosity impresses the rulers of Punt. They offer gold, myrrh, and exotic animals. The Pharaoh celebrates you, and Egypt enjoys renewed prosperity.", ending: "punt_success", endingType: "good" },
            "military_pressure": { title: "Diplomatic Breakdown", description: "Your threats anger the rulers of Punt. They refuse cooperation and your ships return home nearly empty. You face criticism for damaging Egypt’s long-standing relationship with Punt.", ending: "failed_expedition", endingType: "bad" },
            "rare_collection": { title: "Botanical Wonders", description: "You gather rare plants and myrrh crucial for temple rituals. While not a grand success, your findings support religious ceremonies and please the priests.", ending: "modest_success", endingType: "mixed" },
            "lavish_offerings": { title: "Praise of the Gods", description: "Your lavish offerings impress the priesthood. However, using vital grain during a low Nile year worsens famine conditions. Many blame you for shortages.", ending: "spiritual_success_costly", endingType: "mixed" },
            "reduced_offerings": { title: "Balanced Decision", description: "Reducing offerings preserves Egypt’s food supply. Some priests accuse you of disrespect, but most people praise your practical thinking.", ending: "practical_success", endingType: "good" },
            "hapi_rituals": { title: "Blessing of the Nile", description: "Your specialized rituals to Hapi are well-received. When the Nile floods slightly better the next year, many attribute it to your actions—whether rightly or not.", ending: "ritual_success", endingType: "mixed" }
        },
        gameEndings: {
            "engineering_success": {
                title: "Water for Egypt!",
                description: "Your irrigation channels restore farmland, ensuring food for thousands. Pharaoh rewards you with land and a golden collar, honoring your wisdom.",
                historicalContext: { title: "Historical Context: Irrigation and the Nile", text: "Ancient Egyptian agriculture relied heavily on the annual flooding of the Nile. When floods were low, Egyptians built canals, basins, and shaduf systems to distribute water. Skilled engineers played crucial roles in maintaining Egypt’s food supply." }
            },
            "controversial_success": {
                title: "A Price Paid in Water and Lives",
                description: "Although your project restores farmland, displaced families resent your methods. You receive mixed praise—admired for success, criticized for cruelty.",
                historicalContext: { title: "Historical Context: Canal Construction", text: "Large irrigation projects sometimes displaced villages or required forced labor. Egyptian officials were often judged not only by results but by how justly they treated workers and locals." }
            },
            "labor_conflict": {
                title: "Conflict on the Nile",
                description: "Your decision sparks worker rivalries. Productivity slows, and you are reassigned to a minor administrative post, far from the Pharaoh’s trust.",
                historicalContext: { title: "Historical Context: Nubian Laborers", text: "Egypt relied on diverse labor forces, including Nubians. While relations were often cooperative, tensions existed, especially when resources were scarce." }
            },
            "punt_success": {
                title: "Treasures of the Red Sea",
                description: "Your diplomatic skill brings exotic wealth to Egypt. Pharaoh Hatshepsut immortalizes your success on her temple walls at Deir el-Bahri.",
                historicalContext: { title: "Historical Context: Expedition to Punt", text: "Hatshepsut’s expedition to Punt is one of Egypt’s most famous foreign ventures. Reliefs depict gifts like myrrh trees, incense, gold, and exotic animals. The relationship between Egypt and Punt was usually peaceful and trade-based." }
            },
            "failed_expedition": {
                title: "Empty Ships, Heavy Consequences",
                description: "Your aggression collapses negotiations. Egypt loses valuable trade resources, and you return in disgrace.",
                historicalContext: { title: "Historical Context: Diplomacy and Trade", text: "Egyptian expeditions depended on diplomacy and ritualized gift-giving. Attempts to force tribute from Punt were rare and likely to backfire, as Punt was a respected trade partner." }
            },
            "modest_success": {
                title: "Gifts for the Gods",
                description: "Your botanical discoveries enhance temple rituals but fail to solve Egypt’s resource crisis. A modest contribution—but valued nonetheless.",
                historicalContext: { title: "Historical Context: Myrrh and Incense", text: "Myrrh, incense, and aromatic plants were essential in Egyptian religious ceremonies. Hatshepsut famously brought living myrrh trees from Punt to plant in temple gardens." }
            },
            "spiritual_success_costly": {
                title: "The Gods Are Pleased, the People Are Hungry",
                description: "Your lavish offerings impress the priesthood but worsen famine. You are remembered as pious—but not wise.",
                historicalContext: { title: "Historical Context: Temple Offerings", text: "Temples required large offerings of grain, incense, and animals. In times of scarcity, excessive offerings could strain Egypt’s food reserves, causing public resentment." }
            },
            "practical_success": {
                title: "Wisdom Over Ritual",
                description: "You maintain food supplies and prevent starvation. Though some priests grumble, the Pharaoh praises your foresight.",
                historicalContext: { title: "Historical Context: Famine Management", text: "Egyptian officials often had to balance religious obligations with practical necessities. Preserving grain was crucial during low Nile years, and successful officials were praised for protecting the people." }
            },
            "ritual_success": {
                title: "Blessed by Hapi",
                description: "Your rituals are credited for improving the Nile flood. Whether divine favor or luck, your name is remembered with respect.",
                historicalContext: { title: "Historical Context: Worship of Hapi", text: "Hapi, god of the Nile, was central to Egyptian life. Rituals and offerings to Hapi were believed to influence the river’s flooding, which determined Egypt’s agricultural success." }
            }
        }
    },
    mesopotamia: {
        name: "Mesopotamia",
        gameState: {
            currentScene: "start",
            choicesMade: 0,
            dynasty: "Akkadian Empire",
            status: "Rising Official",
            gameEnded: false
        },
        gameScenarios: {
            "start": {
                title: "The King's Summons",
                description: "You are a rising official in the great city of Babylon. King Hammurabi has summoned you to the palace. The empire is growing, but tensions rise between rival cities, irrigation canals, and foreign threats along the Euphrates. The king seeks your counsel...",
                options: [
                    { text: "Advise launching a military campaign against Larsa", nextScene: "military_campaign", statusChange: "Military Advisor" },
                    { text: "Propose forming alliances through marriage and trade treaties", nextScene: "diplomatic_alliance", statusChange: "Diplomat" },
                    { text: "Recommend improving the irrigation canals to stabilize food supply", nextScene: "canal_project", statusChange: "Chief Engineer" }
                ]
            },
            "military_campaign": {
                title: "War Against Larsa",
                description: "Hammurabi approves your war plan. The army marches south under General Zikiru. As you reach the outskirts of Larsa, the enemy forces prepare for battle. You must decide on a critical strategy...",
                options: [
                    { text: "Launch a direct assault on Larsa's fortified walls", nextScene: "head_on_attack", statusChange: "Field Strategist" },
                    { text: "Cut off Larsa's water supply by diverting the canal", nextScene: "canal_siege", statusChange: "Tactical Commander" },
                    { text: "Bribe Larsa's mercenaries to abandon their posts", nextScene: "divide_and_conquer", statusChange: "Spymaster" }
                ]
            },
            "diplomatic_alliance": {
                title: "Alliance Negotiations",
                description: "You are sent to negotiate with the city-state Mari along the Euphrates. Its ruler, Zimri-Lim, receives you warmly, but tensions rise during talks when rumors of treachery emerge...",
                options: [
                    { text: "Offer generous trade rights and gifts", nextScene: "generous_gifts", statusChange: "Chief Negotiator" },
                    { text: "Threaten Mari with Babylon's expanding army", nextScene: "threat_response", statusChange: "Hardline Diplomat" },
                    { text: "Propose shared irrigation projects to benefit both cities", nextScene: "shared_irrigation", statusChange: "Cultural Ambassador" }
                ]
            },
            "canal_project": {
                title: "Irrigation Crisis",
                description: "You oversee repairs of the massive canal network linking the Tigris and Euphrates. Thousands of laborers depend on your leadership. A crisis emerges when...",
                options: [
                    { text: "Workers revolt due to exhausting labor demands", nextScene: "worker_rebellion", statusChange: "Construction Overseer" },
                    { text: "A rival city sabotages the canal to weaken Babylon", nextScene: "sabotage_defense", statusChange: "Border Commander" },
                    { text: "Court officials accuse you of stealing canal funds", nextScene: "corruption_accusation", statusChange: "Suspected Official" }
                ]
            },
            "head_on_attack": { title: "Assault on Larsa", description: "Your direct attack leads to brutal fighting at Larsa’s gates. The city falls, but Babylon suffers heavy losses. Victory is achieved, but at a painful cost.", ending: "tactical_victory", endingType: "mixed" },
            "canal_siege": { title: "Victory Through Strategy", description: "You divert Larsa's water canal. Thirst forces the defenders to surrender. The capture is swift, losses are minimal, and your strategy wins you great honor.", ending: "great_victory", endingType: "good" },
            "divide_and_conquer": { title: "Chaos and Consequence", description: "Your bribery plan causes confusion among Larsa’s troops, but soon a strong new commander unites them. They become more hostile and unpredictable than before.", ending: "backfire", endingType: "bad" },
            "generous_gifts": { title: "Alliance Secured", description: "Your gifts impress Zimri-Lim, and Mari signs a long-term peace treaty with Babylon. Trade thrives along the Euphrates, bringing wealth to both cities.", ending: "peaceful_alliance", endingType: "good" },
            "threat_response": { title: "Diplomatic Breakdown", description: "Your threats anger Mari’s rulers. They break off talks and ally with Babylon’s enemies. War becomes unavoidable. You return home disgraced.", ending: "failed_diplomacy", endingType: "bad" },
            "shared_irrigation": { title: "Water for All", description: "The idea of shared canals is welcomed. Both cities cooperate in maintaining water routes, reducing border tensions and improving agriculture.", ending: "cultural_success", endingType: "mixed" },
            "worker_rebellion": { title: "Order Restored", description: "You crush the rebellion. The canal is completed, but your harsh rule earns you the hatred of many workers. The project succeeds, but your name is stained.", ending: "harsh_success", endingType: "mixed" },
            "sabotage_defense": { title: "Protector of the Waterways", description: "You catch the saboteurs and defend the canal system. Babylon praises your vigilance, and the restored canals strengthen the empire’s food supply.", ending: "defensive_victory", endingType: "good" },
            "corruption_accusation": { title: "Political Downfall", description: "False accusations overwhelm you. Despite your competence, rivals remove you from your position. Babylon continues the canal work without you.", ending: "political_downfall", endingType: "bad" }
        },
        gameEndings: {
            "great_victory": {
                title: "Triumph for Babylon",
                description: "Your canal-based siege strategy secures a swift victory over Larsa. Babylon expands its power with minimal losses. Hammurabi rewards you with land and high office.",
                historicalContext: { title: "Historical Context: Babylon vs. Larsa", text: "Hammurabi famously defeated rival cities like Larsa through strategic use of irrigation canals. Controlling water flow was a powerful military tool in Mesopotamia, where cities depended on river systems for survival." }
            },
            "tactical_victory": {
                title: "Victory at Great Cost",
                description: "Larsa falls, but the casualties are severe. Though you claim victory, critics argue the price was too high. Your reputation is respected but questioned.",
                historicalContext: { title: "Historical Context: Mesopotamian Warfare", text: "Siege warfare in Mesopotamia was brutal and costly. Cities had strong walls, and direct assaults often resulted in heavy losses. Many kings preferred indirect tactics, including controlling canals or forming alliances." }
            },
            "backfire": {
                title: "Unintended Chaos",
                description: "Your plan to bribe Larsa's troops backfires. A new leader unifies them more fiercely, escalating conflict. You are blamed for worsening tensions.",
                historicalContext: { title: "Historical Context: Shifting Alliances", text: "Rival Mesopotamian city-states often used bribery and internal manipulation, but such tactics sometimes strengthened enemies instead. Larsa and other cities frequently reorganized under new strong rulers." }
            },
            "peaceful_alliance": {
                title: "Blessings of Peace",
                description: "Your diplomacy forges a long period of peace and profitable trade. Goods flow freely along the Euphrates, and Babylon prospers.",
                historicalContext: { title: "Historical Context: Diplomacy in Mesopotamia", text: "Cities like Mari and Babylon maintained alliances through trade, marriages, and diplomatic gifts. Mari’s palace archives reveal extensive diplomatic correspondence between rulers." }
            },
            "failed_diplomacy": {
                title: "Disgrace and Conflict",
                description: "Your threats cause negotiations to collapse. Mari joins Babylon’s foes, and your failure contributes to spreading war.",
                historicalContext: { title: "Historical Context: Diplomatic Tensions", text: "Mesopotamian diplomacy was delicate; threats often backfired. Tablets from Mari describe how aggressive envoys could destabilize relations and provoke wars." }
            },
            "cultural_success": {
                title: "Shared Prosperity",
                description: "Your shared irrigation plan eases tensions and stabilizes agriculture. Cooperation improves both cities' livelihoods, though rivalry never fully disappears.",
                historicalContext: { title: "Historical Context: Irrigation Cooperation", text: "Irrigation was the lifeblood of Mesopotamia. Cities sometimes cooperated to maintain canals, though disputes over water could also spark wars. The Code of Hammurabi includes many laws about canal maintenance." }
            },
            "harsh_success": {
                title: "Canals Saved, Legacy Damaged",
                description: "The canal is repaired, and agriculture flourishes. Still, stories of your brutality spread. You succeed, but at a moral cost.",
                historicalContext: { title: "Historical Context: Labor in Mesopotamia", text: "Canal construction often relied on corvée labor—forced work demands on citizens. Rebellions were not uncommon, especially in times of drought or famine." }
            },
            "defensive_victory": {
                title: "Guardian of the Rivers",
                description: "You successfully protect the canals, restoring order and earning renown as a defender of Babylon’s prosperity.",
                historicalContext: { title: "Historical Context: Canal Sabotage", text: "Cities would sometimes sabotage rivals’ canals to destroy crops. Babylon’s kings strictly guarded irrigation systems, knowing they were crucial to survival." }
            },
            "political_downfall": {
                title: "Lost to Court Intrigue",
                description: "False accusations end your career. Though talented, you fall victim to Babylon’s political rivalries. You live quietly, writing complaints on clay tablets.",
                historicalContext: { title: "Historical Context: Court Politics", text: "Mesopotamian courts could be ruthless. Officials were often removed through accusations, sometimes based on omens or rivalries. Many texts describe political purges and power struggles." }
            }
        }
    }
};

// ==================== GLOBAL VARIABLES ====================
let currentCiv = null; // Will be set when user picks a civilization

// DOM Elements
const gameSection = document.getElementById('destinyGame');
const civGameTitle = document.getElementById('civGameTitle');
const gameIntro = document.getElementById('gameIntro');
const gameTitleEl = document.getElementById('gameTitle');
const gameDescriptionEl = document.getElementById('gameDescription');
const gameOptionsEl = document.getElementById('gameOptions');
const gameEndingEl = document.getElementById('gameEnding');
const endingTitleEl = document.getElementById('endingTitle');
const endingDescriptionEl = document.getElementById('endingDescription');
const historicalContextEl = document.getElementById('historicalContext');
const restartBtn = document.getElementById('restartBtn');
const currentCivDisplay = document.getElementById('currentCivDisplay');
const currentDynastyEl = document.getElementById('currentDynasty');
const currentStatusEl = document.getElementById('currentStatus');
const choiceCountEl = document.getElementById('choiceCount');

// ==================== HELPER FUNCTIONS ====================
function updateGameStats() {
    if (!currentCiv) return;
    const state = civData[currentCiv].gameState;
    currentCivDisplay.textContent = civData[currentCiv].name;
    currentDynastyEl.textContent = state.dynasty;
    currentStatusEl.textContent = state.status;
    choiceCountEl.textContent = state.choicesMade;
}

// Load a scene for the current civilization
function loadScene(sceneId) {
    if (!currentCiv) return;
    const civ = civData[currentCiv];
    const scene = civ.gameScenarios[sceneId];
    
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
    if (!currentCiv) return;
    const civ = civData[currentCiv];
    civ.gameState.choicesMade++;
    
    if (option.statusChange) {
        civ.gameState.status = option.statusChange;
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
    if (!currentCiv) return;
    const civ = civData[currentCiv];
    const ending = civ.gameEndings[endingId];
    
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
    civ.gameState.gameEnded = true;
}

// Initialize game for the selected civilization
function initGame(civKey) {
    currentCiv = civKey;
    const civ = civData[civKey];
    
    // Reset game state to default for this civ
    civ.gameState = {
        currentScene: "start",
        choicesMade: 0,
        dynasty: civ === civData.china ? "Han" : (civ === civData.egypt ? "New Kingdom" : "Akkadian Empire"),
        status: civ === civData.china ? "Scholar" : (civ === civData.egypt ? "Young Official" : "Rising Official"),
        gameEnded: false
    };
    
    updateGameStats();
    loadScene("start");
    
    // Show game section, hide ending
    gameSection.classList.add('visible');
    gameEndingEl.classList.add('hidden');
    gameOptionsEl.classList.remove('hidden');
    
    // Update header
    civGameTitle.textContent = `Your Journey: ${civ.name}`;
    gameIntro.textContent = `Experience life in ancient ${civ.name} through this interactive story.`;
}

// ==================== EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', function() {
    // Civilization picker
    const civCards = document.querySelectorAll('.civ-card');
    civCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected class from all cards
            civCards.forEach(c => c.classList.remove('selected'));
            // Add selected to clicked card
            this.classList.add('selected');
            
            const civKey = this.dataset.civ;
            initGame(civKey);
        });
    });
    
    // Restart button
    restartBtn.addEventListener('click', function() {
        if (currentCiv) {
            initGame(currentCiv);
        }
    });
    
    // Add animation to option selection (global click)
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
});