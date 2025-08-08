// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark-mode-surface border-t dark:border-gray-800 mt-16">
      <div className="container mx-auto py-8 px-4 text-center text-gray-500 dark:text-dark-mode-muted-text">
        <p>&copy; {new Date().getFullYear()} Lumi Aquarium. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;