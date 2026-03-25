import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingHelpButton() {
  return (
    <a
      className="floating-help"
      href="https://wa.me/919558026993"
      target="_blank"
      rel="noreferrer"
      aria-label="Need Help"
    >
      <FaWhatsapp aria-hidden="true" /> Need Help ?
    </a>
  );
}
