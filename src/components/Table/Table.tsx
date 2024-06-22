import { TypeDog } from "../../pages/Row/CatsRow";

interface TableProps {
  rows: TypeDog[];
  headers: string[];
  Component: React.ComponentType<{ data: TypeDog }>;
}

export const Table = ({ rows, headers, Component }: TableProps) => {
  const renderHeaders = () => headers?.map((h) => <th>{h}</th>);
  return (
    <table className="border-collapse border border-slate-400">
      <thead>
        <tr className="border border-slate-300 ...">{renderHeaders()}</tr>
      </thead>
      {rows?.map((r) => (
        <Component data={r} />
      ))}
    </table>
  );
};
