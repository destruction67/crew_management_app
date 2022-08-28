export const DateService = {

    addMonth(dateValue, numberOfMonths) {
        if(!dateValue) return null;
        let date = new Date(dateValue);
        date.setMonth(date.getMonth() + numberOfMonths);
        return this.toInputString(date);
    },

    firstOfMonth(date) {
        if(!date) date = new Date();
        return this.toInputString(
            new Date(date.getFullYear(), date.getMonth(), 1)
        );
    },

    lastOfMonth(date) {
        if(!date) date = new Date();
        return this.toInputString(
            new Date(date.getFullYear(), date.getMonth() + 1, 0)
        );
    },

    toInputString(date) {
        let dateString = date.toDateString();
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        dateString = `${ye}-${mo}-${da}`;
        return dateString;
    },

};