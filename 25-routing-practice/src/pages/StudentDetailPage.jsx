import { useNavigate, useParams } from "react-router-dom";
import Student from "../components/Student";

export default function StudentDetailPage() {
  const { name: studentName } = useParams();
  console.log(studentName);

  const navigate = useNavigate();

  return (
    <main className="studentDetail">
      <Student students={studentName}></Student>
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </main>
  );
}
