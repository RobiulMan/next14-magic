export default function DashboardLayout({
  children,
  assignmenets,
  notificatnions,
  quiz,
}) {
  return (
    <>
      {children}
      <div className="grid gap-6 grid-cols-2 grid-rows-2 p-8">
        {assignmenets}
        {notificatnions}
        {quiz}
      </div>
    </>
  );
}
