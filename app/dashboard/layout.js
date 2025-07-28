import DashboardNavbar from "./(components)/DashboardNavbar";

export default function HomeLayout({ children }) {
  return (
    <div className=" bg-base-200 min-h-screen">
      <DashboardNavbar />
      <main className="max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
