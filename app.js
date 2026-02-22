const form = document.getElementById("data-form")
let courseData = {}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    //Get the form data
   const dataForm =  new FormData(form)

   const firstName = dataForm.get("first-name");
   const lastName = dataForm.get("last-name");
   const batch = dataForm.get("batch");
   const regNo = dataForm.get("regNo");
   const course = dataForm.get("course");
   const email = dataForm.get("email");

   //validation
   if(!firstName || !lastName || !batch || !regNo || !course || !email ){
       document.getElementById("alert-pan-failed")
            .innerHTML = "<p>Save Failed</p>"
            document.getElementById("alert-pan-success")
            .innerHTML = ""
            return;
   }

})



