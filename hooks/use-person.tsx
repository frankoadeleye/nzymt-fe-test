import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function usePerson() {
  const [personsOld, setPersons] = useState([]);
  const [noOfRows, setNoOfRows] = useState<string | number>(10);
  const [isLoading, setLoading] = useState(false);

  const GetPersons = () => {
    const personCall = useCallback(async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fakerapi.it/api/v1/persons?_quantity=${noOfRows}`,
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

  const handleChangeNoOfRow = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNoOfRows(event.target.value);
  };

  const persons = personsOld.map((object) => {
    return { ...object, isOpen: false };
  });

  return { persons, noOfRows, isLoading, handleChangeNoOfRow };
}

export default usePerson;
