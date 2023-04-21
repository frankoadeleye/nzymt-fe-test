import styles from "styles/table.module.scss";
import TableRow from "components/table-row";
import SelectField from "components/select-field";
import usePerson from "hooks/use-person";
import { selectOptions, TbodyHData } from "utils/data";
import React from "react";
import TableItemDetails from "components/table-item-details";
import useDetail from "hooks/use-detail";

function Table() {
  const { persons, noOfRows, isLoading, handleChangeNoOfRow } = usePerson();
  const { idOfCurrentItem, isCurrentShowing, showDetailsofClickedItem } =
    useDetail(persons);

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
          {persons.map((person, index) => {
            return (
              <React.Fragment key={person.id}>
                <TableRow
                  onRowClick={() => showDetailsofClickedItem(index)}
                  data={person}
                />
                {person.id === idOfCurrentItem && isCurrentShowing && (
                  <TableItemDetails data={person} />
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      )}
    </table>
  );
}

export default Table;
