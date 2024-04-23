const formEl = document.querySelector('form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    if( data.id== "" 
	|| data.brand == "" 
	|| data.model == "" 
    || data.year == "" 
	){
        window.alert("Error Message");
    }
    else {
        fetch('http://localhost:8003/api/v1/inventory', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .then(error => console.log(error))
    }
});