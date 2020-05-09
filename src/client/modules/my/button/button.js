import LightningElementSLDS from 'util/lightningElementSLDS';

export default class Button extends LightningElementSLDS {
    getMessage() {
        fetch('/getMessage')
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                // eslint-disable-next-line no-alert
                console.log(result.message);
            });
    }
}
