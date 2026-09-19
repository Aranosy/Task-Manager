export function AddDialog({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-95 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black w-[500px] h-2xl flex items-center justify-center z-50">
      <span className="text-white">MEPS</span>
      <button onClick={onClose} className="absolute top-2 right-2 text-white">
        ✕
      </button>
    </div>
  );
}