export default function layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
}
