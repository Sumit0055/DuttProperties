import Footer from "@/Components/Footer/Footer";

/**
 * Global chrome. The navbar is rendered by each page component because the
 * landing splash (`/`) intentionally has its own full-screen navigation.
 */
export default function MasterLayout({ children }) {
  return (
    <>
      <div id="main-content">{children}</div>
      <Footer />
    </>
  );
}
