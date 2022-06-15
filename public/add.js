const gasLeakForm = document.getElementById('gasLeak-form');
const gasLeakReporter = document.getElementById('gasLeak-reporter');
const gasLeakAddress = document.getElementById('gasLeak-address');
const gasLeakDescription = document.getElementById('gasLeak-description');

//Send POST to API to add gas report
async function addGasReport(e)
{
    e.preventDefault();

    if(gasLeakReporter.value =='' || gasLeakAddress.value ==''|| gasLeakDescription == '')
    {
        alert('Please fill in fields');
    }
    else
    {
        const sendBody = {
            witnessName: gasLeakReporter.value,
            address: gasLeakAddress.value,
            description: gasLeakDescription.value
        }
    
        try {
            const res = await fetch('/api/v1/stores', {
               method: 'POST',
               headers: {
                'Content-Type': 'application/json'
               } ,
               body: JSON.stringify(sendBody)
            });
    
            if(res.status === 400){
                throw Error('Gas Report already Exist!')
            }
    
            alert('GasLeak Has Been Reported! Thank you for your contribution to the society!');
            window.location.href = '/index.html';
    
        } catch (err) {
            alert(err);
            return;
        }
    }


}

gasLeakForm.addEventListener('submit', addGasReport);