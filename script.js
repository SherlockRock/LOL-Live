async function fetchData() {
    console.log("HELLO?");
    const res = await fetch ("https://respectable-league-api.herokuapp.com/news", {
        headers: {
            'X-RapidAPI-Host': 'respectable-region-updates.p.rapidapi.com',
            'X-RapidAPI-Key': '5e73bbd1e4msh4a1f6fbfc548d1bp14196cjsn803a05d5e05d'
        }
    }).then(async (res) => {
        console.log(res);
        const record = await res.json();
        console.log(record);
        let temp = '';
        record.forEach(element => {
            temp += element.title + '<br>';
        });
        console.log(temp);
        document.getElementById('container').innerHTML = temp;
    }).catch((err) => {
        console.log(err);
    });
}
fetchData();