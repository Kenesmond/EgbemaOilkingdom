
const communities = [
        {
            name: "Mmahu",
            history: "Mmahu is one of the oldest communities in Egbema Kingdom, established over 300 years ago by migrant fishermen from the Ijaw heartland. The community has preserved its ancestral traditions and played a significant role in the early palm oil trade.",
            location: "Central Egbema, along the river banks",
            population: "Approximately 8,500 residents",
            traditions: "Annual Mmahu Fishing Festival, Masquerade Dance, New Yam Festival",
            landmarks: "Ancient Mmahu Shrine, Community Square, Mmahu River Port",
            ruler: "HRH name pending",
            rulerTitle: "Eze Mma I of Mmahu",
            culture: "The Mmahu people are known for their elaborate masquerade festivals and traditional fishing practices. The community maintains a strong connection to water spirits and celebrates the annual 'Owu' water festival.",
            festivals: ["Mmahu Fishing Festival (March)", "New Yam Festival (August)", "Masquerade Festival (December)"],
            notable: "Home to the oldest known shrine in Egbema Kingdom"
        },
        {
            name: "Abacheke",
            history: "Abacheke was founded in the early 18th century by hunters from the Abacheke clan. The community grew around a central market that became a trading hub for surrounding villages. During the colonial era, Abacheke was known for its resistance to external domination.",
            location: "Northern Egbema, near the forest reserve",
            population: "Approximately 6,200 residents",
            traditions: "Hunting Festival, Abacheke Day, Traditional Wrestling",
            landmarks: "Central Market Square, Hunting Shrine, Community Hall",
            ruler: "HRH Chief Sally Ikeji",
            rulerTitle: "Eze Abacheke",
            culture: "The community prides itself on its hunting heritage. Young men are trained in traditional hunting techniques and the use of herbal medicines. The 'Ikeji' festival celebrates the hunting spirit.",
            festivals: ["Ikeji Hunting Festival (April)", "Abacheke Day (October)"],
            notable: "Known for traditional hunting practices and herbal medicine"
        },
        {
            name: "Obiakpu",
            history: "Obiakpu emerged as a settlement for blacksmiths and craftsmen who migrated from the Benin Kingdom. The community became renowned for its metalwork and weapons production, supplying tools to neighboring communities.",
            location: "Eastern Egbema, on elevated terrain",
            population: "Approximately 5,800 residents",
            traditions: "Blacksmith Festival, Craft Exhibition, New Yam Festival",
            landmarks: "Ancient Blacksmith Workshop, Craft Village",
            ruler: "HRH Eze Benjamin Nwosu",
            rulerTitle: "Eze Obiakpu Nkaralegwu",
            culture: "Blacksmithing is the defining culture of Obiakpu. The community maintains traditional forges where ceremonial items and tools are still made using ancient methods.",
            festivals: ["Blacksmith Festival (May)", "Craft Week (November)"],
            notable: "Center of traditional blacksmithing and metalwork"
        },
        {
            name: "Obeakpu",
            history: "Obeakpu was established by farmers seeking fertile lands for agriculture. The community developed sophisticated farming techniques and became the breadbasket of Egbema Kingdom.",
            location: "Western Egbema, fertile plains",
            population: "Approximately 7,100 residents",
            traditions: "Harvest Festival, Agricultural Show, Planting Ceremony",
            landmarks: "Community Farmlands, Chief's Palace, Obeakpu Stream",
            ruler: " Chief Chamberlyn Uzu",
            rulerTitle: "Eze of Obeakpu",
            culture: "Agriculture is central to Obeakpu's identity. The community celebrates the planting season with rituals and offers first fruits to the ancestors.",
            festivals: ["First Fruit Festival (June)", "Harvest Thanksgiving (October)"],
            notable: "Major agricultural producer in the kingdom"
        },
        {
            name: "Etekwuru",
            history: "Etekwuru was founded by traders and merchants who established a major trading post along the river. The community became prosperous through trade with European merchants during the pre-colonial era.",
            location: "Riverside, Southern Egbema",
            population: "Approximately 9,000 residents",
            traditions: "Trade Festival, Boat Regatta, Market Day Celebrations",
            landmarks: "Etekwuru River Port, Old Trading Post, Merchants Square",
            ruler: "HRH Eze Okereke Barry Kenneth",
            rulerTitle: "Eze Etekwuru I",
            culture: "Etekwuru's culture revolves around commerce and river life. The annual boat regatta showcases the community's connection to water transportation.",
            festivals: ["Etekwuru Trade Fair (February)", "Boat Regatta (August)"],
            notable: "Historical trading center with European merchants"
        },
        {
            name: "Ekugba",
            history: "Ekugba began as a settlement for palm wine tappers and distillers. The community became famous for its palm wine and local gin production, with recipes passed down through generations.",
            location: "Central Highlands, Egbema",
            population: "Approximately 4,500 residents",
            traditions: "Palm Wine Festival, Tapping Competition",
            landmarks: "Palm Grove, Distillation Village, Community Center",
            ruler: " Chief Dominic Emerenini (Regend)",
            rulerTitle: "Eze of Ekugba",
            culture: "Palm wine tapping is both an economic activity and cultural practice in Ekugba. Traditional tapping techniques are taught from father to son.",
            festivals: ["Palm Wine Festival (July)", "Tapping Competition (July)"],
            notable: "Famous for traditional palm wine production"
        },
        {
            name: "Umudike",
            history: "Umudike was established by warriors and defenders of the kingdom. The community provided military protection for Egbema and trained young men in traditional warfare.",
            location: "Eastern Border, Egbema",
            population: "Approximately 5,200 residents",
            traditions: "Warrior Festival, Martial Arts Display, Unity Day",
            landmarks: "Warriors Shrine, Training Grounds, Unity Hall",
            ruler: " Chief Darlington Nwanro",
            rulerTitle: "Eze Umudike",
            culture: "Martial traditions remain strong in Umudike. The community hosts annual displays of traditional combat skills and warrior dances.",
            festivals: ["Warrior Festival (September)", "Unity Day (January)"],
            notable: "Traditional warrior training center"
        },
        {
            name: "Ofuruola",
            history: "Ofuruola was founded by healers and medicine men who established a sanctuary for traditional medicine. The community became renowned for its herbal remedies and spiritual healing.",
            location: "Forest Zone, Western Egbema",
            population: "Approximately 3,800 residents",
            traditions: "Healing Festival, Herbal Exhibition, Spiritual Retreat",
            landmarks: "Sacred Forest, Healing Shrine, Herbal Garden",
            ruler: " Chief Marcel Mazi",
            rulerTitle: "Eze Ofuruola",
            culture: "Traditional medicine and spiritual healing are central to Ofuruola's identity. The community preserves ancient knowledge of medicinal plants.",
            festivals: ["Healing Festival (May)", "Herbal Fair (November)"],
            notable: "Center of traditional medicine and healing"
        },
        {
            name: "Opuoma",
            history: "Opuoma was established by weavers and textile artists. The community became famous for its traditional cloth weaving and dyeing techniques.",
            location: "Central Egbema, near water source",
            population: "Approximately 6,500 residents",
            traditions: "Textile Festival, Weaving Competition, Dyeing Exhibition",
            landmarks: "Weaving Village, Dyeing Pits, Textile Market",
            ruler: "HRH Chief Wilfred Uwakwe",
            rulerTitle: "Eze Opuoma",
            culture: "Traditional weaving and textile arts flourish in Opuoma. The community's distinctive patterns are sought after throughout the region.",
            festivals: ["Textile Festival (June)", "Weavers Day (December)"],
            notable: "Renowned for traditional weaving and dyeing"
        },
        {
            name: "Obokofia",
            history: "Obokofia was founded by potters and clay workers who discovered rich clay deposits in the area. The community developed distinctive pottery styles still practiced today.",
            location: "Valley Area, Eastern Egbema",
            population: "Approximately 4,200 residents",
            traditions: "Pottery Festival, Clay Exhibition, Potters Competition",
            landmarks: "Pottery Village, Clay Mines, Potters Square",
            ruler: "name pending",
            rulerTitle: "Eze Obokofia",
            culture: "Pottery is the lifeblood of Obokofia. Traditional kilns and hand-building techniques have been preserved for centuries.",
            festivals: ["Pottery Festival (April)", "Clay Week (September)"],
            notable: "Center of traditional pottery and ceramics"
        },
        {
            name: "Umuorji",
            history: "Umuorji was established by palm oil processors. The community became the primary producer of palm oil for the kingdom and developed advanced processing techniques.",
            location: "Palm Belt, Southern Egbema",
            population: "Approximately 7,800 residents",
            traditions: "Palm Oil Festival, Processing Competition, Harvest Celebration",
            landmarks: "Palm Plantations, Processing Village, Oil Market",
            ruler: " Chief Julius Ekwem",
            rulerTitle: "Eze Umuorji",
            culture: "Palm oil production defines Umuorji's identity. Traditional processing methods are preserved alongside modern techniques.",
            festivals: ["Palm Oil Festival (March)", "Harvest Celebration (September)"],
            notable: "Major palm oil producing community"
        },
        {
            name: "Mgbara",
            history: "Mgbara was founded by fishermen along the river. The community developed sophisticated fishing techniques and became known for its smoked fish trade.",
            location: "Riverine Area, Northern Egbema",
            population: "Approximately 5,500 residents",
            traditions: "Fishing Festival, Boat Racing, Fish Smoking Competition",
            landmarks: "Fishing Port, Smoking Village, River Market",
            ruler: " Chief Dr. Hillary Onyia",
            rulerTitle: "Eze Mgbara",
            culture: "Fishing and fish processing are central to Mgbara's economy and culture. Traditional smoking techniques produce distinctive flavors.",
            festivals: ["Fishing Festival (February)", "Boat Race (August)"],
            notable: "Famous for smoked fish production"
        },
        {
            name: "Mgbede",
            history: "Mgbede was established by salt makers who harvested and processed salt from local brine springs. The community supplied salt throughout the kingdom.",
            location: "Salt Spring Area, Western Egbema",
            population: "Approximately 3,500 residents",
            traditions: "Salt Festival, Brine Ceremony, Salt Making Display",
            landmarks: "Salt Springs, Processing Village, Salt Market",
            ruler: "name pending",
            rulerTitle: "Eze Mgbede",
            culture: "Traditional salt making from brine springs is a unique cultural practice preserved in Mgbede.",
            festivals: ["Salt Festival (June)", "Brine Ceremony (June)"],
            notable: "Traditional salt making community"
        },
        {
            name: "Okwuzi",
            history: "Okwuzi was founded by canoe makers and woodworkers. The community supplied canoes and wooden implements throughout the kingdom.",
            location: "Forest Zone, Eastern Egbema",
            population: "Approximately 4,800 residents",
            traditions: "Canoe Festival, Woodcarving Exhibition, Boat Launching",
            landmarks: "Canoe Yard, Woodcarving Village, Forest Reserve",
            ruler: "name pending",
            rulerTitle: "Eze Okwuzi",
            culture: "Canoe making and woodcarving are the defining crafts of Okwuzi. Master carvers train apprentices in traditional techniques.",
            festivals: ["Canoe Festival (May)", "Woodcarving Fair (October)"],
            notable: "Center of traditional canoe making"
        },
        {
            name: "Aggah",
            history: "Aggah was established by musicians and dancers. The community preserved traditional music and dance forms and provided entertainment for royal ceremonies.",
            location: "Central Egbema",
            population: "Approximately 6,800 residents",
            traditions: "Music Festival, Dance Competition, Drumming Exhibition",
            landmarks: "Cultural Center, Dance Ground, Music School",
            ruler: "name pending",
            rulerTitle: "Onye Aggah",
            culture: "Music and dance are the heart of Aggah's identity. Traditional instruments and dance forms are taught to new generations.",
            festivals: ["Music Festival (December)", "Dance Competition (August)"],
            notable: "Cultural center for traditional music and dance"
        },
        {
            name: "Egbema Central",
            history: "Egbema Central serves as the administrative and ceremonial heart of the kingdom. It was established as a neutral ground where representatives from all communities could gather for important decisions.",
            location: "Central District, Egbema Kingdom",
            population: "Approximately 10,000 residents",
            traditions: "Kingdom Day, Unity Festival, Council Meetings",
            landmarks: "King's Palace, Central Market, Unity Square, Council Hall",
            ruler: "HRM Nze Obi (Paramount Ruler)",
            rulerTitle: "Nze Obi of Egbema Kingdom",
            culture: "Egbema Central embodies the unity of all communities. The annual Kingdom Day celebration brings together representatives from all 16 communities.",
            festivals: ["Kingdom Day (January)", "Unity Festival (October)"],
            notable: "Administrative capital of Egbema Kingdom"
        }
    ];

    // Get the name from URL parameters if available
    const urlParams = new URLSearchParams(window.location.search);
    const communityName = urlParams.get('name');

    // Function to create community cards
    function displayCommunities(communitiesToShow) {
        const container = document.getElementById('communitiesContainer');
        container.innerHTML = '';
        
        communitiesToShow.forEach((community, index) => {
            const card = document.createElement('div');
            card.className = 'col-lg-3 col-md-4 col-sm-6';
            card.innerHTML = `
                <div class="community-card" onclick="showCommunityDetails(${index})">
                    <div class="community-header">
                        <i class="icon ion-ios-people"></i>
                        <h3>${community.name}</h3>
                    </div>
                    <div class="community-body">
                        <div class="community-info">
                            <p><strong>Traditional Ruler:</strong></p>
                            <p><i class="icon ion-ios-person"></i> ${community.ruler}</p>
                            <p><small>${community.rulerTitle}</small></p>
                        </div>
                        <div class="ruler-badge">
                            <i class="icon ion-ios-calendar"></i>
                            <small>Click for full history & details</small>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Function to show community details in modal
    window.showCommunityDetails = function(index) {
        const community = communities[index];
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        
        modalTitle.textContent = community.name + ' Community';
        
        modalBody.innerHTML = `
            <div class="community-detail-section">
                <h5><i class="icon ion-ios-clock detail-icon"></i>History</h5>
                <p>${community.history}</p>
            </div>
            
            <div class="community-detail-section">
                <h5><i class="icon ion-ios-location detail-icon"></i>Location</h5>
                <p>${community.location}</p>
            </div>
            
            <div class="community-detail-section">
                <h5><i class="icon ion-ios-people detail-icon"></i>Population</h5>
                <p>${community.population}</p>
            </div>
            
            <div class="community-detail-section">
                <h5><i class="icon ion-ios-crown detail-icon"></i>Traditional Ruler</h5>
                <p><strong>${community.ruler}</strong> (${community.rulerTitle})</p>
            </div>
            
            <div class="community-detail-section">
                <h5><i class="icon ion-ios-heart detail-icon"></i>Culture & Traditions</h5>
                <p>${community.culture}</p>
                <div class="mt-2">
                    ${community.festivals.map(f => `<span class="festival-tag"><i class="icon ion-ios-calendar"></i> ${f}</span>`).join(' ')}
                </div>
            </div>
            
            <div class="community-detail-section">
                <h5><i class="icon ion-ios-flag detail-icon"></i>Notable Landmarks</h5>
                <p>${community.landmarks}</p>
            </div>
            
            <div class="community-detail-section">
                <h5><i class="icon ion-ios-star detail-icon"></i>Notable Feature</h5>
                <p>${community.notable}</p>
            </div>
            
            <div class="community-detail-section">
                <h5><i class="icon ion-ios-musical-notes detail-icon"></i>Annual Festivals</h5>
                <p>${community.traditions}</p>
            </div>
        `;
        
        const modal = new bootstrap.Modal(document.getElementById('communityModal'));
        modal.show();
    }

    // Search functionality
    document.getElementById('searchCommunity').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = communities.filter(community => 
            community.name.toLowerCase().includes(searchTerm) ||
            community.ruler.toLowerCase().includes(searchTerm) ||
            community.culture.toLowerCase().includes(searchTerm)
        );
        displayCommunities(filtered);
    });

    // Initial display
    displayCommunities(communities);

    // If community name was passed in URL, show that community
    if (communityName) {
        const index = communities.findIndex(c => 
            c.name.toLowerCase() === communityName.toLowerCase()
        );
        if (index !== -1) {
            setTimeout(() => showCommunityDetails(index), 500);
        }
    }