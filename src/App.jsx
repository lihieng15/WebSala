import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// homepage import --------------
import NotFound from "./homepage/pages/NotFound";
import Home from "./homepage/pages/Home";
import About from "./homepage/pages/AboutPage";
import Contact from "./homepage/pages/Contact";
import Layout from "./homepage/layout/Layout";
import ManagementTeamsPage from "./homepage/pages/ManagementTeamsPage";
import EventsPage from "./homepage/pages/EventsPages";
import SingleMember from "./homepage/components/ManagementTeams/SingleMember";
import SingleContent from "./homepage/components/Contents/SingleContent";
import SchoolNewsPage from "./homepage/pages/SchoolNewsPage";
import ListAllContentNews from "./homepage/components/News/ListAllContentNews";
import ListAllContentEvents from "./homepage/components/Events/ListAllContentEvent";
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
            <Route path="/event/:id" element={<EventsPage />} />

            <Route path="*" element={<NotFound />} />
            {/* contents */}
            {/* news */}
            <Route path="/schoolnews" element={<ListAllContentNews />} />
            <Route path="/schoolevents" element={<ListAllContentEvents />} />
            <Route path="/new/:id" element={<SchoolNewsPage />} />
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
