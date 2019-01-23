describe('My First Test', function () {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })

    it.skip('should display text on first tree node', function () {
        cy.get('[for="node1 Одежда, обувь, аксессуары"]')
            .contains('Одежда, обувь, аксессуары');
    });

    it('should open category tree and see loaded good in the table', function () {
        cy.openTree();

        cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('Coat Blue');
    });

    it('should not see good in the table after change active category in tree', function () {
        cy.openTree();
        cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('Coat Blue');
        cy.pause();
        cy.get('[for="node2 Верхняя"]').click();
        cy.get('tbody > :nth-child(1)').should('not.exist');
    });

    it('should see good in the table after change page', function () {
        cy.openTree();
        //cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('Coat Blue');

        cy.get(':nth-child(3) > .page-link').click();
        //cy.get('.spinner-container');
        cy.wait(1000);
        cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('Coat transparent');
    });

    it('should see in details image equal to clicked in table data', function () {
        cy.openTree();
        cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('Coat Blue');

        cy.wait(1000);

        cy.get('tbody > :nth-child(1) > :nth-child(2)')
            .find("img").should('be.visible')
            .should('have.attr', 'src', "assets\\images\\coat1.jpg")
            .as("imgSrcinGoods")
            .click();

        cy.get(':nth-child(1) > img')
            .then(($imgSrcInDetails) => {

                // store the img's text
                const txt = $imgSrcInDetails.text();
                let src = $imgSrcInDetails.attr("src");
                // compare the two img' text
                // and make sure they are same
                cy.get('@imgSrcinGoods').should(($imgSrcinGoods) => {
                    expect($imgSrcinGoods.attr("src")).to.eq(src)
                })
            })
    });

    it('should see in details name of good equal to clicked in table data', function () {
        cy.openTree();

        cy.wait(1000);

        cy.get('tbody > :nth-child(1) > :nth-child(3)')
            .contains("Coat Blue")
            .as("nameSrcinGoods")
            .click();

        cy.get('#mat-input-0')
            .then(($nameSrcInDetails) => {

                // store the name's text
                let src = $nameSrcInDetails.attr("ng-reflect-value");
                // compare the two name' text
                // and make sure they are same
                cy.get('@nameSrcinGoods').should(($nameSrcinGoods) => {
                    expect($nameSrcinGoods.text()).to.eq(src)
                })
            })
    });

})