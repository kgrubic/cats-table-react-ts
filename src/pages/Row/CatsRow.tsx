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
    <tr>
      <td>{data?.breed}</td>
      <td>{data?.country}</td>
      <td>{data?.origin}</td>
      <td>{data?.coat}</td>
      <td>{data?.pattern}</td>
    </tr>
  );
};
