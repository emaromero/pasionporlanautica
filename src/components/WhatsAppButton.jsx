const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5491144702726&text=Hola+Luis%2C+te+queria+consultar+por+la+embarcaci%C3%B3n%21&type=phone_number&app_absent=0"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
      <span className="whatsapp-text">Comunicate conmigo</span>
    </a>
  );
};

export default WhatsAppButton;