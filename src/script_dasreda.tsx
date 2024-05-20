if (window.location.origin == "https://partners.dasreda.ru") {
  const auth = JSON.parse(localStorage.getItem("pp.admin.session") ?? "").auth
  console.log("auth", auth);
  chrome.storage.local.set({ auth: { ...auth, time: Date.now()} })
}