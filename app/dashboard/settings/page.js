import Button from "@/app/components/Button";
import SortProducts from "@/app/components/SortProduct";
import { Suspense } from "react";
const Settings = () => {
  return (
    <div className="py-10 m-20">
      <h1 className="text-2xl text-center"> Setting Page</h1>

      <p className="mt-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In obcaecati
        libero enim similique adipisci perspiciatis laboriosam est dolor magni,
        officia ipsa, tempore, facilis recusandae aliquam culpa et unde tempora
        porro!
      </p>
      <Button> Go to Analytics Page</Button>

      <br />
      <br />
      <Suspense >
        <SortProducts />

      </Suspense>
    </div>
  );
};

export default Settings;
