interface RowProp {
  data: TypeDog;
}
export interface TypeDog {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

export const CatsRow = ({ data }: RowProp) => {
  return (
    <tr className="border border-slate-300 ...">
      <td className="border border-slate-300 ...">{data?.breed}</td>
      <td className="border border-slate-300 ...">{data?.country}</td>
      <td className="border border-slate-300 ...">{data?.origin}</td>
      <td className="border border-slate-300 ...">{data?.coat}</td>
      <td className="border border-slate-300 ...">{data?.pattern}</td>
    </tr>
  );
};
