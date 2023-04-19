import styles from "styles/table.module.scss";
import TableRow from "components/table-row";
import SelectField from "components/select-field";
import usePerson from "hooks/use-person";
import { selectOptions, TbodyHData } from "utils/data";
import { useState, useEffect } from "react";

function Table() {
  const [justMounted, setMounted] = useState(false);
  const { persons, noOfRows, isLoading, handleChangeNoOfRow } = usePerson();
  const [newPersons, setNewPersons] = useState(persons);

  const showClickedNumber = (index) => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].id === index + 1) {
        persons[i].isOpen = !persons[i].isOpen;
        setNewPersons(persons);
        setMounted(false);
      }
    }
  };

  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noOfRows]);

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
