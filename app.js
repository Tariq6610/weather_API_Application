const locat = document.querySelector("#location");
const temp = document.querySelector("#temp");
const feels = document.querySelector("#feels");
const inp = document.querySelector("input");
const icon = document.querySelector("#icon");
const cond = document.querySelector("#cond")


const getData = async () => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=791091a4e89f44d29d2104117240404&q=${inp.value}&aqi=no`
    let promise = await fetch(URL);
    let data = await promise.json()
    console.log(data.current.condition.text)
    locat.innerText = data.location.name;
    temp.innerHTML = data.current.temp_c + "&deg;"
    feels.innerHTML = "Feels like "+data.current.feelslike_c + "&deg;"
    icon.src = "https:"+data.current.condition.icon;
    cond.innerText = data.current.condition.text;

}

getData();  

inp.addEventListener("keypress", (Event) =>{
    if(Event.key === "Enter"){
        getData();
        Event.preventDefault();
    }
})