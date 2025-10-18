export function FullPageSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <span className="w-14 h-14 border-4 border-white/45 border-t-transparent rounded-full animate-spin"></span>
    </div>
  );
}
