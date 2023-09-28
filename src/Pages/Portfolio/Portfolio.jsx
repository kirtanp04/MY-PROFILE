import { useEffect, useState } from "react";
import { portfolio } from "../../data";
import Projects from "../../Components/Portfolio";
import "./portfolio.css";
import Seo from "../../Seo";
import AOS from "aos";
import "aos/dist/aos.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import PageWrapper from "../../../GlobalMotion/Motion";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [types, setType] = useState("all");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <PageWrapper>
        <Seo
          title={"Kirtan Patel | Projects"}
          desc={"This is all my projects that I have done so far."}
        />
        <section className="portfolio section">
          <h2 className="section__title">
            My <span>Portfolio</span>
          </h2>

          <div role="presentation" className="breadcrumb">
            <Breadcrumbs
              sx={{
                "& .MuiBreadcrumbs-separator": {
                  marginLeft: 0,
                  marginRight: 0,
                },
              }}
              maxItems={5}
              aria-label="breadcrumb"
            >
              <motion.span
                initial={{ opacity: 0,x:-100 }}
                animate={{ opacity: 1,x:0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.3 }}
                className="span"
                onClick={() => setType("all")}
              >
                All
              </motion.span>
              <motion.span
                initial={{ opacity: 0,x:-100 }}
                animate={{ opacity: 1,x:0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.5 }}
                className="span"
                onClick={() => setType("Frontend")}
              >
                Frontend + API Applications
              </motion.span>
              <motion.span
                initial={{ opacity: 0,x:-100 }}
                animate={{ opacity: 1,x:0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.7 }}
                className="span"
                onClick={() => setType("Full Stack")}
              >
                Full Stact Applications
              </motion.span>
              <motion.span
               initial={{ opacity: 0,x:-100 }}
                animate={{ opacity: 1,x:0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.9 }}
                className="span"
                onClick={() => setType("Mobile app")}
              >
                Mobile Applications
              </motion.span>
            </Breadcrumbs>
          </div>
          <br />

          <motion.div layout className="portfolio__container container grid">
            {types === "all" ? (
              <>
                {portfolio.map((item) => {
                  return <Projects key={item.id} {...item} />;
                })}
              </>
            ) : (
              <>
                {portfolio
                  .filter((val) => {
                    if (val.type.includes(types)) {
                      return val;
                    }
                  })
                  .map((item) => {
                    return <Projects key={item.id} {...item} />;
                  })}
              </>
            )}
          </motion.div>
        </section>
      </PageWrapper>
    </>
  );
};

export default Portfolio;
