const submitBtn=document.getElementById("submitBtn")
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const temp_real_val=document.getElementById('temp_real_val');
const temp_status =document.getElementById("temp_status");
// const temp =document.getElementById("temp");
const datahide =document.querySelector('.middle_layer');


const getInfo=async(event)=>{
    event.preventDefault();   // prevent from loading of the page 

    let cityVal=cityName.value;

    if (cityVal===""){
          city_name.innerText=`Please Write the name before search`; 
          datahide.classList.add("data_hide")
    }
    else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0c7f547ccaca0c10f7a0846ff4b74338`;
        const response = await fetch(url);
        const data =await response.json();  //Converting the json file into object 
        const arrData=[data];
        
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_val.innerText=arrData[0].main.temp;
        // temp.innerText=arrData[0].main.temp;
        // temp_status.innerText=arrData[0].weather[0].main;
        const tempMood = arrData[0].weather[0].main;
            console.log(tempMood);

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color:#eccc68;'></i>";

            }
            datahide.classList.remove('data_hide');
            cityVal = "";
           
       
        }catch{
            cityVal = " ";
            datahide.classList.add("data_hide");
            city_name.innerText =  `please enter the proper city name`;
            console.log('please add the proper city name');
        }
        
    }
}

submitBtn.addEventListener("click",getInfo);
