/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface TableRow {
  label: string;
  value: string;
}

interface TableProps {
  rows: TableRow[];
  emptyMessage?: string;
  height?: string;
}

export default function Table({ rows, emptyMessage, height }: TableProps) {
  return (
    <div css={cardStyle(height)}>
      {rows.length > 0 ? (
        <table css={tableStyle}>
          <tbody>
            {rows.map(({ label, value }, index) => (
              <tr key={`${label}-${index}`}>
                <th scope="row">{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p css={emptyMessageStyle}>{emptyMessage}</p>
      )}
    </div>
  );
}

const cardStyle = (height?: string) => css`
  width: 100%;
  height: ${height};
  display: flex;
  align-items: center;
  padding: 0.875em 1em;
  background: #2e2e35;
  border-radius: 8px;
`;

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.25em 0;
    line-height: 1.5;
  }

  th {
    font-weight: 700;
    text-align: left;
  }

  td {
    color: #ccc;
    font-weight: 500;
    text-align: right;
  }
`;

const emptyMessageStyle = css`
  width: 100%;
  margin: 0;
  color: #ccc;
  font-weight: 500;
  font-size: 0.9375em;
  text-align: center;
`;
