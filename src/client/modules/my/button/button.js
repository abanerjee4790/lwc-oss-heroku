import { LightningElement } from 'lwc';

export default class Button extends LightningElement {
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
