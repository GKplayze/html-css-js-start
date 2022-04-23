import "./styles.css";

let txtBtn = document.querySelector(".text-btn");

txtBtn.addEventListener("click", function () {
  document.getElementById("demo").innerText = "Pow Wow!";
  console.log("Pow Wow!");
});
