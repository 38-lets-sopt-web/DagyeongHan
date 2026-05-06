/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface TableRow {
  label: string;
  value: string;
}

interface TableProps {
  rows: TableRow[];
}

export default function Table({ rows }: TableProps) {
  return (
    <div css={cardStyle}>
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
    </div>
  );
}

const cardStyle = css`
  width: 100%;
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
