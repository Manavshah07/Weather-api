//  https://api.openweathermap.org/data/2.5/forecast?q=Mumbai&units=metric&appid=3d96de5f84f707ca60df4c43599d3f98

const key = "3d96de5f84f707ca60df4c43599d3f98";
const getForecast = async (city)=>{
    const base ="https://api.openweathermap.org/data/2.5/forecast";
    const query= `?q=${city}&units=metric&appid=${key}`;
    
    const response = await fetch(base+query);
    //console.log(response);
    if(!response.ok)
        throw new Error("status code:" + response.status);
    
    const data = await response.json();
    //console.log(data);
    return data;
}

getForecast('Gujrat')
.then(data=>console.log(data))
.catch(err=>console.warn(err));