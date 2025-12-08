export default function ProductField({ label, name, value, onChange, type = "text", error }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>

      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border rounded px-3 py-2"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border rounded px-3 py-2"
        />
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
