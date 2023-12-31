import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import TermPage from './components/TermPage';
import CourseEditor from './components/CourseEditor';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDbData } from './utilities/firebase';

const Main = () => {
  const [data, error] = useDbData('/');
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (
    <div>
      <nav className='d-flex'>
        <Banner title={data.title}/>
        <Navigation className='btn btn-outline-dark ms-auto'/>
      </nav>
      <hr></hr>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TermPage courses={data.courses} />} />
          <Route path="/CourseEditor/:id" element={<CourseEditor courses={data.courses} />} />
        </Routes>
      </BrowserRouter>
    </div>
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
