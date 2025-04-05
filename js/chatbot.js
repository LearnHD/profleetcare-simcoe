// Chatbot functionality for Pro Fleet Care Simcoe County Website
// Last updated with emoji support and improved formatting
// Version 1.1.0 - Enhanced with emojis and better response formatting
// Deployment: gh-pages branch

/*
IMPORTANT RULES FOR CHATBOT UPDATES:
1. ALL service-related Q&A pairs MUST be added to knowledgeBase.qa array ONLY
2. The personality array is ONLY for casual conversation (jokes, name, etc.)
3. DO NOT add service-related questions to the personality array
4. Weather, pricing, services, and all business-related Q&A go in the qa array
5. Always add new Q&A pairs in the appropriate category section within qa array
*/

// Debug flag
const DEBUG = true;

// Chatbot nickname and personality traits
    const botName = "Rusty";
const botTraits = {
    catchphrase: "No rust, no fuss! ✨",
    hobby: "keeping vehicles shiny and rust-free",
    expertise: "rust prevention specialist"
};
    
    // Knowledge base for rustproofing information
    const knowledgeBase = {
        greetings: [
        `*Tips virtual hat* 👋 Hello there! I'm ${botName}, your friendly neighborhood rust prevention expert. ${botTraits.catchphrase} How can I help protect your vehicles today?`,
        `Hey! 🌟 I'm ${botName}, and rust prevention is my passion! As your local ${botTraits.expertise}, I'd love to help keep your vehicles in top shape. What can I tell you about our services?`,
        `*Polishes virtual badge* ✨ Greetings! ${botName} at your service - your dedicated rust-fighting companion. When it comes to ${botTraits.hobby}, I'm your go-to expert! What would you like to know?`
    ],
    
    // Personality responses for casual conversation
    personality: [
        {
            keywords: ["joke", "funny", "humor", "laugh"],
            answer: `Here's a rust-prevention joke for you: Why did the vehicle feel lonely? Because it was getting too rusty for any-body! 😄 *Winks* But seriously, let's make sure that doesn't happen to your vehicle. What would you like to know about our rust protection services?`
        },
        {
            keywords: ["love", "like", "enjoy", "favorite", "best part"],
            answer: `You know what I love most about my job? 💪 Seeing vehicles stay strong and rust-free! There's nothing more satisfying than knowing we're helping protect your valuable assets. ${botTraits.catchphrase}`
        },
        {
            keywords: ["name", "why rusty", "called rusty"],
            answer: `*Chuckles* 😄 I know, it's a bit ironic that a rust prevention expert is named Rusty! But think of it this way - I'm so dedicated to fighting rust that I took its name to show who's boss! Now, how can I help protect your vehicles?`
        },
        {
            keywords: ["weekend", "plans", "doing", "today"],
            answer: `*Adjusts virtual tie* As much as I'd love to chat about weekend plans, my favorite activity is ${botTraits.hobby}! Speaking of which, would you like to learn more about our rust protection services?`
        }
    ],
    
    // Main Q&A database - All service-related questions should go here
    qa: [
        // About the company and services
            {
                keywords: ["what", "service", "offer", "provide", "do you do"],
                answer: `Pro Fleet Care Simcoe County provides mobile rust control services. We come to your location to apply our unique two-step rustproofing process that protects vehicles and equipment from corrosion. Our service is convenient, effective, and helps extend the life of your valuable assets.`
            },
            {
                keywords: ["who", "owner", "franchise", "operate"],
                answer: `Pro Fleet Care Simcoe County is owned and operated by Renee and Jan. Having owned their own construction business, they understand the importance of quality workmanship and customer service. They're dedicated to serving customers throughout Simcoe County.`
            },
            {
                keywords: ["where", "location", "area", "serve", "coverage"],
                answer: `We proudly serve all of Simcoe County including Barrie, Orillia, Collingwood, Midland, Bradford, Innisfil, Alliston, Wasaga Beach, and surrounding areas. Our mobile service means we come to your location anywhere in the county.`
            },
            {
                keywords: ["experience", "history", "long", "years"],
                answer: `Pro Fleet Care has over 35 years of experience in the rust control industry. The company was founded in 1984 by Bob Lawrie and has grown into a franchise network across North America. The Simcoe County franchise brings this extensive experience and proven methods to our local community.`
            },
            
        // Process and Application
            {
                keywords: ["how", "process", "work", "application", "apply"],
                answer: `Our unique two-step process includes: 1) ROC 40 (a light oil) that penetrates seams and hard-to-reach areas, and 2) ROC 50 (a drip-less oil) that offers extra protection in high traffic areas like frame rails and wheel wells. This comprehensive approach ensures complete protection from undercarriage to roof line.`
            },
            {
            keywords: ["area", "protect", "coverage", "parts"],
                answer: `We protect all vulnerable areas including: undercarriage, fenders, doors and door posts, hood and trunk, roof line, door handles, mirrors, bumper rails, window trim, electrical wiring and components, engine compartment, and more. Our product penetrates hard-to-reach areas, defying gravity to creep upwards, sideways, and downward for complete coverage.`
            },
        
        // Weather-related questions consolidated here
        {
            keywords: [
                "rain", "raining", "wet", "rainy", "weather", "conditions",
                "work in rain", "during rain", "do you work in rain",
                "can you work in rain", "work when raining",
                "do this in rain", "do this in the rain",
                "do it in rain", "do it in the rain",
                "service in rain", "service in the rain",
                "operate in rain", "operate in the rain",
                "when raining", "if raining", "if it rains",
                "what about rain", "what if it rains"
            ],
            answer: `*Puts on virtual rain gear* ☔ Yes, we absolutely work in the rain! Here's what you need to know:

1. Weather Adaptability:
   - Our products work effectively in all weather conditions
   - We can work in rain, snow, or shine
   - Indoor service available when possible
   - Covered areas preferred but not required

2. Important Notes:
   - Vehicle should be relatively dry for optimal application
   - We may need to briefly dry specific areas
   - Service time might be slightly longer in wet conditions
   - We'll ensure quality isn't compromised

Need to schedule? We'll work with you to find the best conditions for your service! ${botTraits.catchphrase}`
        },
        {
            keywords: ["snow", "winter", "cold", "freezing", "work in snow", "snowy"],
            answer: `*Puts on virtual winter gear* ❄️ Absolutely! We work throughout the winter season. Here's what you should know:

1. Winter Service:
   - We operate year-round, including snowy conditions
   - Indoor service available when possible
   - Heated application equipment for cold weather
   - Products specially formulated for winter use

2. Winter Benefits:
   - Perfect timing for salt protection
   - Helps prevent winter corrosion
   - Creates barrier against snow and ice
   - Protects during harsh winter conditions

Want to prepare your vehicle for winter? Let's schedule your protection! ${botTraits.catchphrase}`
        },
        {
            keywords: ["storm", "thunder", "lightning", "severe weather"],
            answer: `*Checks virtual weather radar* ⛈️ During severe weather or storms:

1. Safety First:
   - We may reschedule for safety
   - Lightning = automatic pause
   - Customer and equipment safety priority
   - Flexible rebooking options

2. Alternative Options:
   - Indoor service when available
   - Reschedule to better conditions
   - No charge for weather delays
   - Customer convenience priority

Let's find a safe time for your service! ${botTraits.catchphrase}`
        },
        
        // Pricing and Scheduling
        {
            keywords: [
                "cost", "price", "quote", "estimate", "much", "pickup", "truck", "car", 
                "vehicle cost", "how much", "pricing", "rates", "fee", "charge", "dollars", 
                "expensive", "cheap", "this cost", "this price", "cost for this",
                "price for this", "how much is this", "how much is it", "what is the cost",
                "what is the price", "what's the cost", "what's the price", "cost of service",
                "price of service", "how much for", "cost for a", "price for a",
                "pickup truck", "pickup cost", "pickup price"
            ],
            answer: `*Adjusts virtual clipboard* 🔍 To provide an accurate quote, we need to personally inspect your vehicle or equipment. Here's why:

1. Assessment Process:
   - Each vehicle/equipment is unique
   - We evaluate specific rust prevention needs
   - Customize treatment plan accordingly
   - Ensure proper coverage for your situation

2. Contact Us for Assessment:
   📞 Phone:
   - Jan: 705-627-7941
   - Renee: 705-627-7521

   📧 Email: simcoecounty@profleetcare.com

3. What We'll Discuss:
   - Vehicle/equipment type and condition
   - Specific areas needing protection
   - Your maintenance goals
   - Treatment options and recommendations

Let's schedule an assessment to provide you with an accurate quote! ${botTraits.catchphrase}`
        },
        {
            keywords: ["appointment", "schedule", "book", "when"],
            answer: `*Pulls out virtual calendar* 📅 Booking an appointment is easy! Here's how:

1. Contact Options:
   - 📞 Call Jan: 705-627-7941
   - 📞 Call Renee: 705-627-7521
   - 💻 Use our website contact form

2. Flexible Scheduling:
   - 🌙 Evening appointments available
   - 🏢 Weekend service options
   - 🚗 On-site service at your location
   - ✨ No extra charge for after-hours

3. What to Expect:
   - ⏰ We work around YOUR schedule
   - 📍 We come to YOUR location
   - ⚡ Service time: 30-45 minutes for standard vehicles
   - 🚛 Larger vehicles/fleets: Custom scheduling available

Ready to book? Let me connect you with our team! ${botTraits.catchphrase}`
        },
        
        // Vehicle Types and Equipment
            {
                keywords: ["vehicle", "equipment", "what type", "kind of"],
            answer: `We service a wide range of vehicles and equipment including:
- Farm equipment (tractors, combines)
- Emergency vehicles (fire trucks, ambulances)
- Passenger transportation (buses, shuttles)
- Recreational vehicles (RVs, campers)
- Snow removal and construction equipment
- Beach equipment
- Personal vehicles and trucks
And much more! If it has metal components that need protection from rust, we can service it!`
        },
        
        // Contact and Hours
            {
                keywords: ["contact", "reach", "call", "phone", "email"],
            answer: `📞 You can reach us easily:
- Jan: 705-627-7941
- Renee: 705-627-7521
- Email: simcoecounty@profleetcare.com
- Website contact form

We're here to help with quotes, scheduling, or any questions you have! ${botTraits.catchphrase}`
            },
            {
                keywords: ["hours", "business", "open", "available"],
            answer: `🕒 Our service hours are flexible:
- Regular hours: Monday-Friday, 8:00 AM - 6:00 PM
- Evening appointments available
- Weekend service available
- No extra charge for after-hours
- Mobile service - we come to you!

Let's find a time that works best for you! ${botTraits.catchphrase}`
        },
        
        // Warranty and Quality
        {
            keywords: ["warranty", "guarantee", "promise", "protection period"],
            answer: `*Adjusts virtual safety glasses* Our rust control treatment is backed by Pro Fleet Care's commitment to quality, developed over 35+ years in the industry. The protection typically lasts for 12 months, which is why we recommend annual applications. Our unique two-step process provides comprehensive coverage from undercarriage to roof line. If you have any concerns about the application or effectiveness, we'll make it right - that's the Pro Fleet Care promise! For specific warranty details, please contact Jan at 705-627-7941 or Renee at 705-627-7521.`
        },
        
        // About rust repair and prevention
        {
            keywords: ["fix rust", "repair rust", "remove rust", "existing rust", "rust damage", "rusted", "fix rusted", "repair rusted", "rust spots", "rust repair", "do you fix", "can you fix"],
            answer: `*Adjusts virtual toolbelt* 🛠️ Let me clarify our service:

We are a rust PREVENTION company, not a rust repair service. Here's what you should know:

1. Our Service:
   - We focus on protecting vehicles from future rust
   - We apply preventive treatments before rust occurs
   - Our goal is to stop rust before it starts

2. For Existing Rust:
   - We recommend addressing existing rust with a body shop first
   - Once repaired, we can help prevent future rust
   - Our treatment works best on rust-free surfaces

Need a recommendation for rust repair? Contact us at:
- Jan: 705-627-7941
- Renee: 705-627-7521

We'll be happy to protect your vehicle after repairs! ${botTraits.catchphrase}`
        },
        // About low vehicles and ramps
        {
            keywords: [
                "low vehicle", "too low", "ground clearance", "low clearance",
                "ramp", "ramps", "raise", "lift up", "car too low", "vehicle too low",
                "lowered", "low to ground", "need ramps", "do you need ramps",
                "use ramps", "have ramps", "got ramps", "bring ramps",
                "provide ramps", "ramps needed", "ramps required"
            ],
            answer: `*Adjusts virtual ramps* 🛠️ Yes, we have our own professional ramps! Here's how we use them:

1. Our Equipment:
   - We bring our own high-quality ramps
   - Professional-grade for safety
   - Suitable for all vehicle types
   - No equipment needed from you

2. When We Use Them:
   - For low-clearance vehicles
   - Sports cars and modified vehicles
   - When extra access is needed
   - Any vehicle that needs elevation

3. Safety Features:
   - Gentle incline design
   - Non-slip surface
   - Stable and secure
   - Professional placement

We're fully equipped to handle ANY vehicle height! Need to schedule? Contact:
- Jan: 705-627-7941
- Renee: 705-627-7521

We bring everything needed - you just provide the vehicle! ${botTraits.catchphrase}`
        },
        // Update lift requirements answer to mention ramps
        {
            keywords: ["need lift", "require lift", "lift needed", "hoist", "raised", "lift requirement", "do you need", "need a lift", "vehicle lift", "car lift", "truck lift", "raise vehicle"],
            answer: `*Adjusts virtual safety glasses* 🛠️ No lift needed! Here's how our service works:

1. Mobile Service:
   - We come to your location
   - Service is performed at ground level
   - No special equipment required on your end
   - We bring our own ramps if needed for low vehicles

2. Our Process:
   - We use specialized tools and equipment
   - All equipment is in our service vehicle
   - We can access all areas without a lift
   - Professional-grade ramps available for low clearance

3. Accessibility:
   - Works for all vehicle types
   - We handle any ground clearance
   - We bring everything needed
   - Safe and secure elevation when required

Need to schedule a service? Contact us at:
- Jan: 705-627-7941
- Renee: 705-627-7521

We make it easy - you just provide the vehicle! ${botTraits.catchphrase}`
        },
        // About dripping and product application
        {
            keywords: ["drip", "does it drip", "will it drip", "dripping", "drips", "messy", "leaking", "leak", "run off", "runoff", "residue", "clean", "dripless", "no drip", "product drip"],
            answer: `*Adjusts virtual goggles* 🔍 Let me be specific about dripping:

1. What to Expect:
   - Most dripping occurs from door seams
   - We use a dripless formula for most areas
   - Some dripping is normal and expected in the first 24 hours
   - This is from the product working its way into seams and cavities

2. First 24 Hours Parking:
   - DO NOT park on:
     • Sealed driveways
     • Decorative concrete
     • Interlocking brick
     • Any surface you don't want product on

3. Recommended Parking:
   - Use a gravel driveway if possible
   - Park on grass or dirt area
   - Use street parking if allowed
   - Avoid your garage for 24 hours

4. After 24 Hours:
   - Dripping will stop
   - Safe to park anywhere
   - No further precautions needed
   - Normal use can resume

Need specific parking advice? Contact:
- Jan: 705-627-7941
- Renee: 705-627-7521

${botTraits.catchphrase}`
            }
        ],
        
        // Fallback responses when no match is found
        fallbacks: [
        `*Thoughtfully strokes virtual chin* 🤔 Hmm, I'm not quite sure about that one. As ${botName}, ${botTraits.expertise}, I'm best at answering questions about rust protection and our services. Could you rephrase that?`,
        `*Adjusts virtual glasses* 🧐 While I love a good chat, I might need some clarification on that question. Remember, ${botTraits.catchphrase} - I'm here to help with all your rust protection needs!`,
        `*Virtual lightbulb moment* 💡 That's an interesting question! While I'm most knowledgeable about ${botTraits.hobby}, for this specific query, you might want to chat with our team directly. Call Jan at 705-627-7941 or Renee at 705-627-7521.`,
        `*Tilts virtual head* 🤔 Could you tell me more about what you'd like to know? I'm knowledgeable about our rust protection services, pricing, scheduling, and more!`
    ]
};

function debugLog(message, data = null) {
    if (DEBUG) {
        if (data) {
            console.log(`[Chatbot Debug] ${message}:`, data);
        } else {
            console.log(`[Chatbot Debug] ${message}`);
        }
    }
}

// Advanced matching functions
function calculateStringSimilarity(str1, str2) {
    str1 = str1.toLowerCase().trim();
    str2 = str2.toLowerCase().trim();
    
    if (str1 === str2) return 1.0;
    if (str1.length === 0 || str2.length === 0) return 0.0;
    
    // Check for exact phrase containment with higher weight
    if (str1.includes(str2) || str2.includes(str1)) {
        return 0.9;
    }
    
    // Replace common variations but preserve "need" questions
    const normalizeText = (text) => {
        return text
            .replace(/do you have/g, "have")
            .replace(/can you/g, "do you")
            .replace(/will you/g, "do you")
            .replace(/this|it/, "work")
            .split(/\s+/);
    };
    
    const words1 = normalizeText(str1);
    const words2 = normalizeText(str2);
    
    // Count matching words and their positions
    let matchScore = 0;
    const commonWords = words1.filter(word => {
        const index = words2.indexOf(word);
        if (index !== -1) {
            // Add position-based bonus for words in similar positions
            const positionDiff = Math.abs(words1.indexOf(word) - index);
            matchScore += 1 + (1 / (positionDiff + 1));
            return true;
        }
        return false;
    });
    
    // Additional bonus for key terms appearing in both strings
    const keyTerms = {
        equipment: ["ramp", "ramps", "lift", "hoist"],
        weather: ["rain", "raining", "weather", "wet"],
        service: ["work", "service", "protect", "apply"]
    };
    
    let keyTermBonus = 0;
    for (const [category, terms] of Object.entries(keyTerms)) {
        const categoryMatches = terms.filter(term => 
            str1.includes(term) && str2.includes(term)
        ).length;
        if (categoryMatches > 0) {
            keyTermBonus += 0.3 * (categoryMatches / terms.length);
        }
    }
    
    // Special bonus for "need" questions matching with appropriate answers
    if ((str1.includes("need") && str2.includes("need")) ||
        (str1.includes("have") && str2.includes("have"))) {
        keyTermBonus += 0.2;
    }
    
    return Math.min(1, (matchScore / Math.max(words1.length, words2.length)) + keyTermBonus);
}

// Function to get random response from array
function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to determine question context
function getQuestionContext(question) {
    const q = question.toLowerCase();
    
    // Define context patterns
    const contexts = [
        { keywords: ['cost', 'price', 'quote', 'expensive', 'cheap'], context: 'pricing' },
        { keywords: ['rain', 'snow', 'weather', 'storm'], context: 'weather conditions' },
        { keywords: ['appointment', 'schedule', 'book', 'when'], context: 'scheduling' },
        { keywords: ['warranty', 'guarantee', 'protection'], context: 'our warranty' },
        { keywords: ['service', 'process', 'work', 'how'], context: 'our services' },
        { keywords: ['vehicle', 'car', 'truck', 'equipment'], context: 'vehicle types' }
    ];
    
    for (const {keywords, context} of contexts) {
        if (keywords.some(k => q.includes(k))) {
            return context;
        }
    }
    
    return 'our services'; // Default context
}

// Function to get bot response based on user input with advanced matching
function getBotResponse(userInput) {
    const input = userInput.toLowerCase().trim();
    debugLog('Processing input:', input);
    
    // Store best matches with their scores
    let matches = [];
    
    // Check main Q&A database first
    for (const item of knowledgeBase.qa) {
        let bestKeywordScore = 0;
        let combinedScore = 0;
        let matchedKeywords = 0;
        
        // Check each keyword for this QA pair
        for (const keyword of item.keywords) {
            const similarity = calculateStringSimilarity(input, keyword);
            debugLog(`Keyword match: "${keyword}" -> ${similarity}`);
            
            // Track best individual keyword match
            bestKeywordScore = Math.max(bestKeywordScore, similarity);
            
            // If we have a decent match, count it
            if (similarity > 0.3) {
                matchedKeywords++;
                combinedScore += similarity;
            }
            
            // Exact word/phrase match bonus
            if (input === keyword || input.includes(keyword) || keyword.includes(input)) {
                bestKeywordScore = Math.max(bestKeywordScore, 0.95);
            }
        }
        
        // Calculate final score based on multiple factors
        const finalScore = (bestKeywordScore * 0.8) + // Increased weight for best match
                         (combinedScore / item.keywords.length * 0.1) + // Reduced weight for average
                         (matchedKeywords / item.keywords.length * 0.1); // Coverage of keywords
        
        debugLog(`Answer score for "${item.keywords[0]}...": ${finalScore}`);
        
        if (finalScore > 0.3) {
            matches.push({
                answer: item.answer,
                score: finalScore,
                type: 'qa',
                keywords: item.keywords
            });
        }
    }
    
    // Check personality responses second (lower priority)
    for (const item of knowledgeBase.personality) {
        let bestScore = 0;
        
        for (const keyword of item.keywords) {
            const similarity = calculateStringSimilarity(input, keyword);
            bestScore = Math.max(bestScore, similarity);
        }
        
        if (bestScore > 0.5) { // Lowered from 0.6
            matches.push({
                answer: item.answer,
                score: bestScore * 0.7, // Adjusted personality score weight
                type: 'personality',
                keywords: item.keywords
            });
        }
    }
    
    // Sort matches by score
    matches.sort((a, b) => b.score - a.score);
    
    debugLog('All matches:', matches.map(m => ({
        type: m.type,
        score: m.score,
        keywords: m.keywords
    })));
    
    // If we have any good matches, use the best one
    if (matches.length > 0 && matches[0].score > 0.3) { // Lowered from 0.4
        debugLog('Selected match:', {
            type: matches[0].type,
            score: matches[0].score,
            keywords: matches[0].keywords
        });
        return matches[0].answer;
    }
    
    // Context-aware fallback responses
    const words = input.split(/\s+/);
    if (words.length <= 2) {
        return `*Tilts virtual head* 🤔 Could you tell me more about what you'd like to know? I'm knowledgeable about our rust protection services, pricing, scheduling, and more!`;
    } else {
        // Use standard fallbacks for longer queries
        return getRandomResponse(knowledgeBase.fallbacks);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    debugLog('Initializing chatbot...');
    
    // Get chatbot elements
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    
    // Debug logging for element initialization
    debugLog('Chatbot elements initialized:', {
        button: chatbotButton ? 'Found' : 'Missing',
        container: chatbotContainer ? 'Found' : 'Missing',
        close: chatbotClose ? 'Found' : 'Missing',
        messages: chatbotMessages ? 'Found' : 'Missing',
        input: chatbotInput ? 'Found' : 'Missing',
        send: chatbotSend ? 'Found' : 'Missing'
    });
    
    function toggleChatbot(show) {
        debugLog(`Toggling chatbot ${show ? 'open' : 'closed'}`);
        if (show) {
            chatbotContainer.classList.add('visible');
            // Add welcome message if it's the first time opening
            if (chatbotMessages.children.length === 0) {
                debugLog('Adding welcome message');
                addBotMessage(getRandomResponse(knowledgeBase.greetings));
            }
        } else {
            chatbotContainer.classList.remove('visible');
        }
    }
    
    // Toggle chatbot visibility
    if (chatbotButton && chatbotContainer && chatbotClose) {
        debugLog('Setting up click handlers');
        
        // Button click handler
        chatbotButton.addEventListener('click', function(event) {
            debugLog('Chatbot button clicked');
            event.preventDefault();
            event.stopPropagation();
            toggleChatbot(true);
        });
        
        // Close button handler
        chatbotClose.addEventListener('click', function(event) {
            debugLog('Close button clicked');
            event.preventDefault();
            event.stopPropagation();
            toggleChatbot(false);
        });
        
        // Click outside to close
        document.addEventListener('click', function(event) {
            if (!chatbotContainer.contains(event.target) && 
                !chatbotButton.contains(event.target) && 
                chatbotContainer.classList.contains('visible')) {
                debugLog('Clicked outside chatbot');
                toggleChatbot(false);
            }
        });
    } else {
        console.error('Missing required chatbot elements:', {
            button: !chatbotButton,
            container: !chatbotContainer,
            close: !chatbotClose
        });
    }
    
    // Function to add bot message with enhanced features
    function addBotMessage(message, userQuestion = '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('bot-message');
        
        // Enhanced question display with context
        let questionPart = '';
        if (userQuestion) {
            const questionContext = getQuestionContext(userQuestion);
            questionPart = `
                <div class="user-question">
                    <div class="question-header">
                        💭 <strong>You asked about ${questionContext}:</strong>
                    </div>
                    <div class="question-text">"${userQuestion}"</div>
                </div>`;
        }
        
        messageElement.innerHTML = `${questionPart}<p class="bot-response"><strong>${botName}:</strong> ${message}</p>`;
        chatbotMessages.appendChild(messageElement);
        
        // Scroll to bottom with smooth animation
        chatbotMessages.scrollTo({
            top: chatbotMessages.scrollHeight,
            behavior: 'smooth'
        });
    }

    // Add input and send functionality
    if (chatbotInput && chatbotSend) {
        debugLog('Setting up input handlers');
        
        // Send message function
        function sendMessage() {
            const userInput = chatbotInput.value.trim();
            debugLog('Attempting to send message:', userInput);
            
            if (userInput) {
                try {
                    debugLog('Getting bot response');
                    const botResponse = getBotResponse(userInput);
                    debugLog('Bot response:', botResponse);
                    
                    debugLog('Adding message to chat');
                    addBotMessage(botResponse, userInput);
                    
                    debugLog('Clearing input');
                    chatbotInput.value = '';
                } catch (error) {
                    console.error('Error processing message:', error);
                    debugLog('Error in message processing:', error);
                }
            } else {
                debugLog('Empty input, not sending');
            }
        }
        
        // Send message when clicking send button
        chatbotSend.addEventListener('click', function(event) {
            debugLog('Send button clicked');
            event.preventDefault();
            sendMessage();
        });
        
        // Send message when pressing Enter
        chatbotInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                debugLog('Enter key pressed');
                event.preventDefault();
                sendMessage();
            }
        });
        
        // Focus input when chatbot opens
        chatbotContainer.addEventListener('transitionend', function() {
            if (chatbotContainer.classList.contains('visible')) {
                chatbotInput.focus();
            }
        });
    } else {
        console.error('Missing input or send button:', {
            input: !chatbotInput,
            send: !chatbotSend
        });
    }
});