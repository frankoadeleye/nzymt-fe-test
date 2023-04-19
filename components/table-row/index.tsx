import ImageWrapper from "common/image-wrapper";
import moment from "moment";
import acronym from "utils/acronym";

type addressProps = {
  buildingNumber: string;
  city: string;
  country: string;
  country_code: string;
  id: string | number;
  latitude: string;
  longitude: string;
  street: string;
  streetName: string;
  zipcode: string;
};

type TableRowProps = {
  data: {
    id: string | number;
    image: HTMLImageElement;
    firstname: string;
    lastname: string;
    gender: string;
    birthday: string;
    phone: string;
    address: addressProps;
    isOpen?: boolean;
  };
  onRowClick?: React.MouseEventHandler<HTMLTableRowElement>;
};

function TableRow({ data, onRowClick }: TableRowProps) {
  const {
    id,
    image,
    firstname,
    lastname,
    gender,
    birthday,
    phone,
    address,
    isOpen,
  } = data;
  return (
    <>
      <tr onClick={onRowClick}>
        <td>{id}</td>
        <td>
          {image ? (
            <ImageWrapper src={image} alt={`${firstname}'s image`} />
          ) : (
            acronym(`${firstname} ${lastname}`)
          )}
        </td>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{gender}</td>
        <td>{moment().diff(birthday, "years")} years old</td>
        <td>{phone}</td>
      </tr>
      {isOpen && (
        <tr>
          <td>Bulding Number: {address.buildingNumber}</td>
          <td>
            Cordinates: {address.latitude} and {address.latitude}
          </td>
          <td>
            Country: {address.country}. Country Code: {address.country_code}
          </td>
          <td>City: {address.city}</td>
          <td>Street: {address.street}</td>
          <td>Street Name: {address.streetName}</td>
          <td>zipcode: {address.zipcode}</td>
        </tr>
      )}
    </>
  );
}

export default TableRow;
