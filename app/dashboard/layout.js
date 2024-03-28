export default function DashboardLayout({
  children,
  assignmenets,
  notificatnions,
  quiz,
}) {
  const isLoggedIn = false;

  return (
    <>
      {children}
      <div className="grid gap-6 grid-cols-2 grid-rows-2 p-8">
        {assignmenets}
        {isLoggedIn && notificatnions}
        {quiz}
      </div>
    </>
  );
}
