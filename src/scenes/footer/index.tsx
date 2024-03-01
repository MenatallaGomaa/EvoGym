import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Today Rome. Tomorrow Vienna. Why not?! With an EVOGYM membership, you can train at EVOGYM gyms across Europe, giving you access to top-notch fitness facilities wherever you go.
</p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Help</h4>
          <p className="my-5">Self Service</p>
          <p className="my-5">Help Center</p>
          <p>Cancel Membership</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5"><a href="mailto:test@test.com">test@test.com</a></p>
          <p>(+49) 250921</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;