import Assignments from "../components/Assignements";
import Notifications from "../components/Notifications";
import Quiz from "../components/Quiz";

export default function DashboardPage() {
  return (
    <>
      <Assignments />
      <Notifications />
      <Quiz />
    </>
  );
}
