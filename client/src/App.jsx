import React, { useContext, useEffect } from 'react';
import { UserContext } from './Components/Contexts/UserContext';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Home from './Components/Pages/Home/Home';
import AdminHome from "./Components/Pages/admin/Home/Home"
import Footer from './Components/Views/Footer';
import Header from './Components/Views/Header';
import Header1 from "./Components/Views/Header1" 
import Header2 from "./Components/Views/Header2"
import Answer from './Components/Pages/Answer/Answer'
import NewQuestion from './Components/Pages/Question/NewQuestion';
import Login from './Components/Pages/LogIN/Login';
import SignUp from "./Components/Pages/SignIN/Signin"
import AdminLogin from './Components/Pages/admin/LogIN/AdminLogin';
import AdminSignUp from "./Components/Pages/admin/SignIN/AdminSignin"
import Ans_Que from './Components/Pages/Ans_Que/Ans_Que';
import PastExam from './Components/Pages/admin/Question/PastExam/NewQuestion';
import Online from './Components/Pages/admin/Question/Online/PhysicsOnline';
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
import Maths from './Components/Pages/Online/Maths/Maths';
import Physics from './Components/Pages/Online/Physics/Physics';
import Chemistry from './Components/Pages/Online/Chemistry/Chemistry';
import AfanOromo from './Components/Pages/Online/AfanOromo/AfanOromo';
import Amharic from './Components/Pages/Online/Amharic/Amharic';
import Civics from './Components/Pages/Online/Civics/Civics';
import Social from './Components/Pages/Online/Social/Social';
import English from './Components/Pages/Online/English/English';
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

     <Route path="/adminHome" element={
                <>
                <Header2></Header2>
                <AdminHome/>
                </>
     }/>


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





          <Route path="/past_que" element={
                         <>
                         <Header2 logout={logout} />
                         <PastExam/>
                         </>
         } />

 {/* Admin */}


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
          <Route path="/onlineeng" element={
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

{/* User */}


          <Route path="/bio19_que" element={
                         <>
                         <Header1 logout={logout} />
                         <Biology2019 />
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