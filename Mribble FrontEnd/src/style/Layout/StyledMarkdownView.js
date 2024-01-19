import styled from "styled-components";

export const MarkdownView = styled.div`
  margin-top: 50px;
  color: white;

  /* 헤더 스타일링 */
  h1, h2, h3, h4, h5, h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: bold;
  }

  /* 각 헤더 레벨에 대한 크기 조정 */
  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  /* 단락 스타일링 */
  p {
    margin-top: 0;
    margin-bottom: 1.5em;
    line-height: 1.6;
    font-size: 20px;
  }

  /* 강조 텍스트 스타일링 */
  strong {
    font-weight: bold;
    margin: 5px;
    font-size: 1.2em;
  }

  hr{
    border: 1px solid #ddd;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  /* 목록 스타일링 */
  ul, ol {
    margin-top: 0;
    margin-bottom: 1em;
    padding-left: 20px;
    list-style-position: inside;
  }

  /* 순서가 없는 리스트에 대한 스타일 */
  ul {
    list-style-type: disc; /* 또는 'circle' 또는 'square' */
    margin: 50px 0px;
  }

  /* 순서가 있는 리스트에 대한 스타일 */
  ol {
    list-style-type: decimal; /* 또는 'lower-alpha', 'upper-alpha', 등 */
  }

  li {
    margin-bottom: 1.5em;
    font-size: 17px;
  }

  /* 링크 스타일링 */
  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  /* 코드 블록 스타일링 */
  code {
    font-family: 'Courier New', Courier, monospace;
    background-color: #f6f8fa;
    padding: 0.2em 0.4em;
    font-size: 0.9em;
    border-radius: 3px;
  }

  /* 인용문 스타일링 */
  blockquote {
    border-left: 4px solid #ddd;
    padding-left: 16px;
    margin-left: 0;
    color: #666;
    font-style: italic;
  }

  /* 이미지 스타일링 */
  img {
    max-width: 100%;
    height: auto;
  }
`;
