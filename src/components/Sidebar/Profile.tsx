import { LogOut } from "lucide-react";

export function Profile() {
    return (
        <div className="grid items-center gap-3 grid-cols-profile">
            <img src="https://github.com/alewebcode.png" className="h-10 w-10 rounded-full" alt="" />

            <div className="flex flex-col truncate">
                <span className="text-sm font-semmibold text-zinc-700">Alexandre</span>
                <span className="truncate text-sm text-zinc-500">ale.santiagowebxxxxxxxxxxxxxxxxxxx@gmail.com</span>
            </div>
            <button type="button" className="ml-auto">
                <LogOut className="h-5 w-5 text-zinc-500" />
            </button>
        </div>
    )
}