export const SPOTIFY_API = {
  new_releases_url: "https://api.spotify.com/v1/browse/new-releases",
  categories_url: "https://api.spotify.com/v1/browse/categories",
  artist_url: "https://api.spotify.com/v1/artists/",
  country: "ES",
  locale: "es_ES",
  limit: 9,
  offset: 5,
  authorization:
    "Bearer AQDR_ElJ7zx3KF_Fch1d_9FfG-MbOlPKeX141Np8aL9pTq1IWzDBinnPOdN4tvaRIRniEw201LDaJ1nBL-AGaCDWv5D7wjoYNS5szIrMxdqXF4k602sRtaIx0UvT8G4OHHCjSlT_nBvsMz88blpjm15Bqq9PX6JaNU7Vh8hhSFCPsb1zg9gaH1SwvGSXxBHSh3VKjrnLwgwgRHD19yIFONtESWrPJkuOD3E"
};

export const authentication = () => {
  const redirect = localStorage.forceRedirect;
  if (!location.hash) {
    return;
  }
  const [, tail = ""] = (location.hash || "").split("#access_token=");
  const [access_token = ""] = tail.split("&");
  localStorage.setItem("access_token", access_token);
  if (redirect) {
    localStorage.removeItem("forceRedirect");
    window.location.href = redirect;
  }
};

export const isLogged = () =>
  Boolean(window.localStorage.getItem("access_token"));

export const client = url => {
  const access_token = window.localStorage.getItem("access_token");
  if (!access_token) {
    localStorage.setItem("forceRedirect", window.location.href);
    window.location.href = "/login";
  }

  return fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`
    }
  }).then(res => res.json());
};
