import { Button } from "./components/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const pagesCount = 12;

function gotoPreviousPage() {
  console.log("previous");
}
function gotoNextPage() {
  console.log("next");
}

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-3 bg-slate-300">
      <Button onClick={gotoPreviousPage} className="px-3">
        <ChevronLeftIcon className="h-6 w-6" />
      </Button>
      {[...Array(pagesCount)].map((_, idx, arr) => {
        const lastIndex = arr.length - 1;
        const isLast = lastIndex === idx;
        const number = String(idx + 1);
        return (
          <Button.Link key={idx} url={"/" + number} variant="ghost">
            {isLast ? "..." : number}
          </Button.Link>
        );
      })}
      <Button onClick={gotoNextPage} className="px-3">
        <ChevronRightIcon className="h-6 w-6" />
      </Button>
    </div>
  );
}

export default App;
