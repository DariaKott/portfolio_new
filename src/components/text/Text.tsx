import styled from "styled-components";
import { theme } from "../../assets/styles/Theme";
import { font } from "../../assets/styles/Common";

export const Text = styled.div`
  ${font( {family: "'Nunito', sans-serif", weight: 400, Fmax: 24, Fmin: 18, lineHeight: 1.5, color: theme.colors.texts})};
`;