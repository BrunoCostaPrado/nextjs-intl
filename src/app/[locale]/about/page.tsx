import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"

export default function AboutPage() {
	const t = useTranslations("About")

	return (
		<main>
			<div>
				<h1>{t("title")}</h1>
				<Link href="/" prefetch={true}>
					<div>Home</div>
				</Link>
			</div>
		</main>
	)
}
