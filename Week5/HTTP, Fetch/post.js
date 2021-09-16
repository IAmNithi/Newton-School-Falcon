user = { 
    "name": "Kalanithi", 
    "age": "29" 
}
let options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
}

// Fake api for making post requests
fetch("http://dummy.restapiexample.com/api/v1/create", options).then(res =>
    res.json()).then(d => {
    console.log(d)
})