import styles from "styles/table.module.scss";
import TableRow from "components/table-row";
import SelectField from "components/select-field";
import usePerson from "hooks/use-person";
import { selectOptions, TbodyHData } from "utils/data";
import { useState, useEffect } from "react";

function Table() {
  const [justMounted, setMounted] = useState(false);
  const {
    persons,
    noOfRows,
    isLoading,
    handleChangeNoOfRow,
    showClickedNumber,
  } = usePerson();
  const [newPersons, setNewPersons] = useState(persons);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th colSpan={6}>Number of Rows</th>
          <th>
            <SelectField
              onChange={handleChangeNoOfRow}
              selectedValue={noOfRows}
              options={selectOptions}
            />
          </th>
        </tr>
      </thead>
      {isLoading ? (
        "Fetching Table Data..."
      ) : (
        <tbody>
          <tr>
            {TbodyHData.map((item, index) => {
              return <td key={index}>{item}</td>;
            })}
          </tr>
          {justMounted
            ? persons.map((person, index) => {
                return (
                  <TableRow
                    onRowClick={() => showClickedNumber(index)}
                    key={person.id}
                    data={person}
                  />
                );
              })
            : newPersons.map((person, index) => {
                return (
                  <TableRow
                    onRowClick={() => showClickedNumber(index)}
                    key={person.id}
                    data={person}
                  />
                );
              })}
        </tbody>
      )}
    </table>
  );
}

export default Table;
