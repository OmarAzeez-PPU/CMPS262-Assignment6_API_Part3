const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData (formEl);
    const data = Object.fromEntries(formData);
    if(data.id == "" || data.brand == "" || data.model == "" || data.year == "") {
        $.toaster({ priority : 'danger', title : 'Error Message', message : "Oops something went wrong"});

    } else {
        fetch('https://cmps262-assignment5-api-part2.onrender.com/api/v1/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
          .then(data => console.log(data))
          .then(error => console.log(error))
          window.alert("New Inventory Addedd");
    }
});