import { getUser } from "@/actions/user";

export default async function UserList() {
  const users = await getUser();
  return (
    <>
      <div className="w-full text-black overflow-x-scroll px-4 md:overflow-x-hidden">
        <table role="table" className="w-full min-w-[500px] overflow-x-scroll ">
          <thead>
            <tr role="row">
              <th
                colSpan={1}
                role="columnheader"
                title="Toggle SortBy"
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                  Name
                </div>
              </th>
              <th
                colSpan={1}
                role="columnheader"
                title="Toggle SortBy"
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                  Email address
                </div>
              </th>
              <th
                colSpan={1}
                role="columnheader"
                title="Toggle SortBy"
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                  Rating
                </div>
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup" className="px-4 ">
            {users?.length > 0 ? (
              users?.map((user) => (
                <tr key={user?._id} role="row">
                  <td className="py-3 text-sm" role="cell">
                    <div className="flex items-center gap-2">
                      <div className="h-[30px] w-[30px] rounded-full shadow-lg border border-gray-300">
                        <div className="h-full w-full rounded-full flex justify-center  items-center">
                          {user?.name?.[0]?.toUpperCase()}
                        </div>
                      </div>
                      <p className="text-sm font-medium text-navy-700 ">
                        @{user.name}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <p className="text-md font-medium text-gray-600 ">
                      {user.email}
                    </p>
                  </td>
                  <td className="py-3 text-sm" role="cell">
                    <div className="mx-2 flex font-bold">
                      <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-navy-700">
                        <div
                          className="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400"
                          style={{ width: "30%" }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <div>user not found</div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
