import { Link } from "@/i18n/navigation"
import { getTranslations } from "next-intl/server"

export default async function HomePage() {
	const t = await getTranslations("HomePage")
	return (
		<main>
			<div>
				<h1>{t("title")}</h1>
				<Link href="/about" prefetch={true}>
					{t("about")}
				</Link>
			</div>
		</main>
	)
}
