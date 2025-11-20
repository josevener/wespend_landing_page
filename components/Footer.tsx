export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center border-t border-gray-700">
      <div className="flex justify-center gap-4 mb-2">
        <a href="#" className="hover:text-teal-400 transition">Twitter</a>
        <a href="#" className="hover:text-teal-400 transition">Facebook</a>
        <a href="#" className="hover:text-teal-400 transition">Instagram</a>
      </div>
      <p className="text-sm text-gray-400">&copy; 2025 WeSpend. All rights reserved.</p>
    </footer>
  );
}
