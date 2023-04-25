import styles from "styles/table.module.scss";
import TableRow from "components/table-row";
import SelectField from "components/select-field";
import usePerson from "hooks/use-person";
import { selectOptions, FirstNameSortOptions } from "utils/data";
import React from "react";
import TableItemDetails from "components/table-item-details";
import useDetail from "hooks/use-detail";

function Table() {
  const {
    persons,
    noOfRows,
    isLoading,
    handleChangeNoOfRow,
    firstNameDefault,
    handleChangeOfFirstNameSort,
  } = usePerson();
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
      {!isLoading && (
        <tbody>
          <tr>
            <td>Id</td>
            <td>Avatar</td>
            <td>
              <SelectField
                options={FirstNameSortOptions}
                selectedValue={firstNameDefault}
                onChange={handleChangeOfFirstNameSort}
              />
            </td>
            <td>Last Name</td>
            <td>Gender</td>
            <td>Age</td>
            <td>Contact</td>
          </tr>
          {persons.map((person, index) => {
            return (
              <React.Fragment key={person.id}>
                <TableRow
                  onRowClick={() => showDetailsofClickedItem(person.id)}
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
