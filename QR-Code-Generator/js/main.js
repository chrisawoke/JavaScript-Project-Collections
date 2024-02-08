const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

// Button submit
const onGenerateSubmit = (e) => {
  e.preventDefault();

  clearUI();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  // Validate url
  if (url === "") {
    alert("Please enter a URL");
  } else {
    showSpinner();
    // Show spinner for 1 sec
    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);

      setTimeout(() => {
        const downloadUrl = qr.querySelector("img").src;
        createDownloadBtn(downloadUrl);
      }, 50);
    }, 1000);
  }
};

// Generate QR code
const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};

// Show the spinner
const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};

// Hide the spinner
const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};

// Clear QR code and download button
const clearUI = () => {
  qr.innerHTML = "";
  const downloadBtn = document.getElementById("download-link");
  if (downloadBtn) {
    downloadBtn.remove();
  }
};

// Create download button to download QR code as image
const createDownloadBtn = (downloadUrl) => {
  const link = document.createElement("a");
  link.id = "download-link";
  link.classList =
    "bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded w-1/3 m-auto my-5";

  link.href = downloadUrl;
  link.download = "qrcode.png";
  link.innerHTML = "Download Image";

  document.getElementById("generated").appendChild(link);
};

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);
