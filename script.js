document.getElementById("enquiryForm").addEventListener("submit", function(e){
  e.preventDefault();
  const data = new FormData(this);
  const name = data.get("name") || "there";
  const phone = data.get("phone") || "";
  const room = data.get("room") || "";
  const message = data.get("message") || "";
  const text = `Hi Lakshya Co-Living, I am ${name}. I am interested in ${room}. My phone number is ${phone}. ${message}`;
  const url = "https://wa.me/917483592376?text=" + encodeURIComponent(text);
  document.getElementById("formStatus").textContent = "Opening WhatsApp…";
  window.open(url, "_blank", "noopener");
});
