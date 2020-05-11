import LightningElementSLDS from 'util/lightningElementSLDS';

export default class App extends LightningElementSLDS {
    getMessage() {
        fetch('/api/v1/getMessage')
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                // eslint-disable-next-line no-alert
                console.log(result);
            });
    }
}
