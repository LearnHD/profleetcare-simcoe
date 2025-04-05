// Booking System for Pro Fleet Care
// Version 1.0.0

class BookingSystem {
    constructor() {
        this.availableDates = new Map();
        this.bookings = new Map();
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        this.initialized = true;
        this.setupEventListeners();
        this.loadAvailableDates();
        this.renderCalendar();
    }

    setupEventListeners() {
        // Calendar navigation
        document.getElementById('prevMonth')?.addEventListener('click', () => this.navigateMonth(-1));
        document.getElementById('nextMonth')?.addEventListener('click', () => this.navigateMonth(1));
        
        // Booking form submission
        document.getElementById('bookingForm')?.addEventListener('submit', (e) => this.handleBookingSubmit(e));
    }

    loadAvailableDates() {
        // Demo data - In production, this would load from your backend
        const today = new Date();
        for (let i = 1; i <= 60; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            // Only add weekdays
            if (date.getDay() !== 0 && date.getDay() !== 6) {
                this.availableDates.set(date.toISOString().split('T')[0], {
                    morning: true,
                    afternoon: true
                });
            }
        }
    }

    navigateMonth(delta) {
        const calendar = document.getElementById('bookingCalendar');
        const currentMonth = parseInt(calendar.dataset.month);
        const currentYear = parseInt(calendar.dataset.year);
        
        let newMonth = currentMonth + delta;
        let newYear = currentYear;
        
        if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        } else if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        }
        
        this.renderCalendar(newYear, newMonth);
    }

    renderCalendar(year = new Date().getFullYear(), month = new Date().getMonth()) {
        const calendar = document.getElementById('bookingCalendar');
        if (!calendar) return;

        calendar.dataset.month = month;
        calendar.dataset.year = year;

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startingDay = firstDay.getDay();
        const monthLength = lastDay.getDate();

        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                          'July', 'August', 'September', 'October', 'November', 'December'];

        document.getElementById('currentMonthYear').textContent = `${monthNames[month]} ${year}`;

        let calendarHTML = '<tr>';
        const today = new Date();
        let dayCount = 1;

        // Empty cells before the first day
        for (let i = 0; i < startingDay; i++) {
            calendarHTML += '<td></td>';
        }

        // Fill in the days
        for (let i = startingDay; i < 42; i++) {
            if (dayCount > monthLength) break;
            
            const currentDate = new Date(year, month, dayCount);
            const dateString = currentDate.toISOString().split('T')[0];
            const isAvailable = this.availableDates.has(dateString);
            const isPast = currentDate < today;
            
            if (i > 0 && i % 7 === 0) {
                calendarHTML += '</tr><tr>';
            }

            let cellClass = '';
            if (isAvailable && !isPast) cellClass = 'available';
            if (isPast) cellClass = 'past';

            calendarHTML += `
                <td class="${cellClass}" data-date="${dateString}">
                    <span class="date">${dayCount}</span>
                    ${isAvailable && !isPast ? '<div class="slots"><span>AM</span><span>PM</span></div>' : ''}
                </td>`;

            dayCount++;
        }

        calendarHTML += '</tr>';
        document.getElementById('calendarBody').innerHTML = calendarHTML;

        // Add click handlers to available dates
        document.querySelectorAll('td.available').forEach(cell => {
            cell.addEventListener('click', () => this.handleDateSelection(cell.dataset.date));
        });
    }

    handleDateSelection(dateString) {
        const selectedDate = new Date(dateString);
        const formattedDate = selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        document.getElementById('selectedDate').textContent = formattedDate;
        document.getElementById('bookingDateInput').value = dateString;
        document.getElementById('bookingModal').style.display = 'block';
    }

    async handleBookingSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        // In production, this would send to your backend
        console.log('Booking submitted:', Object.fromEntries(formData));
        
        // Demo success message
        document.getElementById('bookingModal').style.display = 'none';
        alert('Booking request submitted! We will contact you to confirm.');
        form.reset();
    }
}

// Initialize booking system
document.addEventListener('DOMContentLoaded', () => {
    window.bookingSystem = new BookingSystem();
    window.bookingSystem.init();
}); 