import Footer from "@/Components/Footer/Footer";
import FloatingSocialGate from "@/Components/FloatingSocial/FloatingSocialGate";

/**
 * Global chrome. The navbar is rendered by each page component because the
 * landing splash (`/`) intentionally has its own full-screen navigation.
 * The floating social panel is mounted here so every page gets it; the gate
 * keeps it off the landing splash and the intro sequence.
 */
export default function MasterLayout({ children }) {
  return (
    <>
      <div id="main-content">{children}</div>
      <Footer />
      <FloatingSocialGate />
    </>
  );
}
