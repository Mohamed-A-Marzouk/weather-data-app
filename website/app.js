
/* Global Variables */
const apiKey='d06d1be48b5db111ee648b79846b10f8';

// Create a new date instance dynamically with JS
let d = new Date();

let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

const btn = document.querySelector("#generate");

btn.addEventListener("click",handelGenerateBtnClick);

function handelGenerateBtnClick(){

  const zipCode = document.querySelector("#zip").value;

  const apiUrl=`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

  const feeling=document.querySelector("#feelings").value;

  if(zipCode){

    getData(apiUrl,feeling)

    .then(function(data){

      postData("/addData",data);

    })
    .then(()=>{
     
      updateUI();
    
    })

  }

  else{

    alert("please,  enter a zip code")

  }

}

const getData = async (apiUrl,feeling)=>{

  try {
    
    const res =await fetch(apiUrl);
    
    const data = await res.json();
    
    let tempData={
    
      temp:data.main.temp,
    
      date:newDate,
    
      feelings:feeling
    
    }
    
    return tempData;

  } catch (error) {

    console.log(error);
    
  }
 
}

const postData = async (url='',data={})=>{

  try {

    await fetch(url, {

      method: 'POST',

      credentials: 'same-origin', 

      headers: {

        'Content-Type': 'application/json',

      },

      body: JSON.stringify(data)       

        });
        
      } catch (error) {
    
      }
}

const updateUI = async () => {
  
  const res = await fetch('/all');
  
  try{
   
    const ourData = await res.json();
   
    document.getElementById('date').innerHTML = ourData.date;
   
    document.getElementById('temp').innerHTML = ourData.temp;
   
    document.getElementById('content').innerHTML = ourData.userResponse;

  }catch(error){

    console.log("error", error);

  }
}
