import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  .thumnail {
    margin-right: 1em;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  // 아이템 블럭과 블럭 사이 의미
  & + & {
    margin-top: 3em;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumnail">
          <a href={url} target="blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="썸네일" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
