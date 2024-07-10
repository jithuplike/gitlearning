function loadData(){
   fetch('./studentsData.json') 
   .then(response => response.json())
   .then(data =>{
    document.getElementById('newData').innerHTML = data.students[1].name
   })
}