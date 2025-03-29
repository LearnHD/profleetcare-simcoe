// Chatbot functionality for Pro Fleet Care Simcoe County Website

document.addEventListener('DOMContentLoaded', function() {
    // Get chatbot elements
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    
    // Chatbot nickname
    const botName = "Rusty";
    
    // Knowledge base for rustproofing information
    const knowledgeBase = {
        greetings: [
            `Hello! I'm ${botName}, your Pro Fleet Care virtual assistant. How can I help you with rustproofing today?`,
            `Hi there! I'm ${botName}, the rust protection expert for Pro Fleet Care Simcoe County. What would you like to know?`,
            `Welcome! I'm ${botName}, your guide to all things rust control. How can I assist you today?`
        ],
        
        // Common questions and answers
        qa: [
            // About the company
            {
                keywords: ["what", "service", "offer", "provide", "do you do"],
                answer: `Pro Fleet Care Simcoe County provides mobile rust control services. We come to your location to apply our unique two-step rustproofing process that protects vehicles and equipment from corrosion. Our service is convenient, effective, and helps extend the life of your valuable assets.`
            },
            {
                keywords: ["who", "owner", "franchise", "operate"],
                answer: `Pro Fleet Care Simcoe County is owned and operated by Renee Marchildon and Jan Borkowski. Having owned their own construction business, they understand the importance of quality workmanship and customer service. They're dedicated to serving customers throughout Simcoe County.`
            },
            {
                keywords: ["where", "location", "area", "serve", "coverage"],
                answer: `We proudly serve all of Simcoe County including Barrie, Orillia, Collingwood, Midland, Bradford, Innisfil, Alliston, Wasaga Beach, and surrounding areas. Our mobile service means we come to your location anywhere in the county.`
            },
            {
                keywords: ["experience", "history", "long", "years"],
                answer: `Pro Fleet Care has over 35 years of experience in the rust control industry. The company was founded in 1984 by Bob Lawrie and has grown into a franchise network across North America. The Simcoe County franchise brings this extensive experience and proven methods to our local community.`
            },
            
            // About the process
            {
                keywords: ["how", "process", "work", "application", "apply"],
                answer: `Our unique two-step process includes: 1) ROC 40 (a light oil) that penetrates seams and hard-to-reach areas, and 2) ROC 50 (a drip-less oil) that offers extra protection in high traffic areas like frame rails and wheel wells. This comprehensive approach ensures complete protection from undercarriage to roof line.`
            },
            {
                keywords: ["step", "first", "second", "roc 40", "roc 50"],
                answer: `Our two-step process is what makes Pro Fleet Care unique:\n\nStep 1: ROC 40 is a light oil that penetrates deep into seams, crevices, and hard-to-reach areas. It's ideal for interior panels and enclosed spaces.\n\nStep 2: ROC 50 is a drip-less oil that provides extra protection in high-traffic and exposed areas like frame rails and wheel wells. It creates a durable protective barrier that resists wash-off.`
            },
            {
                keywords: ["area", "protect", "coverage", "where", "parts"],
                answer: `We protect all vulnerable areas including: undercarriage, fenders, doors and door posts, hood and trunk, roof line, door handles, mirrors, bumper rails, window trim, electrical wiring and components, engine compartment, and more. Our product penetrates hard-to-reach areas, defying gravity to creep upwards, sideways, and downward for complete coverage.`
            },
            {
                keywords: ["mobile", "come to", "on-site", "location"],
                answer: `Yes! We are a fully mobile service. We come directly to your location, whether it's your home, business, farm, or municipal facility. This eliminates the need for you to transport your vehicles or equipment, saving you time and reducing downtime. We work around your schedule, offering evening and weekend appointments at no additional cost.`
            },
            
            // About pricing and scheduling
            {
                keywords: ["cost", "price", "quote", "estimate", "much"],
                answer: `Pricing depends on the type and size of vehicle or equipment. We'd be happy to provide a free quote! Please call Jan at 705-627-7941 or Renee at 705-627-7521, or fill out our contact form on the website. For every $1 spent on our rust control, customers typically save approximately $6 in reduced repair costs and extended vehicle life.`
            },
            {
                keywords: ["appointment", "schedule", "book", "when"],
                answer: `To schedule an appointment, please call Jan at 705-627-7941 or Renee at 705-627-7521, or fill out our contact form. We offer flexible scheduling including evenings and weekends at no additional cost. We work around your schedule to minimize disruption to your operations.`
            },
            {
                keywords: ["how long", "time", "take", "duration"],
                answer: `The application time varies depending on the size and type of vehicle or equipment. On average, a standard vehicle takes approximately 30-45 minutes for the complete two-step application. Larger vehicles or equipment may take longer. We'll provide you with a time estimate when scheduling your appointment.`
            },
            {
                keywords: ["often", "frequency", "how many", "yearly", "annual"],
                answer: `For optimal protection, we recommend annual applications of our rust control treatment. This is especially important in areas with harsh winters and heavy road salt usage, like Simcoe County. Annual applications ensure continuous protection against corrosion and help extend the lifespan of your vehicles and equipment.`
            },
            
            // About benefits
            {
                keywords: ["benefit", "advantage", "why", "should"],
                answer: `Benefits include: extended vehicle life, reduced repair costs (save $6 for every $1 spent), less downtime (we come to you), protection against salt and moisture, pest repellent properties to prevent rodents from chewing wires, maintained professional appearance, higher resale value, and enhanced safety through preserved structural integrity.`
            },
            {
                keywords: ["different", "better", "unique", "compare", "versus"],
                answer: `What makes us different: 1) We're mobile - we come to you, 2) Our two-step process ensures comprehensive protection, 3) Our products penetrate hard-to-reach areas that others can't access, 4) Our formula defies gravity, creeping upwards and sideways, 5) It continues to creep and reseal exposed areas, 6) It deters rodents from chewing wires, and 7) Our service providers are local business owners with a vested interest in your satisfaction.`
            },
            {
                keywords: ["save", "saving", "cost reduction", "return", "investment"],
                answer: `For every $1 spent on Pro Fleet Care rust control, customers save approximately $6 through reduced repair costs, less downtime, extended vehicle/equipment life, and higher resale value. Our service helps prevent costly repairs to body panels, frame components, electrical systems, and mechanical parts that can be damaged by corrosion.`
            },
            {
                keywords: ["warranty", "guarantee", "promise"],
                answer: `We stand behind the quality of our service. Our rust control treatment typically provides protection for 12 months, which is why we recommend annual applications. If you have any concerns about the application or effectiveness, please contact us directly and we'll make it right.`
            },
            
            // About vehicles and equipment
            {
                keywords: ["vehicle", "equipment", "what type", "kind of"],
                answer: `We service a wide range of vehicles and equipment including: farm equipment (tractors, combines), emergency vehicles (fire trucks, ambulances), passenger transportation (buses, shuttles), recreational vehicles (RVs, campers), snow removal and construction equipment, beach equipment, personal vehicles and trucks, and much more. If it has metal components that need protection from rust, we can service it!`
            },
            {
                keywords: ["farm", "tractor", "agricultural", "equipment"],
                answer: `We provide specialized rust protection for all types of farm equipment including tractors, combines, plows, tillers, sprayers, spreaders, balers, harvesters, grain handling equipment, and irrigation systems. Our service helps extend equipment life, reduce downtime during critical seasons, and maintain resale value. We come directly to your farm for convenient service.`
            },
            {
                keywords: ["emergency", "fire", "ambulance", "police"],
                answer: `We provide rust protection for emergency vehicles including fire trucks, pumpers, ambulances, paramedic vehicles, police cruisers, rescue vehicles, and command units. These vehicles must be reliable when needed most, and our protection helps ensure they're ready to respond. Our mobile service means we can come to your fire hall, police station, or emergency services facility.`
            },
            {
                keywords: ["bus", "transit", "school", "passenger"],
                answer: `We protect passenger transportation vehicles including school buses, transit buses, shuttle vans, taxis, tour buses, and accessible transportation vehicles. These vehicles face constant exposure to road salt and moisture. Our protection helps maintain structural integrity for passenger safety while reducing maintenance costs and extending vehicle lifespan.`
            },
            {
                keywords: ["rv", "recreational", "camper", "trailer"],
                answer: `We provide rust protection for recreational vehicles including motorhomes, RVs, travel trailers, fifth wheels, campers, pop-ups, boat trailers, ATVs, and snowmobiles. These represent significant investments that are often exposed to harsh conditions. Our mobile service means we can come to your home, storage facility, or campground to provide convenient protection.`
            },
            {
                keywords: ["snow", "plow", "construction", "heavy equipment"],
                answer: `We protect snow removal and construction equipment including snowplows, salt spreaders, excavators, backhoes, bulldozers, graders, loaders, skid steers, dump trucks, cement mixers, cranes, and lifts. This equipment operates in harsh conditions with constant exposure to salt, moisture, and abrasive materials, making rust protection essential.`
            },
            {
                keywords: ["beach", "water", "salt water", "sand"],
                answer: `We provide specialized protection for beach equipment including beach cleaning equipment, lifeguard vehicles, beach maintenance vehicles, watercraft, jet skis, boat trailers, and beach access equipment. These face some of the most corrosive conditions with constant exposure to salt water, sand, and sun. Our products create a barrier against these harsh elements.`
            },
            
            // About preparation and aftercare
            {
                keywords: ["prepare", "preparation", "before", "ready"],
                answer: `For best results, your vehicle should be clean and dry before application. However, we understand this isn't always possible, especially for farm and construction equipment. We can work with you to determine the best approach for your specific situation. No special preparation is required on your part.`
            },
            {
                keywords: ["after", "care", "maintenance", "wash", "clean"],
                answer: `You can use your vehicle immediately after our rust control application. There is no drying or curing time required. However, we recommend avoiding car washes for a few days after application to allow the product to fully penetrate and settle. No special maintenance is required between annual applications.`
            },
            {
                keywords: ["mess", "drip", "clean", "residue"],
                answer: `Our two-step process is designed to minimize mess. The ROC 50 product used in high-visibility areas is specifically formulated to be drip-less. While there may be some residue immediately after application, it typically dissipates quickly. We take care to apply the product properly to minimize any excess or overspray.`
            },
            
            // About the company and contact
            {
                keywords: ["contact", "reach", "call", "phone", "email"],
                answer: `You can contact Pro Fleet Care Simcoe County by calling Jan at 705-627-7941 or Renee at 705-627-7521. You can also email us at simcoecounty@profleetcare.com or fill out the contact form on our website. We're happy to answer any questions or provide a free quote for your vehicles or equipment.`
            },
            {
                keywords: ["hours", "business", "open", "available"],
                answer: `Our regular business hours are Monday through Friday from 8:00 AM to 6:00 PM. However, we offer flexible scheduling including evenings and weekends at no additional cost to accommodate your needs. As a mobile service, we come to your location at a time that works best for you.`
            },
            {
                keywords: ["website", "online", "web"],
                answer: `You're currently on our website! You can explore different sections to learn more about our services, process, industries we serve, and more. You can also fill out our contact form to request a quote or ask questions. If you're looking for the main Pro Fleet Care corporate website, you can visit profleetcare.com.`
            },
            
            // About rust and corrosion
            {
                keywords: ["rust", "cause", "why", "happen", "corrosion"],
                answer: `Rust (iron oxide) forms when iron or steel is exposed to oxygen and moisture over time. This process is accelerated by salt, chemicals, and environmental factors. In Simcoe County, vehicles and equipment are particularly vulnerable due to road salt in winter, moisture from rain and snow, and agricultural or industrial chemicals. Rust weakens metal components and can lead to structural failure if left untreated.`
            },
            {
                keywords: ["salt", "winter", "road salt", "damage"],
                answer: `Road salt is one of the biggest contributors to vehicle and equipment corrosion. Salt lowers the freezing point of water, creating a brine solution that accelerates the rusting process. It can get trapped in seams and crevices, causing corrosion from the inside out. Our rust control products neutralize these effects by displacing moisture and creating a protective barrier.`
            },
            {
                keywords: ["prevent", "stop", "avoid", "protect"],
                answer: `The best way to prevent rust is through regular protective treatments like our two-step rust control process. Other preventive measures include regular washing (especially in winter), keeping vehicles stored in dry locations when possible, promptly repairing paint chips or scratches, and avoiding prolonged exposure to salt and moisture. Our mobile service makes regular protection convenient and effective.`
            },
            
            // Miscellaneous
            {
                keywords: ["thanks", "thank you", "appreciate", "helpful"],
                answer: `You're welcome! I'm happy to help. If you have any other questions about Pro Fleet Care's rust control services, feel free to ask. You can also contact Jan at 705-627-7941 or Renee at 705-627-7521 for personalized assistance or to schedule an appointment.`
            },
            {
                keywords: ["who are you", "your name", "chatbot", "bot"],
                answer: `I'm ${botName}, Pro Fleet Care Simcoe County's virtual assistant! I'm here to answer your questions about our rust control services, process, and benefits. While I can provide information, for personalized quotes or to schedule service, please contact Jan at 705-627-7941 or Renee at 705-627-7521.`
            },
            {
                keywords: ["hello", "hi", "hey", "greetings"],
                answer: `Hello! I'm ${botName}, your Pro Fleet Care virtual assistant. I'm here to answer your questions about our rust control services. How can I help you today?`
            }
        ],
        
        // Fallback responses when no match is found
        fallbacks: [
            `I'm not sure I understand that question. As ${botName}, I'm most knowledgeable about Pro Fleet Care's rust control services. Could you rephrase or ask something about rustproofing, our process, or the benefits?`,
            `I don't have specific information about that. Would you like to speak with one of our owners? Call Jan at 705-627-7941 or Renee at 705-627-7521 for personalized assistance.`,
            `That's a great question! For more detailed information on that topic, please contact our team directly at 705-627-7941 (Jan) or 705-627-7521 (Renee), or fill out our contact form.`,
            `As ${botName}, I'm still learning! For the most accurate information on that topic, I'd recommend calling Jan at 705-627-7941 or Renee at 705-627-7521. They'd be happy to help you.`
        ]
    };
    
    // Toggle chatbot visibility
    if (chatbotButton && chatbotContainer && chatbotClose) {
        chatbotButton.addEventListener('click', function() {
            chatbotContainer.style.display = 'block';
            // Add welcome message if it's the first time opening
            if (chatbotMessages.children.length === 0) {
                addBotMessage(getRandomResponse(knowledgeBase.greetings));
            }
        });
        
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.style.display = 'none';
        });
    }
    
    // Send message functionality
    if (chatbotInput && chatbotSend && chatbotMessages) {
        // Send on button click
        chatbotSend.addEventListener('click', sendMessage);
        
        // Send on Enter key
        chatbotInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Function to send message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addUserMessage(message);
        
        // Clear input
        chatbotInput.value = '';
        
        // Get bot response after a short delay (simulates thinking)
        setTimeout(function() {
            const response = getBotResponse(message);
            addBotMessage(response);
        }, 500);
    }
    
    // Function to add user message to chat
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('user-message');
        messageElement.innerHTML = `<p>${message}</p>`;
        chatbotMessages.appendChild(messageElement);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Function to add bot message to chat
    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('bot-message');
        messageElement.innerHTML = `<p><strong>${botName}:</strong> ${message}</p>`;
        chatbotMessages.appendChild(messageElement);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Function to get bot response based on user input
    function getBotResponse(userInput) {
        // Convert to lowercase for easier matching
        const input = userInput.toLowerCase();
        
        // Check for matches in knowledge base
        for (const item of knowledgeBase.qa) {
            // Check if any keywords match
            if (item.keywords.some(keyword => input.includes(keyword.toLowerCase()))) {
                return item.answer;
            }
        }
        
        // If no match found, return random fallback
        return getRandomResponse(knowledgeBase.fallbacks);
    }
    
    // Function to get random response from array
    function getRandomResponse(responses) {
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    }
});
