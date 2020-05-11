import LightningElementSLDS from 'util/lightningElementSLDS';


export default class NewOpp extends LightningElementSLDS {

    newAccount() {
        let accName = this.template.querySelector('.slds-input').value;

        fetch('/api/v1/newAccRecord', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({'accName' : accName})
        })
        .then((response) => {
            return response.text();
        })
        .then((result) => {
            // eslint-disable-next-line no-alert
            alert('New Account Record--> '+result);
        });
    }
}
