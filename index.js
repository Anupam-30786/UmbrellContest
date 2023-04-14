var yellowUmbrela = document.getElementById("yellowUmbrella");
var pinkUmbrella = document.getElementById("pinkUmbrella");
var blueUmbrela = document.getElementById("blueUmbrella");
var selectedumbrella;
var uploadiconRefrence;
function loader() {
  // console.log("hello");
  setTimeout(changeUmbrella, 1000);
  spinLoader();
}

function stopLoading(image) {
  image.classList.remove("rotate");
}

function disablelLogovisibility() {
  document.getElementById("logoimage").style.display = "none";
}

function enableLogoVisibility() {
  document.getElementById("logoimage").style.display = "block";
}

yellowUmbrela.addEventListener("click", () => {
  disablelLogovisibility();
  selectedumbrella = "yello umbrella.png";
  loader();
  changeUploadDivColor("yellow");
});

pinkUmbrella.addEventListener("click", () => {
  disablelLogovisibility();
  selectedumbrella = "pink umbrella.png";
  loader();
  changeUploadDivColor("pink");
});

blueUmbrela.addEventListener("click", () => {
  disablelLogovisibility();
  selectedumbrella = "blue umbrella.png";
  loader();
  changeUploadDivColor("blue");
});

function changeUmbrella(umbrella) {
  umbrella = selectedumbrella;
  var image = document.getElementById("umbrellaimg");
  var uploadiconReference = document.getElementById("uploade");
  image.setAttribute("src", `./Umbrella project assets/${umbrella}`);
  image.setAttribute("class", "umbrellaimg");
  console.log("style", image.style);
  uploadiconReference.setAttribute(
    "src",
    "./Umbrella project assets/upload_icon.svg"
  );
  enableLogoVisibility();
  stopLoading(image); // stop the loader
  stopLoading(uploadiconReference);
}

//method to spin the loader image by aplliying rotate class
function spinLoader() {
  var img = document.getElementById("umbrellaimg"); // getting reference of our image div to show loader
  img.setAttribute("src", "./Umbrella project assets/loader_icon.svg"); // replacing our umbrella image with loader image
  img.setAttribute("class", "rotate");
  img.style = {
    height: "50px",
  };
  // applying class to spin the loader image
  /* below code is to replace uploade icon with loading icon and appliying rotate class to spin the icon*/
  img = document.getElementById("uploade");
  img.setAttribute("src", "./Umbrella project assets/loader_icon.svg");
  img.setAttribute("class", "rotate");
}

function changeUploadDivColor(color) {
  //function to change the color of file selection div
  // console.log("cahnge div color");
  var imagePickerDiv = document.getElementById("imagepicker");
  imagePickerDiv.style.backgroundColor = color;
}

function uploadImage(input) {
  // function to open the systems file explorer to select desired icon to check
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      uploadiconRefrence = e.target.result;
      document
        .getElementById("logoimage")
        .setAttribute("src", uploadiconRefrence);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
/* fuction to open file explorer on click upload icon*/
function clickfilePicker() {
  document.getElementById("uploade").addEventListener("click", () => {
    document.getElementById("file").click();
  });
}
