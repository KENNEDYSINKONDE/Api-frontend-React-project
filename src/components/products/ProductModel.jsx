export default function ProductModal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-[500px]">
        {children}

        <button
          onClick={onClose}
          className="mt-4 text-red-500 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}
