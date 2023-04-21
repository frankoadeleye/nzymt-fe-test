type TItemDetailsProps = {
  data: {
    address: {
      buildingNumber: string;
      latitude: string;
      longitude: string;
      country: string;
      country_code: string;
      city: string;
      street: string;
      streetName: string;
      zipcode: string;
    };
  };
};

function TableItemDetails({ data }: TItemDetailsProps) {
  const {
    buildingNumber,
    latitude,
    longitude,
    country,
    country_code,
    city,
    street,
    streetName,
    zipcode,
  } = data.address;
  return (
    <tr>
      <td>Bulding Number: {buildingNumber}</td>
      <td>
        Cordinates: {latitude} and {longitude}
      </td>
      <td>
        Country: {country}. Country Code: {country_code}
      </td>
      <td>City: {city}</td>
      <td>Street: {street}</td>
      <td>Street Name: {streetName}</td>
      <td>zipcode: {zipcode}</td>
    </tr>
  );
}

export default TableItemDetails;
