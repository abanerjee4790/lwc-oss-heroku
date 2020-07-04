import LightningElementSLDS from 'util/lightningElementSLDS';

export default class App extends LightningElementSLDS {
    accRecords;

    constructor() {
        super();

        //Promise Based Syntax

        /*fetch('/api/v1/getAccRecords')
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.accRecords = result;
            });*/

        //async/await based syntax
        (async () => {
            let response = await fetch('/api/v1/getAccRecords');
            let result = await response.json();
            this.accRecords = result;
        })();
    }
}
