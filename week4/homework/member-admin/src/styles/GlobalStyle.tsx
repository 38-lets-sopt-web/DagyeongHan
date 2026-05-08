import { Global, css } from "@emotion/react";
import type { Theme } from "@emotion/react";

export default function GlobalStyle() {
  return (
    <Global
      styles={globalStyle}
    />
  );
}

const globalStyle = (theme: Theme) => css`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          width: 100%;
          min-height: 100%;
          margin: 0;
          background: ${theme.colors.background};
          color: ${theme.colors.text};
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `;
