class paymentWeb {
  constructor() {
    this.aboutBtn = document.getElementById("aboutBtn");
    this.visionBtn = document.getElementById("visionBtn");
    this.contactBtn = document.getElementById("contactBtn");
    this.homeImg = document.getElementById("homeImg");
    this.aboutImg = document.getElementById("aboutImg");
    this.visionImg = document.getElementById("visionImg");
    this.contactImg = document.getElementById("contactImg");
    this.subText = document.getElementById("subText");
    this.subTextUrl = document.getElementById("subTextUrl");
    this.backBtn = document.getElementById("backBtn");
  }
  goAbout() {
    this.homeImg.style.display = "none";
    this.aboutImg.style.display = "flex";
    this.visionImg.style.display = "none";
    this.contactImg.style.display = "none";
    this.subText.innerHTML =
      "“割り勘”<br>金額と人数を入力し一人当たりの支払い金額を計算";
    this.backBtn.style.display = "flex";
  }

  goVision() {
    this.homeImg.style.display = "none";
    this.aboutImg.style.display = "none";
    this.visionImg.style.display = "flex";
    this.contactImg.style.display = "none";
    this.subText.innerHTML = "お会計の前に利用し<br>スムーズに";
    this.backBtn.style.display = "flex";
  }

  goContact() {
    this.homeImg.style.display = "none";
    this.aboutImg.style.display = "none";
    this.visionImg.style.display = "none";
    this.contactImg.style.display = "flex";
    this.subText.innerHTML = "何かありましたら<br>気軽に報告してください";
    this.subTextUrl.innerHTML = "https://payment-contact";
    this.backBtn.style.display = "flex";
  }
}

window.onload = function () {
  const app = new paymentWeb();
  app.aboutBtn.addEventListener("click", () => app.goAbout());
  app.visionBtn.addEventListener("click", () => app.goVision());
  app.contactBtn.addEventListener("click", () => app.goContact());
  app.backBtn.addEventListener("click", () => location.reload());
};
