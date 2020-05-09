import LightningElementSLDS from 'util/lightningElementSLDS';

export default class Button extends LightningElementSLDS {
    getMessage() {
        fetch('https://fierce-crag-08924.herokuapp.com/api/v1/endpoint')
            .then((response) => {
                return response;
            })
            .then((result) => {
                // eslint-disable-next-line no-alert
                console.log(result);
            });
    }
}
