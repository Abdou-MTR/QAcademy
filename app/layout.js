import "@styles/globals.css";
import Provider from "@components/Provider";
import Footer from "@components/Footer";
import Nav from "@components/Navbar";

export const metadata = {
  title: "QAcademy",
  description:
    "Discover & Share Ai PromptsQAcademy is a user-friendly website tailored for third-year students, with the goal of simplifying the examination process. This interactive platform revolves around a Multiple-Choice Questionnaire",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          {" "}
          <div className="main">
            <Nav />
            <main className="app">{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;
