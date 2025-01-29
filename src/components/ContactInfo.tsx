import { MdEmail, MdPhone } from 'react-icons/md';

const ContactInfo: React.FC = () => {
  return (
    <div className="text-center py-2">
      <div className="flex items-center justify-center space-x-2">
        <MdEmail size={20} />
        <span>haddadmaher@yahoo.com</span>
      </div>
      <div className="flex items-center justify-center space-x-2 mt-2">
        <MdPhone size={20} />
        <a
          href="tel:9736507080"
          className="underline hover:text-[#ffcc00] transition-all duration-300"
        >
          (973)-650-7080
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
