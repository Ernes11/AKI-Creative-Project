import React, { useState } from "react";
import "./index.css";


import { Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Event,
  Membership,
} from "./components";

import Resource from "./components/Resource";
import ProjectDetails from "./section/Resources/Creative-Project-section/ProjectDetails/ProjectDetails";
import RecommendationDetails from "./section/Resources/Recomendation-section/RecomendationDetails/RecomendationDetails";
import UtilityDetails from "./section/Resources/Utility/UtilityDetails/UtilityDetails";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";

export default function App() {
    const [lang,setLang] = useState(LOCALES.RUSSIAN)
    const[menuOpen, setMenuOpen] = useState(false)
    const locale = lang
    return (
<IntlProvider messages={messages[locale]}
      locale={locale}>
  
    <Navigation menuOpen= {menuOpen} setMenuOpen = {setMenuOpen} setLang={setLang} lang={lang} />
    <Routes>
      <Route path="/" element={<Home value={lang} />} />
      <Route path="/about" element={<About value = {lang} />} />
      <Route path="/event" element={<Event value={lang} />} />
      <Route path="/membership" element={<Membership value={lang} />} />
      <Route path="/resource" element={<Resource value = {lang}/>} />
      <Route path="/resource/creativeprojects/:Id" element ={<ProjectDetails value = {lang}/>}/>
      <Route path="/resource/recommendations/:Id"element={<RecommendationDetails value = {lang}/>}/>
      <Route path="/resource/utility/:Id" element={<UtilityDetails value = {lang}/>}/>
      <Route path="/resource/creativeprojects" element={<Resource value = {lang}/>} />
      <Route path="/resource/recommendations"element={<Resource value = {lang}/>} />
      <Route path="/resource/utility" element={<Resource value = {lang}/>} />
    </Routes>
    <Footer />
</IntlProvider>
    ) 
}
