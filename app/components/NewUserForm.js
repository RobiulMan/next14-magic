import { addUser } from "@/actions/user";

export default function NewUserForm() {
  return (
    <div className=" h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
      <div>
        <h4 className="text-lg font-bold  text-black text-center mb-5">
          Add User
        </h4>
      </div>
      <form action={addUser}>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="hover:shadow-form  w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
