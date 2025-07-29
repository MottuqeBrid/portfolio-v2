import Navbar from "@/components/Navbar";
import Footer from "./(components)/Footer";

export default function HomeLayout({ children }) {
  return (
    <div className=" bg-base-200 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
