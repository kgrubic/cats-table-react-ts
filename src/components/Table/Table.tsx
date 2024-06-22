import { TypeDog } from "../../pages/Row/CatsRow";

interface TableProps {
  rows: TypeDog[];
  headers: string[];
  Component: React.ComponentType<{ data: TypeDog }>;
}

export const Table = ({ rows, headers, Component }: TableProps) => {
  const renderHeaders = () => headers?.map((h) => <th>{h}</th>);
  return (
    <table>
      <thead>
        <tr>{renderHeaders()}</tr>
      </thead>
      {rows?.map((r) => (
        <Component data={r} />
      ))}
    </table>
  );
};
