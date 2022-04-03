import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {

  Navigation,
  Footer,
  Home,
  About,
  Event,
  JoinUs,
  Membership
} from "./components";

import Resource from './components/Resource';
import ProjectDetails from './section/Resources/Creative-Project-section/ProjectDetails/ProjectDetails';
import RecommendationDetails from "./section/Resources/Recomendation-section/RecomendationDetails/RecomendationDetails";
import UtilityDetails from "./section/Resources/Utility/UtilityDetails/UtilityDetails";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";

export default function App() {
    const locale = LOCALES.ENGLISH
// const [lang,setLang] = useState(LOCALES.ENGLISH)
    return (
<IntlProvider messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.KYRGYZSTAN}>
  
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/event" element={<Event />} />
      <Route path="/joinUs" element={<JoinUs />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/resource" element={<Resource/>} />
      <Route path="/resource/creativeprojects/:Id" element ={<ProjectDetails/>}/>
      <Route path="/resource/recommendations/:Id"element={<RecommendationDetails/>}/>
      <Route path="/resource/utility/:Id" element={<UtilityDetails/>}/>
      <Route path="/resource/creativeprojects" element={<Resource/>} />
      <Route path="/resource/recommendations"element={<Resource/>} />
      <Route path="/resource/utility" element={<Resource/>} />
    </Routes>
    <Footer />
</IntlProvider>
    ) 
}