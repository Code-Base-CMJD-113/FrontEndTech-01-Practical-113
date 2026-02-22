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
            .innerHTMcourseL = ""
            return;
   }
   courseData = {
    firstNameObj : firstName.trim(),
    lastNameObj : lastName.trim(),
    batchobj : batch.trim(),
    regNoObj : regNo.trim(),
    courseObj : course.trim(),
    emailObj : email.trim()
   }
   console.log(courseData)
   console.log(JSON.stringify(courseData))
})



