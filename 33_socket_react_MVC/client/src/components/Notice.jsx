export default function Notice({ chat }) {
  // chat = {
  //         type: "notice",
  //         content: "공고 메세지 ~ 님 입장 ~퇴장",
  //       },
  return (
    <>
      <div className="notice">{chat.content}</div>
    </>
  );
}
