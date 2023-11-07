const aboutMeBtn = document.getElementById("about-me-button")
const educationBtn = document.getElementById("education-button")
const experienceBtn = document.getElementById("experience-button")

const skillText = document.getElementById("skill-text")
const skillImg = document.getElementById("skill-img")
const title = document.getElementById("title");
const desc1 = document.getElementById("description-1");
const desc2 = document.getElementById("description-2");

var list = [
    {
        title: "About me",
        desc1: "Lorem ipsum dolor sit amet consectetur. Elementum arcu hac massa dapibus condimentum dictum facilisi. Egestas tellus pretium ut diam nisl.",
        desc2: "Lorem ipsum dolor sit amet consectetur. Elementum arcu hac massa dapibus condimentum dictum facilisi. Egestas tellus pretium ut diam nisl.",
        skillTextDisplay: "block",
        skillImgDisplay: "flex"
    },

    {
        title: "Education",
        desc1: "Lorem ipsum dolor sit amet consectetur. Elementum arcu hac massa dapibus condimentum dictum facilisi. Egestas tellus pretium ut diam nisl.",
        desc2: "Djtmemay",
        skillTextDisplay: "none",
        skillImgDisplay: "none"
    },

    {
        title: "Experience",
        desc1: "Lorem ipsum dolor sit amet consectetur. Elementum arcu hac massa dapibus condimentum dictum facilisi. Egestas tellus pretium ut diam nisl.",
        desc2: "Lorem ipsum dolor sit amet consectetur. Elementum arcu hac massa dapibus condimentum dictum facilisi. Egestas tellus pretium ut diam nisl.",
        skillTextDisplay: "none",
        skillImgDisplay: "none"
    }
];

aboutMeBtn.addEventListener("click", () => handleFunction(0, aboutMeBtn))
educationBtn.addEventListener("click", () => handleFunction(1, educationBtn))
experienceBtn.addEventListener("click", () => handleFunction(2, experienceBtn))

function handleFunction(index, element){
    aboutMeBtn.firstElementChild.className = "overlap-17"
    educationBtn.firstElementChild.className = "overlap-17"
    experienceBtn.firstElementChild.className = "overlap-17"

    element.firstElementChild.className = "overlap-group-7"
    title.innerHTML = list[index].title
    desc1.innerHTML = list[index].desc1
    desc2.innerHTML = list[index].desc2
    skillText.style.display = list[index].skillTextDisplay
    skillImg.style.display = list[index].skillImgDisplay
}