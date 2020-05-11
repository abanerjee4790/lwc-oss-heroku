import LightningElementSLDS from 'util/lightningElementSLDS';

export default class App extends LightningElementSLDS {
    oppRecords;

    constructor() {
        super();

        fetch('/api/v1/getOppRecords')
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.oppRecords = result;
            });
    }
}
