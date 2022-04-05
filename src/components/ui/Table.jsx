import userImg from "../../assets/img_avatar.png";

function Table(props) {
  // console.log(props.data);

  // props.data.map((row) => console.log(row["id"]));

  // props.data.map((row) => console.log(row["name"]));

  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          {props.columns.map((column) => (
            <th scope="col" key={column}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row) => (
          <tr key={row["id"]}>
            {Object.keys(props.data_keys).map((cell) => {
              if (props.data_keys[cell] === "userImg") {
                return <img src={userImg} alt="..." className="circleImage" />;
              } else {
                return (
                  <td key={`${row["id"]}-${cell}`}>
                    {row[props.data_keys[cell]]}
                  </td>
                );
              }
            })}
            <td>INSERT ACTIONS</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
