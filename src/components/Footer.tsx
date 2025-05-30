export default function Footer() {
  return (
    <footer className="py-4 text-center text-gray-50 text-sm">
      <div className="container mx-auto px-8">
        &copy; {new Date().getFullYear()} Prakash L Waddar. All rights reserved.
        {/* Add social media icons/links here if you like */}
      </div>
    </footer>
  );
}