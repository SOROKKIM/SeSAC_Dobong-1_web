import { Link, useSearchParams } from "react-router-dom";

export default function Student({ students }) {
  const [queryParams, setQueryParams] = useSearchParams();
  const search = queryParams.get("name");
  return (
    <>
      <p>
        학생 이름은
        <span style={{ fontWeight: "bold", color: "blue" }}> {students} </span>
        입니다.
      </p>
      {search && (
        <p>
          실제 학생 이름은
          <span style={{ fontWeight: "bold", color: "red" }}> {search} </span>
          입니다.
        </p>
      )}
    </>
  );
}
