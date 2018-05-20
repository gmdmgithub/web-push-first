console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Getting push notification...");
  self.registration.showNotification(data.title, {
    body: "Notified by Dominik Mika",
    icon: "https://www.seeklogo.net/wp-content/uploads/2013/11/polski-zwiazek-pilki-noznej-pzpn-vector-logo.png"
  });
});