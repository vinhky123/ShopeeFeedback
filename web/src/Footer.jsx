function Footer() {
  const styles = {
    fontFamily: ` "Lato", sans-serif`,
    fontSize: `small`,
    padding: `1em`,
    paddingLeft: `4em`,
    backgroundColor: `#181c24`,
  };

  return (
    <footer className="container text-white text-left" style={styles}>
      <p className="m-0">
        &copy; 2024 Shopee Analyst Demo. All rights reserved.
      </p>
      <p className="m-0">By Le Vinh Ky, Hoang Le Anh Khoa, Ngo Nhat Khanh.</p>
    </footer>
  );
}

export default Footer;
