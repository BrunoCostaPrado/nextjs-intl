import { ContactForm } from "@/components/ContactForm"
import { getTranslations } from "next-intl/server"
import Link from "next/link"

export default async function ContactPage() {
	const t = await getTranslations("contactForm")
	return (
		<div>
			<h1>{t("Contact")}</h1>
			<Link href="/">Home</Link>
			<ContactForm />
		</div>
	)
}
