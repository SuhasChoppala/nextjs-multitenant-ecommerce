interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav className="bg-amber-50">Home</nav>
      {children}
    </div>
  );
};

export default Layout;
