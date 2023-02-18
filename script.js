const textArea = document.querySelector("textarea");
fileInput = document.querySelector(".file-name input");
fileType = document.querySelector(".select-menu select");
saveBtn = document.querySelector(".final-btn .save");
resetBtn = document.querySelector(".final-btn .reset");

saveInit = saveBtn.innerText;
fileType.addEventListener("change",() => {
    // creating object of selected text inside options 
    let selectOption = fileType.options[fileType.selectedIndex].text;//filetype's option list[of index selected one of it]'s text
    saveBtn.innerText = `Save as ${selectOption.split("-")[0]} file`;//split text upto - starting with 0
})
saveBtn.addEventListener("click",()=>{
  if(fileInput.value == "" || textArea.value == ""){
    alert("Please Enter data first!");
    return;
  }
  //blob(value,type)//Underlying data structure for the file object and the filereader API
  // let blob = new Blob([textArea.value], {type: fileType.value});

  // Get the text entered in the input field
  const text = textArea.value;

  // Encode the text using HTML entities
  const encodedText = new Option(text).innerHTML;
  
  
  // Create a new Blob object from the HTML content
  const blob = new Blob([encodedText], {type: fileType.value});
  //URL.createObjectURL create url that represent passed object
  let fileURL = URL.createObjectURL(blob); // creating url of raw data of blob object
  let link = document.createElement("a");//creating <a> 
  link.href = fileURL;// passing fileURL as href value of link
  link.download = fileInput.value;//passing filename as download
  link.click();//clicking link so the file download
  saveBtn.style.background = 'darkgreen';
})

resetBtn.addEventListener("click",() => {
   textArea.value = "";
   fileInput.value = "";
   saveBtn.style.background = "lime";
   saveBtn.innerText = saveInit;
})