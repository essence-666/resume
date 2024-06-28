import { format } from "../node_modules/date-fns/format";

interface Comic {
  id: number;
  day: number;
  month: number;
  year: number;
  img: string;
  alt: string;
  title: string;
  safe_title: string;
}

async function fetchID() {
  const url: string = "https://fwd.innopolis.university/api/hw2";
  const params = new URLSearchParams({
    email: "e.belozerov@innopolis.university",
  });
  return await fetch(`${url}?${params.toString()}`).then((res) => {
    return res.json();
  });
}

async function fetchCOMIC(id: number): Promise<Comic> {
  const url = "https://fwd.innopolis.university/api/comic";
  const params = new URLSearchParams({ id: id.toString() });
  return await fetch(`${url}?${params.toString()}`).then((res) => {
    return res.json();
  });
}

async function displayComic() {
  const data: Comic = await fetchCOMIC(await fetchID());

  const date = format(new Date(data.year, data.month, data.day), "MMM d, yyyy");

  const div = document.createElement("div");
  const img = document.createElement("img");

  const titleElement = document.createElement("h3");
  const titleText = document.createTextNode(data.safe_title);
  titleElement.appendChild(titleText);

  const dateText = document.createTextNode(date);
  const dateElement = document.createElement("h3");
  dateElement.appendChild(dateText);

  div.appendChild(titleElement);
  div.appendChild(img);
  div.appendChild(dateElement);

  img.src = data.img;
  img.alt = data.alt;

  const container = document.getElementById("image-container");

  if (container != null) {
    container.appendChild(div);
  }
}

displayComic();
