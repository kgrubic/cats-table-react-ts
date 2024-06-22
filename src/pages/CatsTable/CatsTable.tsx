import { CatsRow, TypeDog } from "../Row/CatsRow";
import { Table } from "../../components/Table/Table";
import { FetchHook } from "../../hooks/fetchHook";

export const DogTable = () => {
  const catsHeaders = ["Breed", "Country", "Origin", "Coat", "Pattern"];
  const cats = FetchHook("https://catfact.ninja/breeds");
  const { data } = cats;
  return (
    <div className="flex place-content-center">
      <Table
        rows={data as TypeDog[]}
        headers={catsHeaders}
        Component={CatsRow}
      />
    </div>
  );
};
