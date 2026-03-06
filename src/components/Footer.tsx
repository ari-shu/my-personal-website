const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="font-body text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Your Name
        </p>
        <p className="font-body text-xs text-muted-foreground tracking-wide italic">
          Made with care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
