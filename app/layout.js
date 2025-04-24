import "./globals.css";
import NavBar from "./components/NavBar";
import {Provider} from "./components/AuthContext";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}