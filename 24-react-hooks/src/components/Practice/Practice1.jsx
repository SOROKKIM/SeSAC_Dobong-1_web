import { useForm } from "react-hook-form";

export default function Practice1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch()); // {} 객체 형태로 반환

  const onValid = (data) => {
    console.log("valid", data);
  };
  const onInvalid = (data) => {
    console.log("invalid", data);
    console.log(data.username?.message);
  };

  return (
    <>
      <h1> react-hook-form 실습</h1>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수항목 입니다.",
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="number"
          placeholder="나이"
          {...register("age", { required: "0 이상의 숫자만 입력 가능합니다." })}
        />
        {errors.age?.message}

        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
