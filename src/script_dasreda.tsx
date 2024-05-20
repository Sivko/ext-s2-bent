if (window.location.origin == "https://partners.dasreda.ru/") {
  const admin = JSON.parse(localStorage.getItem("pp.admin.session") ?? "")
  console.log("admin", admin);
}