import React from "react";
import { isImageUrl } from "../utils/regex";
import { idDateFormatter } from "../utils/dateFormat";

export default function NewsDetail({ data, onBack }) {
  const { title, author, date, categories, content } = data;

  return (
    <article className="article">
      <button onClick={onBack} className="back-button">
        Kembali
      </button>
      <div className="title-wrapper">
        <h1>{title}</h1>
        <span>
          <strong>{author}</strong> - {idDateFormatter(date)}
        </span>
        <div className="categories-wrapper">
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </div>
      {content.map((item, index) => {
        const isUrl = item.startsWith("http");
        const isImage = isImageUrl(item);

        if (isUrl && isImage) {
          return <img key={index} src={item} alt={`content-${index}`} />;
        }

        if (isUrl) {
          return (
            <iframe
              key={index}
              src={item}
              title={`frame-${index}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="video"
            />
          );
        }

        return <p key={index}>{item}</p>;
      })}
      )
    </article>
  );
}
