async function getRandomSeaBackground() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?query=sea",
    {
      headers: {
        Authorization: "Client-ID ITTSYTmKcPQzUhoQDnxwECE4v3oHQj5K2rPI_ofdTaI",
      },
    }
  );
  const data = await response.json();
  const imageUrl = data.urls.regular;

  document.querySelector(
    "body > main"
  ).style.backgroundImage = `url('${imageUrl}')`;
}

getRandomSeaBackground();
