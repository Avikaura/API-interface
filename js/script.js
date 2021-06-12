const signSubmit= document.querySelector('.signSubmit')
const today= document.querySelector ('.today')
const date= document.querySelector('.date')


signSubmit.addEventListener("click", function(){

    const brief= document.querySelector('#signInput').value;

    signInput.value="";

    function getTodayHoro(){

        fetch(`https://devbrewer-horoscope.p.rapidapi.com/today/short/${brief}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6d0859ecf7mshb84be2370d73e4ep180b57jsne7d88163e948",
		"x-rapidapi-host": "devbrewer-horoscope.p.rapidapi.com"
	}
})

.then(response => response.json())
.then(response => {
	console.log(response);
    const showDate = response ['Date'];
    const showToday= response [`${brief}`]['Today'];
   
   
    date.innerHTML= showDate;
    today.innerHTML =`<h2>Today</h2> ${showToday}`;

    
})
.catch(err => {
	console.error(err);
});
    }

    getTodayHoro()
})