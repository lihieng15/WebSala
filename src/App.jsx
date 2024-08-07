import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import NotFound from "./homepage/pages/NotFound";
import Home from "./homepage/pages/Home";
import About from "./homepage/pages/AboutPage";
import Contact from "./homepage/pages/Contact";
import Layout from "./homepage/layout/Layout";
import ManagementTeamsPage from "./homepage/pages/ManagementTeamsPage";
import SingleMember from "./homepage/components/ManagementTeams/SingleMember";
import SingleContent from "./homepage/components/Contents/SingleContent";
import ListAllContentNews from "./homepage/components/News/ListAllContentNews";
import ListAllContentEvents from "./homepage/components/Events/ListAllContentEvent";
import ListAllContentActivities from "./homepage/components/Activities/ListAllContentActivities";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* homepage */}
          <Route element={<Layout />}>
            {/* pages*/}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/managementteams" element={<ManagementTeamsPage />} />

            <Route path="*" element={<NotFound />} />
            {/* contents */}
            {/* news */}
            <Route path="/schoolnews" element={<ListAllContentNews />} />
            <Route path="/schoolevents" element={<ListAllContentEvents />} />
            <Route path="/activities" element={<ListAllContentActivities />} />
            <Route path="/new/:id" element={<SingleContent />} />
            <Route path="/event/:id" element={<SingleContent />} />
            <Route path="/activities/:id" element={<SingleContent />} />
            {/* <Route path="/new/:title" element={<SchoolNewsPage />} /> */}
            {/* <Route path="/contents" element={<ContentList />} /> */}
            <Route path="/content/:id" element={<SingleContent />} />
            {/* <Route path="/content/:title" element={<SingleContent />} /> */}
            <Route path="*" element={<NotFound />} />
            {/* Teams*/}
            <Route path="/teams/:id" element={<SingleMember />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
