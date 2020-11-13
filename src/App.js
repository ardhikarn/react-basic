import "./App.css";
import TodoList from "./pages/TodoList";
import { ThemeProvider } from "@emotion/react";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
