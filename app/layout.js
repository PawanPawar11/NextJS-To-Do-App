import Header from "@/app/header";
import "@/styles/app.scss";
import { ContextProvider } from "@/components/Clients";

export const metadata = {
  title: "To-Do App",
  description: "This is to-do app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <>
            <Header />
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  );
}
