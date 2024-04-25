import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import ForgotpPasswordPage from './pages/login/ForgotpPasswordPage';
import ResetPasswordPage from './pages/login/ResetPasswordPage';
import ErrorLinkPage from './pages/login/ErrorLinkPage';
import InfoPage from './pages/info/InfoPage';
import ManagePage from './pages/manage/ManagePage';
import ContractDetailsPage from './pages/manage/ContractDetailsPage';
import ContractEditPage from './pages/manage/ContractEditPage';
import AddContractPage from './pages/manage/AddContractPage';
import ExploitPage from './pages/manage/ExploitPage';
import AuthorizedPage from './pages/manage/AuthorizedPage';
import AddAuthorizedPage from './pages/manage/AddAuthorizedPage';
import AddRecordPage from './pages/manage/AddRecordPage';
import ExoloitDetailsPage from './pages/manage/ExoloitDetailsPage';
import ExploitEditPage from './pages/manage/ExploitEditPage';
import AddExploitPage from './pages/manage/AddExploitPage';
import RecordPage from './pages/record/RecordPage';
import UpdateRecordPage from './pages/record/UpdateRecordPage';
import ManageRecordPage from './pages/record/ManageRecordPage';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/forgotpassword' element={<ForgotpPasswordPage/>}/>
        <Route path='/resetpassword' element={<ResetPasswordPage/>}/>
        <Route path='/ErrorLink' element={<ErrorLinkPage/>}/>

        <Route path='/Info' element={<InfoPage/>} />

        <Route path='/Manage' element={<ManagePage/>}/>
        <Route path='/ContractDetails' element={<ContractDetailsPage/>}/>
        <Route path='/ContractEdit' element={<ContractEditPage/>}/>
        <Route path='/AddContract' element={<AddContractPage/>}/>
        <Route path='/Authorized' element={<AuthorizedPage/>}/>
        <Route path='/AddAuthorized' element={<AddAuthorizedPage/>}/>
        <Route path='/AddRecord' element={<AddRecordPage/>}/>

        <Route path='/Manage/Exploit' element={<ExploitPage/>}/>
        <Route path='/ExploitDetails' element={<ExoloitDetailsPage/>}/>
        <Route path='/ExploitEdit' element={<ExploitEditPage/>}/>
        <Route path='/AddExploit' element={<AddExploitPage/>}/>

        <Route path='/Record' element={<RecordPage/>}/>
        <Route path='/UpdateRecord' element={<UpdateRecordPage/>}/>
        <Route path='/ManageRecord' element={<ManageRecordPage/>}/>

      </Routes>
    </Router>
  );
}

export default App;
