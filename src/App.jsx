import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// homepage import --------------
import NotFoundPage from "./homepage/pages/NotFoundPage";
import Home from "./homepage/pages/Home";
import About from "./homepage/pages/About";
import Contact from "./homepage/pages/Contact";
import OurPrograms from "./homepage/pages/OurProgramsPage";
import Layout from "./homepage/layout/Layout";
import CategoryList from "./homepage/components/Categories/CategoryList";
import ListByCategory from "./homepage/components/Categories/ListByCategory";
import ListByArticle from "./homepage/components/Articles/ListByArticle";
import Admission from "./homepage/pages/Admission";
import AllArtByCat from "./homepage/components/Categories/AllArtByCat";
import ArticleList from "./homepage/components/Articles/ArticleList";
import NewsPage from "./homepage/pages/NewsPage";
import ManagementTeamsPage from "./homepage/pages/ManagementTeamsPage";
import EventsPage from "./homepage/pages/EventsPages";
import SingleMember from "./homepage/components/ManagementTeams/SingleMember";
import SingleContent from "./homepage/components/Contents/SingleContent";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*   homepage route */}
          <Route element={<Layout />}>
            {/* pages*/}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourprograms" element={<OurPrograms />} />
            <Route path="/managementteams" element={<ManagementTeamsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/event/:id" element={<EventsPage />} />
            {/* <Route path="/events" element={<EventsPage />} /> */}
            <Route path="/admission" element={<Admission />} />
            {/* categories*/}
            <Route path="/category" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/category/:id" element={<ListByCategory />} />
            <Route path="/category/:id/articles" component={<AllArtByCat />} />
            {/* articles*/}
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/article/:id" element={<ListByArticle />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* contents */}
            {/* <Route path="/contents" element={<ContentList />} /> */}
            <Route path="/content/:id" element={<SingleContent />} />
            {/* <Route path="/content/:title" element={<SingleContent />} /> */}
            <Route path="*" element={<NotFoundPage />} />
            {/* Teams*/}
            <Route path="/teams/:id" element={<SingleMember />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
