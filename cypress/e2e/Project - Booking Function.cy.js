import BookingFun from "../pages/BookingFun"

const bookingFun = new BookingFun()

describe('Project 3', () => {
 
  describe('Homework', () => {
    beforeEach(() => {
      cy.visit('https://techglobal-training.com/frontend/project-3')
    })

  it('Test Case 01 - Validate the default Book your trip form', () => {

  
    bookingFun.getOneWaybutton().should('be.visible').and('be.checked')
    bookingFun.getTwoWaybutton().should('be.visible').and('not.be.checked')

    const labels = ['Cabin Class', 'From', 'To', 'Depart', 'Return', 'Number of passengers', 'Passenger 1']

    cy.get('.field > label').each((el, index) => {
      cy.wrap(el).should('have.text', labels[index]).next().should('be.visible')
    })
    const data = ['1', 'Adult (16-64)']

    cy.get('.field:nth-child(7) option:nth-child(1), .field:nth-child(8) option:nth-child(1)')
      .each((el, index) => {
        cy.wrap(el).should('be.visible').and('have.text', data[index])
      })
    bookingFun.BookingBtn().should('be.visible').and('be.enabled')
  })

       
   
  })
  
it('Test Case 02 - Validate the Book your trip form when Round trip is selected', () => {

bookingFun.getTwoWaybutton().should('be.visible')

const labels = ['Cabin Class', 'From', 'To', 'Depart', 'Return', 'Number of passengers', 'Passenger 1']

const validation = ['.ml-0 > .mr-1', ':nth-child(2) > .mr-1']


cy.checkOptionAndValidateOthers('.ml-0 > .mr-1', validation)
cy.checkOptionAndValidateOthers(':nth-child(2) > .mr-1', validation)


cy.get('.field > label').each((el, index) => {
  cy.wrap(el).should('have.text', labels[index]).next().children().should('be.visible')
})

const data = ['1', 'Adult (16-64)']

cy.get('.field:nth-child(7) option:nth-child(1), .field:nth-child(8) option:nth-child(1)')
  .each((el, index) => {
    cy.wrap(el).should('be.visible').and('have.text', data[index])
  })

bookyourtrip.BookingBtn().should('be.visible').and('be.enabled')

})

})

it('Test Case 3 - Validate the booking for 1 passenger and one way', () => {

  bookingFun.getOneWaybutton().click()

  const testdata = ['Business', 'Illinois', 'Florida', '1', 'Senior (65+)']
    bookingFun.selectors().each((el, index) => {
      cy.wrap(el).select(testdata[index])

    })
    bookingFun.depart().clear().type(bookingFun.getaDate())

    bookingFun.BookingBtn().click()

    const confirmData = ['DEPART', 'IL to FL', 'Number of Passengers: 1', 'Passenger 1: Senior (65+)', 'Cabin class: Business']
    confirmData.forEach(item => {
      cy.contains(item).should('exist')

})

})

it('Test Case 4 - Validate the booking for 1 passenger and round trip', ()=> {
  
  bookingFun.getRoundTripbutton().click()

  const testdata = ['First', 'California', 'Illinois', '1', 'Adult (16-64)']
    bookingFun.selectors().each((el, index) => {
      cy.wrap(el).select(testdata[index])
    })
      bookingFun.depart().clear().type(bookingFun.getaDate())
      bookingFun.return().clear().type(bookingFun.getaDateNextMonth())

    bookingFun.bookButton().click()

    const departData = ['DEPART', 'CA to IL', 'Number of Passengers: 1', 'Passenger 1: Adult (16-64)', 'Cabin class: First']
    departData.forEach(item => {
      cy.contains(item).should('exist')
    })
    const returnData = ['RETURN', 'IL to CA']
    returnData.forEach(item => {
      cy.contains(item).should('exist')
    })
})

it('Test Case 5 - Validate the booking for 2 passengers and one way', ()=>{

  bookingFun.getOneWaybutton().click()

  bookingFun.selectors().eq(3).select('2')

  const testdata = ['Premium Economy', 'New York', 'Texas', '2', 'Adult (16-64)', 'Child (2-11)']

    bookingFun.selectors().each((el, index) => {
      cy.wrap(el).select(testdata[index])
    })

    bookingFun.depart().clear().type(bookingFun.getaDate())

    bookingFun.bookButton().click()

    const confirmData = ['DEPART', 'NY to TX', 'Number of Passengers: 2', 'Passenger 1: Adult (16-64)','Passenger 2: Child (2-11)', 'Cabin class: Premium Economy']

    confirmData.forEach(item => {
      cy.contains(item).should('exist')
    })

})


