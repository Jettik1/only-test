import { createRoot } from "react-dom/client";
import Timeline from "./Timeline";
import { segments } from "./lib/data";
import { GlobalStyles } from "./styles/globalStyles";
import { MainContainer } from "./styles/styles";

const App = () => {
  return (
    <MainContainer>
      <GlobalStyles />
      <Timeline segments={segments} />
    </MainContainer>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
