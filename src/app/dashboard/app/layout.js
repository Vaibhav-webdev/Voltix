import Navbar2 from "../components/navbar2";

export default function ResumeLayout({ children }) {
  return (
    <div>
        <Navbar2 />
      {children}
    </div>
  );
}