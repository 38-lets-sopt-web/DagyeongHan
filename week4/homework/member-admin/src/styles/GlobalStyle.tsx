import { Global, css } from "@emotion/react";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          width: 100%;
          min-height: 100%;
          margin: 0;
          background: #0f1012;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}
    />
  );
}
