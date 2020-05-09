import LightningElementSLDS from 'util/lightningElementSLDS';

export default class Button extends LightningElementSLDS {
    getMessage() {
        fetch('https://conference-lwc-app.herokuapp.com/api/sessions')
            .then((response) => {
                return response;
            })
            .then((result) => {
                // eslint-disable-next-line no-alert
                console.log(result);
            });
    }
}
