

document.getElementById("resume-form")?.addEventListener("submit",function(event) {

    event.preventDefault();
    
    const profilePictureInput = document.getElementById("profile-picture") as HTMLInputElement;

    // type assertion 
    
    const nameElement =document.getElementById("name") as HTMLInputElement;
    
    const emailElement =document.getElementById("email") as HTMLInputElement;
    
    const phoneElement =document.getElementById("phone") as HTMLInputElement;
    
    const educationElement =document.getElementById("education") as HTMLInputElement;
    
    const experienceElement =document.getElementById("experience") as HTMLInputElement;
    
    const skillsElement =document.getElementById("skills") as HTMLInputElement;


    const usernameElement = document.getElementById("user-name") as HTMLInputElement;
    
    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement &&  usernameElement)
        
        
        
    
        {
        const name = nameElement.value ;
        const email = emailElement.value ;
        const phone = phoneElement.value ;
        const education = educationElement.value ;
        const experience = experienceElement.value ;
        const skills = skillsElement.value ;
    



        // picture elements
    
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile?URL.createObjectURL(profilePictureFile) : "";
    

    
        const username = usernameElement.value;

        const uniquePath =`resumes/${username.replace(/\ s+/g, "_")}_cv.html`
    
    // create resume output
    
    const resumeOutput = `<h2>Resume</h2>

    ${profilePictureURL ?`   <div class="imgDesign">
            <img src = "${profilePictureURL}" alt ="ProfilePicture">
        </div>`:''}
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone:</strong> ${phone} </p>
    
    <h3>Education</h3>
    <p>${education}</p> 
    
    <h3>Experience</h3>
    <p> ${experience} </p>
    
    <h3>Skills</h3>
    <p> ${skills} </p>
    
    
    `;



    const downloadLink = document.createElement("a")
downloadLink.href = "data:text/html;charset = utf-8," +encodeURIComponent(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent = "Download Your 2024 Resume";
    
    
    // display resume output
    
    const resumeOutputElement = document.getElementById("resume-output")
    if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;

    resumeOutputElement.classList.remove('hidden');
    // create conntainer for button

    const buttonContainer = document.createElement('div');
    buttonContainer.id = "buttonsContainer";
    resumeOutputElement.appendChild(buttonContainer);

    //add download pdf button

    // const downloadButton = document.createElement('button');
    // downloadButton.textContent = "Download as PDF";
    // downloadButton.addEventListener("click " ,() =>{
    //     window.print();
    // });
    // buttonContainer.appendChild(downloadButton);


    const downloadButton = document.createElement('button');
downloadButton.textContent = "Download as PDF";
downloadButton.addEventListener("click", () => {
    window.print();
});
buttonContainer.appendChild(downloadButton);


    //ADD shareable link 

    const shareLinkButton = document.createElement("button");
    shareLinkButton.textContent = "copy shreable link";
    shareLinkButton.addEventListener("click",async()=>{
        try{
            const shareableLink =`https://yourdomain.com/${name.replace(
                /\s+/g,
                "_"
            )}_cv.html`;

            await navigator.clipboard.writeText(shareableLink);
            alert("shreable link copy to clipboard");
        }
        catch(err){

            console.log("failed to copy link:" ,err );
            alert("ailed to copy link to clipboard.please try again");
            
        }
    });
    buttonContainer.appendChild(shareLinkButton);
    
    }else{
        console.error("The resume output elements are missing");
        
    }
     } else{
    
        console.error("One or more output elements are missing")
    }
    
    }
    );

