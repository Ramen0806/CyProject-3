class BookingFun {

    getOneWaybutton(){
        return cy.get('.radio > [value^=O]')
    }

    getTwoWaybutton(){
        return cy.get('.radio > [value^=R]')
    }
    getCabinClass(){
        return cy.get(':nth-child(2) > .label')
    }
    getFromLabel(){
        return cy.get(':nth-child(3) > .label')
    }
    getToLabel(){
        return cy.get(':nth-child(4) > .label')
    }
    getDepartLabel(){
        return cy.get(':nth-child(5) > .label')
    }
    getReturnLabel(){
        return cy.get(':nth-child(6) > .label')
    }
    getReturnInput(){
        return cy.get('div.Projects_container__04CSc > div:nth-child(6) > div > div > div > input[type=text]')
    }
    getLabels(){
        return cy.get('.field > label')
    }
    NumberOfPassengersLabel(){
        return cy.get(':nth-child(7) > .label')
    }
    NumberOfPassengersInput(){
        return cy.get(' div:nth-child(7)  > .select')
    }
    Passenger1Input(){
        return cy.get(' div:nth-child(8)  > .select')
    }
    BookingBtn(){
        return cy.get('.Button_c_button__TmkRS')
    }

    selectors(){
        return cy.get('.field .select').children()
    }

    getaDate(){
        const date = new Date()
        let currentDay = String(date.getDate() + 7)
        let currentMonth = String(date.getMonth() + 1)
        let currentYear = date.getFullYear()
        return (`${currentMonth}/${currentDay}/${currentYear}`)
    }
    getaDateNextMonth(){
        const date = new Date()
        let currentDay = String(date.getDate() + 7)
        let currentMonth = String(date.getMonth() + 2)
        let currentYear = date.getFullYear()
        return (`${currentMonth}/${currentDay}/${currentYear}`)
    }
    
    depart(){
        return cy.get(':nth-child(5) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input')
    }
    
    return(){
        return cy.get(':nth-child(6) > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input')
    }


}
export default BookingFun