import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F0F2F5]">
      <Sidebar />
      {/* Spacer div to push content past the fixed sidebar */}
      <div className="w-[220px] flex-shrink-0" />
      <div className="flex-1 min-w-0 flex flex-col">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto" style={{ padding: "24px 28px" }}>{children}</main>
      </div>
    </div>
  );
}
