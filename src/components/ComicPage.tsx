import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "./styles/ComicPage.css";

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

const fetchID = async (): Promise<number> => {
  const url: string = "https://fwd.innopolis.university/api/hw2";
  const params = new URLSearchParams({
    email: "e.belozerov@innopolis.university",
  });
  const response = await fetch(`${url}?${params.toString()}`);
  const data = await response.json();
  return data;
};

const fetchCOMIC = async (id: number): Promise<Comic> => {
  const url = "https://fwd.innopolis.university/api/comic";
  const params = new URLSearchParams({ id: id.toString() });
  const response = await fetch(`${url}?${params.toString()}`);
  const data = await response.json();
  return data;
};

const ComicPage: React.FC = () => {
  const [comic, setComic] = useState<Comic | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const id = await fetchID();
      const comicData = await fetchCOMIC(id);
      setComic(comicData);
    };

    fetchData();
  }, []);

  if (!comic) {
    return <div>Loading...</div>;
  }

  const date = format(
    new Date(comic.year, comic.month - 1, comic.day),
    "MMM d, yyyy",
  );

  return (
    <div className="cont" id="image-container">
      <div>
        <h3>{comic.safe_title}</h3>
        <img src={comic.img} alt={comic.alt} />
        <h3>{date}</h3>
      </div>
    </div>
  );
};

export default ComicPage;
