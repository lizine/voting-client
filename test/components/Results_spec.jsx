import React from 'react';
import {List, Map} from 'immutable';
import Results from '/../../src/components/Results';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponensWithClass}
 = React.addons.TestUtils;

 describe('Results', () =>{

 	it('renders entries with vote counts or zero' ()=>{
 		const pair = List.of('Trainspotting', '28 Days Later');
 		const tally = Map({'Trainspotting':5});
 		const component = renderIntoDocument(
 			<Results pair={pair} tally={tally} />
 			);
 		const entries = scryRenderedDOMComponensWithClass(component, 'entry');
 		const [train, days] = entries.map( e => e.textContent);

 		expect(etnries.length).to.equal(2);
 		expect(train).to.contain('Trainspotting');
 		expect(train).to.contain('5');
 		expect(days).to.contain('28 Days Later');
 		expect(days).to.contain('0');
 	});

 });