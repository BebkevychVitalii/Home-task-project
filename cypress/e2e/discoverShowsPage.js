describe('Top shows', () => {
  const shows = [
      'Crime Junkie',
      'The Joe Rogan Experience',
      'Up First from NPR',
      'NPR News Now',
      'The Mel Robbins Podcast',
      'Shawn Ryan Show',
      'Morbid',
      'Stuff You Should Know',
      'On Purpose with Jay Shetty',
      'Pod Save America',
      'The Megyn Kelly Show',
      'Armchair Expert with Dax Shepard',
      'The Daily',
      'SmartLess',
      'anything goes with emma chamberlain',
      'MrBallen Podcast: Strange, Dark & Mysterious Stories',
      '20/20',
      'The Ben Shapiro Show',
      'The Diary Of A CEO with Steven Bartlett',
      'Pardon My Take',
      'Behind the Bastards',
      'The Weekly Show with Jon Stewart',
      'This Past Weekend w/ Theo Von',
      'Radiolab',
      'New Heights with Jason & Travis Kelce'
    ];

    beforeEach(() => {
    cy.visit('/login', { timeout: 60000 });
    cy.contains('span', 'Discover Shows', { timeout: 20000 }).should('be.visible').click();
    cy.get('h3', { timeout: 30000 }).should('contain', 'Discover Shows (25)');
    cy.wait(1000);
  });
  it('should verify top 25 shows titles are visible', () => {
    shows.forEach((show) => {
      cy.contains('span[data-test-id="Ellipsis"]', show, { timeout: 20000 })
        .should('exist')
        .should('be.visible')
        .then($span => {
          $span[0].scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
          cy.wait(300);
          cy.wrap($span).should('be.visible');
        });
    });
  });

  it('should find each top show title via public search', () => {
    shows.forEach((show) => {
      cy.get('input[role="combobox"]', { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(show, { force: true });
      cy.wait(600);
      cy.get('#react-select-2-option-0', { timeout: 15000 })
        .should('be.visible')
        .invoke('text')
        .then(optionText => {
          expect(optionText.trim().toLowerCase()).to.include(show.toLowerCase());
        });
      cy.get('input[role="combobox"]').clear();
    });
  });

  it('should fail if any change percentage in the ranker is greater than 80%', () => {
    cy.get('span.MuiTypography-psSubtitleBold').each($el => {
      const text = $el.text().replace('%', '').trim();
      const value = parseFloat(text);
      if (!isNaN(value)) {
        expect(value, `Change percentage ${value}% should not be greater than 80%`).to.be.at.most(80);
      }
    });
  });
});