import { QueryClient, QueryClientProvider } from "react-query";
import "./App.scss";
import Main from "../main/main";
import { ReactQueryDevtools } from "react-query/devtools";
import "@fontsource/raleway";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Main />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
