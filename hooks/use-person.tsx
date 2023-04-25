import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function usePerson() {
  /*_____________________________ HANDLE GET PERSONS DATA _______________________________ */
  const [persons, setPersons] = useState([]);
  const [noOfRows, setNoOfRows] = useState<string | number>(10);
  const [isLoading, setLoading] = useState(false);
  const [updatedPersons, setUpdatedPersons] = useState(persons);

  /*_______________________________  HANDLE SORTING BY FIRST NAME________________________*/

  const [firstNameDefault, setFirstNameDefault] = useState<string>("Ascending");

  const GetPersons = () => {
    const personCall = useCallback(async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}?_quantity=${noOfRows}`,
          { headers: {} }
        );
        setLoading(false);
        console.log(response.data.data);
        setPersons(response.data.data);
      } catch (error) {
        setLoading(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [noOfRows]);

    return { personCall };
  };

  const { personCall } = GetPersons();

  useEffect(() => {
    personCall();
  }, [personCall]);

  useEffect(() => {
    persons.sort((p1, p2) =>
      p1.firstname < p2.firstname ? 1 : p1.firstname > p2.firstname ? -1 : 0
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [persons, firstNameDefault === "Descending"]);

  const handleChangeNoOfRow = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNoOfRows(event.target.value);
  };

  if (!isLoading && firstNameDefault === "Ascending") {
    persons.sort((p1, p2) =>
      p1.firstname < p2.firstname ? -1 : p1.firstname > p2.firstname ? 1 : 0
    );
  }

  const handleChangeOfFirstNameSort = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFirstNameDefault(event.target.value);
  };

  return {
    persons,
    noOfRows,
    isLoading,
    handleChangeNoOfRow,
    firstNameDefault,
    handleChangeOfFirstNameSort,
  };
}

export default usePerson;
