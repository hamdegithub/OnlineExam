import React, { useContext, useEffect } from 'react';
import { UserContext } from './Components/Contexts/UserContext';
import { Routes, Route,} from 'react-router-dom';
import axios from 'axios';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Views/Footer';
import Header from './Components/Views/Header';
import Header1 from "./Components/Views/Header1" 
import Answer from './Components/Pages/Answer/Answer'
import NewQuestion from './Components/Pages/Question/NewQuestion';
import Login from './Components/Pages/LogIN/Login';
import SignUp from "./Components/Pages/SignIN/Signin"
import Ans_Que from './Components/Pages/Ans_Que/Ans_Que';
import Biology from './Components/Pages/Online/Biology/Biology';
import Biology2023 from './Components/Pages/PastQue/Biology/Biology2023';
import Biology2022 from './Components/Pages/PastQue/Biology/Biology2022';
import Biology2021 from './Components/Pages/PastQue/Biology/Biology2021';
import Biology2020 from './Components/Pages/PastQue/Biology/Biology2020';
import Biology2019 from './Components/Pages/PastQue/Biology/Biology2019';
import Physics2023 from './Components/Pages/PastQue/Physics/Physics2023';
import Physics2022 from './Components/Pages/PastQue/Physics/Physics2022';
import Physics2021 from './Components/Pages/PastQue/Physics/Physics2021';
import Physics2020 from './Components/Pages/PastQue/Physics/Physics2020';
import Physics2019 from './Components/Pages/PastQue/Physics/Physics2019';
import Maths2023 from './Components/Pages/PastQue/Maths/Maths2023';
import Maths2022 from './Components/Pages/PastQue/Maths/Maths2022';
import Maths2021 from './Components/Pages/PastQue/Maths/Maths2021';
import Maths2020 from './Components/Pages/PastQue/Maths/Maths2020';
import Maths2019 from './Components/Pages/PastQue/Maths/Maths2019';
import Amharic2023 from './Components/Pages/PastQue/Amharic/Amharic2023';
import Amharic2022 from './Components/Pages/PastQue/Amharic/Amharic2022';
import Amharic2021 from './Components/Pages/PastQue/Amharic/Amharic2021';
import Amharic2020 from './Components/Pages/PastQue/Amharic/Amharic2020';
import Amharic2019 from './Components/Pages/PastQue/Amharic/Amharic2019';
import Oromo2023 from './Components/Pages/PastQue/Oromo/Oromo2023';
import Oromo2022 from './Components/Pages/PastQue/Oromo/Oromo2022';
import Oromo2021 from './Components/Pages/PastQue/Oromo/Oromo2021';
import Oromo2020 from './Components/Pages/PastQue/Oromo/Oromo2020';
import Oromo2019 from './Components/Pages/PastQue/Oromo/Oromo2019';
import English2023 from './Components/Pages/PastQue/English/English2023';
import English2022 from './Components/Pages/PastQue/English/English2022';
import English2021 from './Components/Pages/PastQue/English/English2021';
import English2020 from './Components/Pages/PastQue/English/English2020';
import English2019 from './Components/Pages/PastQue/English/English2019';
import Civics2023 from './Components/Pages/PastQue/Civics/Civics2023';
import Civics2022 from './Components/Pages/PastQue/Civics/Civics2022';
import Civics2021 from './Components/Pages/PastQue/Civics/Civics2021';
import Civics2020 from './Components/Pages/PastQue/Civics/Civics2020';
import Civics2019 from './Components/Pages/PastQue/Civics/Civics2019';
import Chemistry2023 from './Components/Pages/PastQue/Chemistry/Chemistry2023';
import Chemistry2022 from './Components/Pages/PastQue/Chemistry/Chemistry2022';
import Chemistry2021 from './Components/Pages/PastQue/Chemistry/Chemistry2021';
import Chemistry2020 from './Components/Pages/PastQue/Chemistry/Chemistry2020';
import Chemistry2019 from './Components/Pages/PastQue/Chemistry/Chemistry2019';
import Social2023 from './Components/Pages/PastQue/Social/Social2023';
import Social2022 from './Components/Pages/PastQue/Social/Social2022';
import Social2021 from './Components/Pages/PastQue/Social/Social2021';
import Social2020 from './Components/Pages/PastQue/Social/Social2020';
import Social2019 from './Components/Pages/PastQue/Social/Social2019';


import Maths from './Components/Pages/Online/Maths/Maths';
import Physics from './Components/Pages/Online/Physics/Physics';
import Chemistry from './Components/Pages/Online/Chemistry/Chemistry';
import AfanOromo from './Components/Pages/Online/AfanOromo/AfanOromo';
import Amharic from './Components/Pages/Online/Amharic/Amharic';
import Civics from './Components/Pages/Online/Civics/Civics';
import Social from './Components/Pages/Online/Social/Social';
import English from './Components/Pages/Online/English/English';
import NotFoundPage from './Components/Views/NotFoundPage';
import About from './Components/Pages/About/About';

const App = () => {
  const [userData, setUserData] = useContext(UserContext);

  const checkLoggedIn = async () => {
    let token = localStorage.getItem('auth-token');
    if (token === null) {
      localStorage.setItem('auth-token', '');
      token = '';
    } else {
      const userRes = await axios.get('http://localhost:5000/api/users', {
        headers: { 'x-auth-token': token }
      });
      // console.log(userRes);
      setUserData({
        token,
        user: {
          id: userRes.data.data.user_id,
          display_name: userRes.data.data.user_name
        }
      })
    }
  }
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem('auth-token', '');
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div>
      
      <Routes>

        <Route path="*" element={
                <>
                <NotFoundPage/>
                </>
      } />
      <Route path="/login" element={
                <>
                <Header log={logout} />
                <Login />
                </>
      } />
      <Route path="/signup" element={
                <>
                <Header log={logout}/>
                <SignUp />
                </>
    } />
      <Route path="/ans_que" element={
                  <>
                  <Header1 logout={logout} />
                  <Ans_Que />
                  </>} />
      <Route path="/newquestion" element={
          <>
       <Header1 logout={logout} />
        <NewQuestion /></>}  />
      <Route path="/answer/:id" element={<>
          <Header1 logout={logout} />
          <Answer />
        </>} />
      <Route path="/bio19_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Biology2019 />
                         </>
         } />


      <Route path="/about" element={
                         <>
                         <Header logout={logout} />
                         <About />
                         </>
         } />



      <Route path="/bio20_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Biology2020 />
                         </>
         } />
      <Route path="/bio21_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Biology2021 />
                         </>
         } />
      <Route path="/bio22_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Biology2022 />
                         </>
         } />
      <Route path="/bio23_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Biology2023 />
                         </>
         } />

      <Route path="/maths19_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Maths2019 />
                         </>
         } />
      <Route path="/maths20_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Maths2020 />
                         </>
         } />
      <Route path="/maths21_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Maths2021 />
                         </>
         } />
      <Route path="/maths22_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Maths2022 />
                         </>
         } />
      <Route path="/maths23_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Maths2023 />
                         </>
         } />



      <Route path="/phy19_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Physics2019 />
                         </>
         } />
      <Route path="/phy20_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Physics2020 />
                         </>
         } />
      <Route path="/phy21_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Physics2021 />
                         </>
         } />
      <Route path="/phy22_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Physics2022 />
                         </>
         } />
      <Route path="/phy23_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Physics2023 />
                         </>
         } />
      <Route path="/amh19_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Amharic2019/>
                         </>
         } />
      <Route path="/amh20_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Amharic2020/>
                         </>
         } />
      <Route path="/amh21_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Amharic2021/>
                         </>
         } />
      <Route path="/amh22_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Amharic2022/>
                         </>
         } />
      <Route path="/amh23_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Amharic2023/>
                         </>
         } />

      <Route path="/oro19_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Oromo2019/>
                         </>
         } />
       <Route path="/oro20_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Oromo2020/>
                         </>
         } />
       <Route path="/oro21_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Oromo2021/>
                         </>
         } />
        <Route path="/oro22_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Oromo2022/>
                         </>
         } />
        <Route path="/oro23_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Oromo2023/>
                         </>
         } />


       <Route path="/civ19_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Civics2019/>
                         </>
         } />
        <Route path="/civ20_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Civics2020/>
                         </>
         } />
          <Route path="/civ21_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Civics2021/>
                         </>
         } />
          <Route path="/civ22_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Civics2022/>
                         </>
         } />
          <Route path="/civ23_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Civics2023/>
                         </>
         } />


      <Route path="/chem19_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Chemistry2019/>
                         </>
         } />
          <Route path="/chem20_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Chemistry2020/>
                         </>
         } />
          <Route path="/chem21_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Chemistry2021/>
                         </>
         } />
          <Route path="/chem22_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Chemistry2022/>
                         </>
         } />
          <Route path="/chem23_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Chemistry2023/>
                         </>
         } />

<Route path="/eng19_que" element={
                         <>
                         <Header1 logout={logout} />
                         <English2019/>
                         </>
         } />
          <Route path="/eng20_que" element={
                         <>
                         <Header1 logout={logout} />
                         <English2020/>
                         </>
         } />
          <Route path="/eng21_que" element={
                         <>
                         <Header1 logout={logout} />
                         <English2021/>
                         </>
         } />
          <Route path="/eng22_que" element={
                         <>
                         <Header1 logout={logout} />
                         <English2022/>
                         </>
         } />
          <Route path="/eng23_que" element={
                         <>
                         <Header1 logout={logout} />
                         <English2023/>
                         </>
         } />


<Route path="/soc19_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Social2019/>
                         </>
         } />
         <Route path="/soc20_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Social2020/>
                         </>
         } />
          <Route path="/soc21_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Social2021/>
                         </>
         } />
          <Route path="/soc22_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Social2022/>
                         </>
         } />
          <Route path="/soc23_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Social2023/>
                         </>
         } />




         <Route path="/bio_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Biology />
                         </>
         } />
          <Route path="/maths_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Maths />
                         </>
         } />
          <Route path="/phy_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Physics />
                         </>
         } />
          <Route path="/chem_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Chemistry />
                         </>
         } />
          <Route path="/oro_que" element={
                         <>
                         <Header1 logout={logout} />
                         <AfanOromo />
                         </>
         } />
          <Route path="/amh_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Amharic/>
                         </>
         } />
          <Route path="/soc_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Social/>
                         </>
         } />
          <Route path="/civc_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Civics/>
                         </>
         } />
          <Route path="/eng_que" element={
                         <>
                         <Header1 logout={logout} />
                         <English/>
                         </>
         } />

        <Route path="/" element={<>
        <Header1 log={logout} />
          <Home />
      </>} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App