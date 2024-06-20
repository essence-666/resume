async function fetchAPI() {
  const url = 'https://fwd.innopolis.university/api/hw2';
  const params = new URLSearchParams({ email: 'e.belozerov@innopolis.university' });
  const response = await fetch(`${url}?${params.toString()}`);
  try {
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function fetchCOMIC(id) {
  const url = 'https://fwd.innopolis.university/api/comic';
  const params = new URLSearchParams({ id: id });
  const response = await fetch(`${url}?${params.toString()}`);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function displayComic() {
  const data = await fetchCOMIC(await fetchAPI());
  const imageURL = data.img;
  
  const date = new Date(data.year, data.month, data.day);

  const alternativeText = data.alt;
  console.log(date.toLocaleDateString());
  const title = data.safe_title;
  if (imageURL) {
    const div = document.createElement('div');
    const img = document.createElement('img');

    const titleElement = document.createElement('h3');
    const titleText = document.createTextNode(title);
    titleElement.appendChild(titleText);

    const dateText = document.createTextNode(date.toLocaleDateString());
    const dateElement = document.createElement('h3');
    dateElement.appendChild(dateText);

    div.appendChild(titleElement);
    div.appendChild(img);
    div.appendChild(dateElement);

    img.src = imageURL;
    img.alt = alternativeText;


    const container = document.getElementById('image-container');
    container.appendChild(div);

  } else {
    console.error("no url");
  }

}

displayComic();


