import React, { useContext, useEffect } from 'react';
import { UserContext } from './Components/Contexts/UserContext';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminHome from "./Components/Pages/admin/Home/Home"
import Footer from './Components/Views/Footer';
import Header from './Components/Views/Header';
import Header2 from "./Components/Views/Header2"
import Answer from './Components/Pages/Answer/Answer'
import NewQuestion from './Components/Pages/Question/NewQuestion';
import AdminLogin from './Components/Pages/admin/LogIN/AdminLogin';
import AdminSignUp from "./Components/Pages/admin/SignIN/AdminSignin"
import Ans_Que from './Components/Pages/Ans_Que/Ans_Que';
import PastExam from './Components/Pages/admin/Question/PastExam/NewQuestion';
import Biologyadmin2019 from './Components/Pages/admin/PastQue/Biology/Biology2019';
import Biologyadmin2020 from './Components/Pages/admin/PastQue/Biology/Biology2020';
import Biologyadmin2021 from './Components/Pages/admin/PastQue/Biology/Biology2021';
import Biologyadmin2022 from './Components/Pages/admin/PastQue/Biology/Biology2022';
import Biologyadmin2023 from './Components/Pages/admin/PastQue/Biology/Biology2023';
import Mathsadmin2019 from './Components/Pages/admin/PastQue/Maths/Maths2019';
import Mathsadmin2020 from './Components/Pages/admin/PastQue/Maths/Maths2020';
import Mathsadmin2021 from './Components/Pages/admin/PastQue/Maths/Maths2021';
import Mathsadmin2022 from './Components/Pages/admin/PastQue/Maths/Maths2022';
import Mathsadmin2023 from './Components/Pages/admin/PastQue/Maths/Maths2023';
import Physicsadmin2019 from './Components/Pages/admin/PastQue/Physics/Physics2019';
import Physicsadmin2020 from './Components/Pages/admin/PastQue/Physics/Physics2020';
import Physicsadmin2021 from './Components/Pages/admin/PastQue/Physics/Physics2021';
import Physicsadmin2022 from './Components/Pages/admin/PastQue/Physics/Physics2022';
import Physicsadmin2023 from './Components/Pages/admin/PastQue/Physics/Physics2023';
import Amharicadmin2019 from './Components/Pages/admin/PastQue/Amharic/Amharic2019';
import Amharicadmin2020 from './Components/Pages/admin/PastQue/Amharic/Amharic2020';
import Amharicadmin2021 from './Components/Pages/admin/PastQue/Amharic/Amharic2021';
import Amharicadmin2022 from './Components/Pages/admin/PastQue/Amharic/Amharic2022';
import Amharicadmin2023 from './Components/Pages/admin/PastQue/Amharic/Amharic2023';
import Oromoadmin2019 from './Components/Pages/admin/PastQue/Oromo/Oromo2019';
import Oromoadmin2020 from './Components/Pages/admin/PastQue/Oromo/Oromo2020';
import Oromoadmin2021 from './Components/Pages/admin/PastQue/Oromo/Oromo2021';
import Oromoadmin2022 from './Components/Pages/admin/PastQue/Oromo/Oromo2022';
import Oromoadmin2023 from './Components/Pages/admin/PastQue/Oromo/Oromo2023';
import Englishadmin2019 from './Components/Pages/admin/PastQue/English/English2019';
import Englishadmin2020 from './Components/Pages/admin/PastQue/English/English2020';
import Englishadmin2021 from './Components/Pages/admin/PastQue/English/English2021';
import Englishadmin2022 from './Components/Pages/admin/PastQue/English/English2022';
import Englishadmin2023 from './Components/Pages/admin/PastQue/English/English2023';
import Civicsadmin2019 from './Components/Pages/admin/PastQue/Civics/Civics2019';
import Civicsadmin2020 from './Components/Pages/admin/PastQue/Civics/Civics2020';
import Civicsadmin2021 from './Components/Pages/admin/PastQue/Civics/Civics2021';
import Civicsadmin2022 from './Components/Pages/admin/PastQue/Civics/Civics2022';
import Civicsadmin2023 from './Components/Pages/admin/PastQue/Civics/Civics2023';
import Socialadmin2019 from './Components/Pages/admin/PastQue/Social/Social2019';
import Socialadmin2020 from './Components/Pages/admin/PastQue/Social/Social2020';
import Socialadmin2021 from './Components/Pages/admin/PastQue/Social/Social2021';
import Socialadmin2022 from './Components/Pages/admin/PastQue/Social/Social2022';
import Socialadmin2023 from './Components/Pages/admin/PastQue/Social/Social2023';
import Chemistryadmin2019 from './Components/Pages/admin/PastQue/Chemistry/Chemistry2019';
import Chemistryadmin2020 from './Components/Pages/admin/PastQue/Chemistry/Chemistry2020';
import Chemistryadmin2021 from './Components/Pages/admin/PastQue/Chemistry/Chemistry2021';
import Chemistryadmin2022 from './Components/Pages/admin/PastQue/Chemistry/Chemistry2022';
import Chemistryadmin2023 from './Components/Pages/admin/PastQue/Chemistry/Chemistry2023';

import BiologyOnline from './Components/Pages/admin/Question/Online/BiologyOnline';
import PhysicsOnline from './Components/Pages/admin/Question/Online/PhysicsOnline';
import MathsOnline from './Components/Pages/admin/Question/Online/MathsOnline';
import AmharicOnline from './Components/Pages/admin/Question/Online/AmharicOnline';
import EnglishOnline from './Components/Pages/admin/Question/Online/EnglishOnline';
import OromoOnline from './Components/Pages/admin/Question/Online/OromoOnline.jsx';
import CivicsOnline from './Components/Pages/admin/Question/Online/CivicsOnline';
import SocialOnline from './Components/Pages/admin/Question/Online/SocialOnline';
import ChemistryOnline from './Components/Pages/admin/Question/Online/ChemistryOnline';
import NotFoundPage from './Components/Views/NotFoundPage';
import BiologyAdmin from './Components/Pages/admin/Online/Biology/BiologyAdmin';
import MathsAdmin from './Components/Pages/admin/Online/Maths/MathsAdmin';
import PhysicsAdmin from './Components/Pages/admin/Online/Physics/PhysicsAdmin';
import ChemistryAdmin from './Components/Pages/admin/Online/Chemistry/ChemistryAdmin';
import AfanOromoAdmin from './Components/Pages/admin/Online/AfanOromo/AfanOromoAdmin';
import AmharicAdmin from './Components/Pages/admin/Online/Amharic/AmharicAdmin';
import SocialAdmin from './Components/Pages/admin/Online/Social/SocialAdmin';
import CivicsAdmin from './Components/Pages/admin/Online/Civics/CivicsAdmin';
import EnglishAdmin from './Components/Pages/admin/Online/English/EnglishAdmin';
import Books from './Components/Pages/admin/Books/Books';

const App = () => {
  const [userData, setUserData] = useContext(UserContext);
 const checkLoggedIn = async () => {
    let token = localStorage.getItem('auth-token');
    if (token === null) {
      localStorage.setItem('auth-token', '');
      token = '';
    } else {
      const userRes = await axios.get('http://localhost:4000/api/admins', {
        headers: { 'x-auth-token': token }
      });
      // console.log(userRes);
      setUserData({
        token,
        user: {
          id: userRes.data.data.admin_id,
          display_name: userRes.data.data.admin_name
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
        <Route path="/adminlogin" element={
                <>
                <Header log={logout} />
                <AdminLogin/>
                </>
      } />
        <Route path="/adminsignup" element={
                <>
                <Header log={logout}/>
                <AdminSignUp/>
                </>
      } />

     <Route path="/" element={
                <>
                <Header2></Header2>
                <AdminHome/>
                </>
     }/>

     <Route path="/ans_que" element={
                  <>
                  <Header2 logout={logout} />
                  <Ans_Que />
                  </>} />
        <Route path="/newquestion" element={
          <>
       <Header2 logout={logout} />
        <NewQuestion /></>}  />
        <Route path="/answer/:id" element={<>
          <Header2 logout={logout} />
          <Answer />
        </>} />
          <Route path="/past_que" element={
                         <>
                         <Header2 logout={logout} />
                         <PastExam/>
                         </>
         } />


          <Route path="/onlinebio" element={
                         <>
                         <Header2 logout={logout} />
                         <BiologyOnline/>
                         </>
         } />
          <Route path="/onlinemaths" element={
                         <>
                         <Header2 logout={logout} />
                         <MathsOnline/>
                         </>
         } />
          <Route path="/onlinephy" element={
                         <>
                         <Header2 logout={logout} />
                         <PhysicsOnline/>
                         </>
         } />
          <Route path="/onlineoro" element={
                         <>
                         <Header2 logout={logout} />
                         <OromoOnline/>
                         </>
         } />
          <Route path="/onlineamh" element={
                         <>
                         <Header2 logout={logout} />
                         <AmharicOnline/>
                         </>
         } />
          <Route path="/onlineng" element={
                         <>
                         <Header2 logout={logout} />
                         <EnglishOnline/>
                         </>
         } />
          <Route path="/onlinecivc" element={
                         <>
                         <Header2 logout={logout} />
                         <CivicsOnline/>
                         </>
         } />
          <Route path="/onlinesoc" element={
                         <>
                         <Header2 logout={logout} />
                         <SocialOnline/>
                         </>
         } />
          <Route path="/onlinechem" element={
                         <>
                         <Header2 logout={logout} />
                         <ChemistryOnline/>
                         </>
         } />



<Route path="/bio_queadmin" element={
                         <>
                         <Header2 logout={logout} />
                         <BiologyAdmin />
                         </>
         } />
          <Route path="/maths_queadmin" element={
                         <>
                         <Header2 logout={logout} />
                         <MathsAdmin />
                         </>
         } />
          <Route path="/phy_queadmin" element={
                         <>
                         <Header2 logout={logout} />
                         <PhysicsAdmin />
                         </>
         } />
          <Route path="/chem_queadmin" element={
                         <>
                         <Header2 logout={logout} />
                         <ChemistryAdmin />
                         </>
         } />
          <Route path="/oro_queadmin" element={
                         <>
                         <Header2 logout={logout} />
                         <AfanOromoAdmin />
                         </>
         } />
          <Route path="/amh_queadmin" element={
                         <>
                         <Header2 logout={logout} />
                         <AmharicAdmin/>
                         </>
         } />
          <Route path="/soc_queadmin" element={
                         <>
                         <Header2 logout={logout} />
                         <SocialAdmin/>
                         </>
         } />
          <Route path="/civc_queadmin" element={
                         <>
                         <Header2 logout={logout} />
                         <CivicsAdmin/>
                         </>
         } />
          <Route path="/eng_queadmin" element={
                         <>
                         <Header2 logout={logout} />
                         <EnglishAdmin/>
                         </>
         } />





          <Route path="/bioadmin19_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Biologyadmin2019/>
                         </>
         } />
          <Route path="/bioadmin20_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Biologyadmin2020/>
                         </>
         } />
          <Route path="/bioadmin21_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Biologyadmin2021/>
                         </>
         } />
          <Route path="/bioadmin22_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Biologyadmin2022/>
                         </>
         } />
          <Route path="/bioadmin23_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Biologyadmin2023/>
                         </>
         } />


          <Route path="/mathsadmin19_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Mathsadmin2019/>
                         </>
         } />
          <Route path="/mathsadmin20_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Mathsadmin2020/>
                         </>
         } />
          <Route path="/mathsadmin21_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Mathsadmin2021/>
                         </>
         } />
          <Route path="/mathsadmin22_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Mathsadmin2022/>
                         </>
         } />
          <Route path="/mathsadmin23_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Mathsadmin2023/>
                         </>
         } />


          <Route path="/phyadmin19_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Physicsadmin2019/>
                         </>
         } />
          <Route path="/phyadmin20_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Physicsadmin2020/>
                         </>
         } />
          <Route path="/phyadmin21_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Physicsadmin2021/>
                         </>
         } />
          <Route path="/phyadmin22_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Physicsadmin2022/>
                         </>
         } />
          <Route path="/phyadmin23_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Physicsadmin2023/>
                         </>
         } />


<Route path="/amhadmin19_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Amharicadmin2019/>
                         </>
         } />
          <Route path="/amhadmin20_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Amharicadmin2020/>
                         </>
         } />
          <Route path="/amhadmin21_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Amharicadmin2021/>
                         </>
         } />
          <Route path="/amhadmin22_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Amharicadmin2022/>
                         </>
         } />
          <Route path="/amhadmin23_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Amharicadmin2023/>
                         </>
         } />

<Route path="/oroadmin19_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Oromoadmin2019/>
                         </>
         } />
          <Route path="/oroadmin20_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Oromoadmin2020/>
                         </>
         } />
          <Route path="/oroadmin21_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Oromoadmin2021/>
                         </>
         } />
          <Route path="/oroadmin22_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Oromoadmin2022/>
                         </>
         } />
          <Route path="/oroadmin23_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Oromoadmin2023/>
                         </>
         } />


<Route path="/civadmin19_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Civicsadmin2019/>
                         </>
         } />
          <Route path="/civadmin20_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Civicsadmin2020/>
                         </>
         } />
          <Route path="/civadmin21_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Civicsadmin2021/>
                         </>
         } />
          <Route path="/civadmin22_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Civicsadmin2022/>
                         </>
         } />
          <Route path="/civadmin23_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Civicsadmin2023/>
                         </>
         } />


      <Route path="/chemadmin19_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Chemistryadmin2019/>
                         </>
         } />
          <Route path="/chemadmin20_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Chemistryadmin2020/>
                         </>
         } />
          <Route path="/chemadmin21_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Chemistryadmin2021/>
                         </>
         } />
          <Route path="/chemadmin22_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Chemistryadmin2022/>
                         </>
         } />
          <Route path="/chemadmin23_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Chemistryadmin2023/>
                         </>
         } />

<Route path="/engadmin19_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Englishadmin2019/>
                         </>
         } />
          <Route path="/engadmin20_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Englishadmin2020/>
                         </>
         } />
          <Route path="/engadmin21_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Englishadmin2021/>
                         </>
         } />
          <Route path="/engadmin22_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Englishadmin2022/>
                         </>
         } />
          <Route path="/engadmin23_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Englishadmin2023/>
                         </>
         } />


<Route path="/socadmin19_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Socialadmin2019/>
                         </>
         } />
         <Route path="/socadmin20_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Socialadmin2020/>
                         </>
         } />
          <Route path="/socadmin21_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Socialadmin2021/>
                         </>
         } />
          <Route path="/socadmin22_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Socialadmin2022/>
                         </>
         } />
          <Route path="/socadmin23_que" element={
                         <>
                         <Header2 logout={logout} />
                         <Socialadmin2023/>
                         </>
         } />
          <Route path="/books" element={
                         <>
                         <Header2 logout={logout} />
                         <Books/>
                         </>
         } />

      </Routes>
      <Footer />
      
    </div>
  );
}

export default App