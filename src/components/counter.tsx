"use client"
import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { useTranslations } from "next-intl"
import Squares from "./Squares/Squares"
import { Button } from "./ui/button"

const countAtom = atomWithStorage("count", 0)
export default function Counter() {
	const [count, setCount] = useAtom(countAtom)
	const t = useTranslations("Count")

	const increment = () => setCount(c => c + 1)
	const decrement = () => setCount(c => c - 1)
	const reset = () => setCount(0)

	return (
		<div className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-gray-950 text-gray-100">
			<div className="z-10 flex h-96 w-80 flex-col items-center rounded-3xl bg-gray-800 p-10 shadow-2xl">
				<p className="mb-10 font-extrabold text-7xl tracking-tight">{count}</p>
				<div className="mb-8 flex space-x-8">
					<Button
						type="button"
						onClick={increment}
						className="rounded-lg bg-purple-600 px-8 py-3 font-bold text-2xl text-white shadow-md transition-all hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-300"
					>
						{t("increment")}
					</Button>
					<Button
						type="button"
						onClick={decrement}
						className="rounded-lg bg-teal-600 px-8 py-3 font-bold text-2xl text-white shadow-md transition-all hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300"
					>
						{t("decrement")}
					</Button>

					<Button
						type="button"
						onClick={reset}
						className="rounded-lg bg-indigo-600 px-10 py-3 font-semibold text-white shadow-md transition-all hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300"
					>
						{t("reset")}
					</Button>
				</div>

				<Squares
					speed={0.5}
					squareSize={40}
					direction="diagonal" // up, down, left, right, diagonal
					borderColor="#7c7979"
					hoverFillColor="#fb00ff"
				/>
			</div>
		</div>
	)
}
