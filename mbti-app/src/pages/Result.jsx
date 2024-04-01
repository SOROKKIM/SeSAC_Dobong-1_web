import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import PinkButton from "../components/PinkButton";
import { reset } from "../store/modules/mbti";
const Header = styled.p`
  font-size: 3em;
`;
const Explaination = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const StyledResult = styled.p`
  font-size: 3em;
  color: dodgerblue;
`;
const Additional = styled.p`
  font-size: 2em;
  color: orange;
`;
const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;
export default function Result() {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explanation = useSelector((state) => state.mbti.explanations[result]);
  const dispatch = useDispatch();
  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explaination>{explanation.text}</Explaination>
      <StyledResult>{result}</StyledResult>
      <Additional>이건 재미로 읽어 보세요!</Additional>
      <AdditionalImg src={process.env.PUBLIC_URL + explanation.img} alt="img" />
      <PinkButton text="다시 검사하기" clickEvent={() => dispatch(reset())} />
    </>
  );
}
