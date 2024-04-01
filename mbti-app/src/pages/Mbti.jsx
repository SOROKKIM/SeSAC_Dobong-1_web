import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import SkyblueButton from "../components/SkyblueButton";
import { next, check } from "../store/modules/mbti";
import Progress from "../components/Progress";

const SurveyQuestion = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
const Vs = styled.p`
  font-size: 2rem;
  padding-top: 1rem;
`;

export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();

  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyblueButton
                text={el.text}
                clickEvent={() => {
                  dispatch(next());
                  dispatch(check(el.result));
                }}
              />
              {index === 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length} />
    </>
  );
}
