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
    </>
  );
}

export default TableRow;
