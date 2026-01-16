import { motion } from "framer-motion";
const WhatsAppButton = () => {
  const phoneNumber = "5527992632281";
  const message = "Olá! Gostaria de saber mais sobre os serviços de Pet Sitting.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return;
};
export default WhatsAppButton;