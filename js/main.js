document.querySelector('.searchBtn').addEventListener('click', getFetch);

function getFetch(){
    const url = `https://api.adviceslip.com/advice`;

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);
            console.log(data.slip.advice);
            document.querySelector('.adviceBox').innerText = `"${data.slip.advice}"`;
            document.querySelector('.resultBox').style.display = 'block';
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
