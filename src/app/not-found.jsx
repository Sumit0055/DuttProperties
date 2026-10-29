import Navbar from "@/Components/Header/Navbar";
import ErrorPage from "@/screens/ErrorPage";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <ErrorPage />
      </main>
    </>
  );
}
