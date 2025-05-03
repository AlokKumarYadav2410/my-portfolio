const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const hoverSign = document.querySelector(".hover-sign");

//sidebar elements
const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");


const videoList = [video1, video2, video3];

videoList.forEach(function (video){
    video.addEventListener("mouseover", function() {
        hoverSign.classList.add("active");
        video.play();

    })
    video.addEventListener("mouseout", function() {
        video.pause();
        // video.currentTime = 0;
        hoverSign.classList.remove("active");
    })
})

//sidebar toggle
menu.addEventListener("click", function() {
    sidebar.classList.remove("close-sidebar");
    sidebar.classList.add("open-sidebar")
});

close.addEventListener("click", function() {
    sidebar.classList.remove("open-sidebar");
    sidebar.classList.add("close-sidebar");
})


  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert("Thank you for your message!");
      form.reset();
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  });

