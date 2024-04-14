import NewUserForm from "./components/NewUserForm";
import UserList from "./components/UserList";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="relative flex max-w-[500px] h-[430px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 text-black dark:shadow-none">
        <NewUserForm />
        <UserList />
      </div>
    </div>
  );
}
