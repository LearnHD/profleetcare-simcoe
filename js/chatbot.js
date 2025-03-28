// Chatbot JavaScript for Pro Fleet Care Simcoe County Website

class Chatbot {
    constructor() {
        this.chatContainer = document.getElementById('chatContainer');
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendButton');
        this.toggleButton = document.getElementById('toggleChat');
        this.typingIndicator = document.createElement('div');
        this.typingIndicator.className = 'typing-indicator';
        this.typingIndicator.innerHTML = 'Rusty is typing...';
        
        this.initializeChat();
        this.setupEventListeners();
    }
    
    initializeChat() {
        // Welcome message
        setTimeout(() => {
            this.addMessage("Hi! I'm Rusty from Pro Fleet Care Simcoe County. How can I help you today?", 'bot');
        }, 1000);
    }
    
    setupEventListeners() {
        // Send message on button click
        this.sendButton.addEventListener('click', () => this.handleUserInput());
        
        // Send message on Enter key
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleUserInput();
            }
        });
        
        // Toggle chat window
        this.toggleButton.addEventListener('click', () => {
            this.chatContainer.classList.toggle('active');
            if (this.chatContainer.classList.contains('active')) {
                this.userInput.focus();
            }
        });
    }
    
    handleUserInput() {
        const message = this.userInput.value.trim();
        if (message) {
            this.addMessage(message, 'user');
            this.userInput.value = '';
            this.processUserMessage(message);
        }
    }
    
    addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = message;
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    showTypingIndicator() {
        this.chatMessages.appendChild(this.typingIndicator);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    hideTypingIndicator() {
        if (this.typingIndicator.parentNode === this.chatMessages) {
            this.chatMessages.removeChild(this.typingIndicator);
        }
    }
    
    processUserMessage(message) {
        this.showTypingIndicator();
        
        // Simulate processing time
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message.toLowerCase());
            this.addMessage(response, 'bot');
        }, 1500);
    }
    
    generateResponse(message) {
        // Knowledge base for responses
        const responses = {
            greeting: {
                patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
                response: "Hello! How can I assist you with your fleet rust protection needs today?"
            },
            services: {
                patterns: ['services', 'what do you do', 'rust protection', 'rust proofing', 'fleet'],
                response: "We provide professional fleet rust protection services in Simcoe County. Our services include annual rust protection, fleet maintenance programs, and customized solutions for your vehicles."
            },
            pricing: {
                patterns: ['price', 'cost', 'how much', 'pricing', 'quote'],
                response: "Our pricing varies depending on your fleet size and specific needs. Would you like to request a free quote? I can help connect you with our team."
            },
            location: {
                patterns: ['where', 'location', 'address', 'area', 'service area'],
                response: "We serve the entire Simcoe County area, including Barrie, Orillia, Collingwood, and surrounding areas. We offer mobile service, coming directly to your location!"
            },
            contact: {
                patterns: ['contact', 'phone', 'email', 'reach', 'call'],
                response: "You can reach us at (705) 123-4567 or email us at simcoe@profleetcare.com. Would you like me to have someone contact you directly?"
            },
            schedule: {
                patterns: ['schedule', 'appointment', 'book', 'when', 'available'],
                response: "We're available Monday through Friday, 8 AM to 5 PM. Would you like to schedule a service appointment or consultation?"
            },
            benefits: {
                patterns: ['benefits', 'why', 'advantage', 'better'],
                response: "Our rust protection service helps extend vehicle life, reduce maintenance costs, and maintain fleet value. We use a unique formula that penetrates deep into seams and crevices where rust starts."
            }
        };
        
        // Find matching response
        for (const category in responses) {
            if (responses[category].patterns.some(pattern => message.includes(pattern))) {
                return responses[category].response;
            }
        }
        
        // Default response if no match found
        return "I'm not sure I understand. Would you like to know about our services, pricing, or would you prefer to speak with a team member directly?";
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
});