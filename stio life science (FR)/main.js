var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
  var swiper = new Swiper(".mySwiper", {
  loop: true, // تشغيل التكرار اللانهائي
  autoplay: {
    delay: 3000, // تغيير الصورة كل 3 ثوانٍ
    disableOnInteraction: false, // يستمر التشغيل التلقائي حتى بعد تفاعل المستخدم
  },
  pagination: {
    el: ".swiper-pagination", // تحديد العنصر الذي يحتوي على النقاط
    clickable: true, // يجعل النقاط قابلة للنقر
    dynamicBullets: true, // يجعل النقاط تتغير ديناميكيًا
  }
});

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')


 document.addEventListener("DOMContentLoaded", function () {
    const mainButton = document.getElementById("mainButton");
    const contactOptions = document.getElementById("contactOptions");
    const closeButton = document.getElementById("closeButton");

    mainButton.addEventListener("click", function () {
        contactOptions.classList.add("active");
        mainButton.style.display = "none"; // إخفاء الزر الأصلي
    });

    closeButton.addEventListener("click", function () {
        contactOptions.classList.remove("active");
        mainButton.style.display = "flex"; // إعادة إظهار الزر
    });
});