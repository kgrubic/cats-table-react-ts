import { TypeDog } from "../../pages/Row/CatsRow";

interface TableProps {
  rows: TypeDog[];
  headers: string[];
  Component: React.ComponentType<{ data: TypeDog }>;
}

export const Table = ({ rows, headers, Component }: TableProps) => {
  const renderHeaders = () =>
    headers?.map((h) => (
      <th className="border border-spacing-x-1.5 border-slate-300 ...">{h}</th>
    ));
  return (
    <table className="border-separate border border-slate-400">
      <thead>
        <tr className="border border-spacing-x-1.5 border-slate-300 ...">
          {renderHeaders()}
        </tr>
      </thead>
      {rows?.map((r) => (
        <Component data={r} />
      ))}
    </table>
  );
};
