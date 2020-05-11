import LightningElementSLDS from 'util/lightningElementSLDS';

export default class App extends LightningElementSLDS {
    accRecords;

    constructor() {
        super();

        fetch('/api/v1/getAccRecords')
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.accRecords = result;
            });
    }
}
