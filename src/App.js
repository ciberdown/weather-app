import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Main from "./components/main";
import { ReactQueryDevtools } from "react-query/devtools";

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
