/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function MyInfoCard() {
  return (
    <div css={cardWrapStyle}>
      <table css={tableWrapStyle}>
        <tr>
          <th>아이디</th>
          <td>hdg0116</td>
        </tr>
        <tr>
          <th>파트</th>
          <td>웹</td>
        </tr>
      </table>
    </div>
  )
}

const cardWrapStyle = css`
  width: 100%;
  padding: 1em;
  background: #2e2e35;
  border-radius: 8px;
`;

const tableWrapStyle = css`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.25rem 0;
    line-height: 1.5;
  }

  th {
    text-align: left;
    font-weight: 700;
  }

  td {
    text-align: right;
    color: #ccc;
    font-weight: 500;
  }
`;