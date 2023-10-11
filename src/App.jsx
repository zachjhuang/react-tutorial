import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import TermPage from './components/TermPage';
import CourseEditor from './components/CourseEditor';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Banner title={data.title}/>
            <TermPage courses={data.courses}/>
          </div>
        } />
        <Route path="/CourseEditor/:id" element={<CourseEditor courses={data.courses}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="container">
      <Main/>
    </div>
  </QueryClientProvider>
);

export default App;
