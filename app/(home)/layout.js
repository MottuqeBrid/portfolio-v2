import Navbar from "@/components/Navbar";

export default function HomeLayout({ children }) {
  return (
    <div className=" bg-base-200 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
